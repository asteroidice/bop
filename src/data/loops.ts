import { prependURls } from "./utils";

const loops = {
    "SDPUFC2_Bass_Loop_03_115_Gm.wav": {url: "SDPUFC2_Bass_Loop_03_115_Gm.wav", id: "SDPUFC2_Bass_Loop_03_115_Gm.wav"},
"SDPUFC2_Bass_Loop_11_115_Gm.wav": {url: "SDPUFC2_Bass_Loop_11_115_Gm.wav", id: "SDPUFC2_Bass_Loop_11_115_Gm.wav"},
"SDPUFC2_Drum_Loop_06_115.wav": {url: "SDPUFC2_Drum_Loop_06_115.wav", id: "SDPUFC2_Drum_Loop_06_115.wav"},
"SDPUFC2_Drum_Loop_09_115.wav": {url: "SDPUFC2_Drum_Loop_09_115.wav", id: "SDPUFC2_Drum_Loop_09_115.wav"},
"SDPUFC2_Drum_Loop_10_115.wav": {url: "SDPUFC2_Drum_Loop_10_115.wav", id: "SDPUFC2_Drum_Loop_10_115.wav"},
"SDPUFC2_Guitar_Loop_08_115_Gm.wav": {url: "SDPUFC2_Guitar_Loop_08_115_Gm.wav", id: "SDPUFC2_Guitar_Loop_08_115_Gm.wav"},
"SDPUFC2_Percussion_Loop_06_115.wav": {url: "SDPUFC2_Percussion_Loop_06_115.wav", id: "SDPUFC2_Percussion_Loop_06_115.wav"},
}

type SampleName = keyof typeof loops;

prependURls(loops, "/Funk/Loops/");

const loopGridNames: SampleName[] = [
    "SDPUFC2_Guitar_Loop_08_115_Gm.wav",
    "SDPUFC2_Percussion_Loop_06_115.wav",
    "SDPUFC2_Bass_Loop_03_115_Gm.wav",
    "SDPUFC2_Bass_Loop_11_115_Gm.wav",
    "SDPUFC2_Drum_Loop_09_115.wav",
    "SDPUFC2_Drum_Loop_10_115.wav"
];
export const loopGrid = loopGridNames.map(x => loops[x]);