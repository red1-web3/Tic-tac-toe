import { Mode } from "@/config/models/Mode";
import { atom, useAtom } from "jotai";

const mode = atom<Mode>("easy");
export const useMode = () => useAtom(mode);

const xWinCount = atom(0);
export const useXWinCount = () => useAtom(xWinCount);

const oWinCount = atom(0);
export const useOWinCount = () => useAtom(xWinCount);
