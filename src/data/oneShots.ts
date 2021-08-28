import { prependURls } from "./utils";

const oneShots = {
  "SDPUFC2_Arpeggiator_Loop_05_112_G#m.wav" : { url: "SDPUFC2_Arpeggiator_Loop_05_112_G#m.wav", id: "SDPUFC2_Arpeggiator_Loop_05_112_G#m.wav" },
  "SDPUFC2_Arpeggiator_Loop_10_116_G#m.wav" : { url: "SDPUFC2_Arpeggiator_Loop_10_116_G#m.wav", id: "SDPUFC2_Arpeggiator_Loop_10_116_G#m.wav" },
  "SDPUFC2_FX_Loop_01_100.wav" : { url: "SDPUFC2_FX_Loop_01_100.wav", id: "SDPUFC2_FX_Loop_01_100.wav" },
  "SDPUFC2_FX_Loop_02_100.wav" : { url: "SDPUFC2_FX_Loop_02_100.wav", id: "SDPUFC2_FX_Loop_02_100.wav" },
  "SDPUFC2_FX_Loop_04_100.wav" : { url: "SDPUFC2_FX_Loop_04_100.wav", id: "SDPUFC2_FX_Loop_04_100.wav" },
  "SDPUFC2_FX_Loop_05_100.wav" : { url: "SDPUFC2_FX_Loop_05_100.wav", id: "SDPUFC2_FX_Loop_05_100.wav" },
  "SDPUFC2_FX_Loop_06_100.wav" : { url: "SDPUFC2_FX_Loop_06_100.wav", id: "SDPUFC2_FX_Loop_06_100.wav" },
  "SDPUFC2_FX_Loop_08_100.wav" : { url: "SDPUFC2_FX_Loop_08_100.wav", id: "SDPUFC2_FX_Loop_08_100.wav" },
  "SDPUFC2_FX_Loop_09_115.wav" : { url: "SDPUFC2_FX_Loop_09_115.wav", id: "SDPUFC2_FX_Loop_09_115.wav" },
  "SDPUFC2_Kick_Drum_02.wav" : { url: "SDPUFC2_Kick_Drum_02.wav", id: "SDPUFC2_Kick_Drum_02.wav" },
  "SDPUFC2_Kick_Drum_15.wav" : { url: "SDPUFC2_Kick_Drum_15.wav", id: "SDPUFC2_Kick_Drum_15.wav" },
  "SDPUFC2_Percussion_Hit_06.wav" : { url: "SDPUFC2_Percussion_Hit_06.wav", id: "SDPUFC2_Percussion_Hit_06.wav" },
  "SDPUFC2_Percussion_Hit_07.wav" : { url: "SDPUFC2_Percussion_Hit_07.wav", id: "SDPUFC2_Percussion_Hit_07.wav" },
  "SDPUFC2_Percussion_Hit_16.wav" : { url: "SDPUFC2_Percussion_Hit_16.wav", id: "SDPUFC2_Percussion_Hit_16.wav" },
  "SDPUFC2_Single_Clap_14.wav" : { url: "SDPUFC2_Single_Clap_14.wav", id: "SDPUFC2_Single_Clap_14.wav" },
  "SDPUFC2_Single_Snare_06.wav" : { url: "SDPUFC2_Single_Snare_06.wav", id: "SDPUFC2_Single_Snare_06.wav" },
};

prependURls(oneShots, "/Funk/OneShots/");

const oneShotGridNames: (keyof typeof oneShots)[] = [
    // top row
    "SDPUFC2_FX_Loop_01_100.wav",
    "SDPUFC2_FX_Loop_08_100.wav",
    "SDPUFC2_FX_Loop_09_115.wav",
    // middle row
    "SDPUFC2_Percussion_Hit_07.wav",
    "SDPUFC2_Percussion_Hit_16.wav",
    "SDPUFC2_Percussion_Hit_06.wav",
    // Bottom row
    "SDPUFC2_Single_Clap_14.wav",
    "SDPUFC2_Single_Snare_06.wav",
    "SDPUFC2_Kick_Drum_02.wav"
]

export const oneShotGrid = oneShotGridNames.map(x => oneShots[x]);