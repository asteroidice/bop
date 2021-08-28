import { ISample } from "../data/utils";

class AudioManager {
  audioContext = new AudioContext();
  primaryGainControl = this.audioContext.createGain();
  playStarters: Record<string, () => unknown> = {};
  constructor() {
    // Set master vol to 1
    this.primaryGainControl.gain.setValueAtTime(1, 0);

    // Main bus
    this.primaryGainControl.connect(this.audioContext.destination);
  }

  // Fetch file for and load a single sample
  async loadSample(sample: ISample) {
    const { url, id } = sample;
    const response = await fetch(url);
    const soundBuffer = await response.arrayBuffer();
    const hihatBuffer = await this.audioContext.decodeAudioData(soundBuffer);

    const play = () => {
      const soundSource = this.audioContext.createBufferSource();
      soundSource.buffer = hihatBuffer;

      soundSource.connect(this.primaryGainControl);
      soundSource.start();
    };
    this.playStarters[id] = play;
  }

  // Load an array of samples
  async loadSamples(samples: ISample[]) {
    samples.forEach((sample) => {
      this.loadSample(sample);
    });
  }

  // Play a sound
  play(sampleId: string) {
    this.playStarters[sampleId]?.();
  }
}
const audioManagerLocal = new AudioManager();
// @ts-ignore
window.audioManager = audioManagerLocal;

export const audioManager = audioManagerLocal;
