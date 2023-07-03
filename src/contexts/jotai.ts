import { Mode } from "@/config/models/Mode";
import { atom, useAtom } from "jotai";

const mode = atom<Mode>("multiple");
export const useMode = () => useAtom(mode);

const xWinCount = atom(0);
export const useXWinCount = () => useAtom(xWinCount);

const oWinCount = atom(0);
export const useOWinCount = () => useAtom(oWinCount);

const fields = atom(Array(9).fill(null));
export const useFields = () => useAtom(fields);

const boardKey = atom(0);
export const useBoardKey = () => useAtom(boardKey);

const isXTurn = atom(true);
export const useIsXTurn = () => useAtom(isXTurn);
