import { create } from "zustand";
import { resolveDiagnosis } from "@/lib/diagnosis";

export type DiagnosisResult = "light" | "standard" | "premium" | null;

export type DiagnosisAnswers = {
  experience: string | null;
  activity: string | null;
  goal: string | null;
  period: string | null;
  height: string;
  weight: string;
  idealWeight: string;
};

type SlideStore = {
  activeId: string;
  setActiveId: (id: string) => void;
  isLoading: boolean;
  setIsLoading: (v: boolean) => void;
  diagnosisResult: DiagnosisResult;
  diagnosisAnswers: DiagnosisAnswers;
  setDiagnosisAnswers: (answers: Partial<DiagnosisAnswers>) => void;
};

const initialAnswers: DiagnosisAnswers = {
  experience: null,
  activity: null,
  goal: null,
  period: null,
  height: "",
  weight: "",
  idealWeight: "",
};

export const useSlideStore = create<SlideStore>((set, get) => ({
  activeId: "fv",
  setActiveId: (id) => set({ activeId: id }),

  isLoading: false,
  setIsLoading: (v) => set({ isLoading: v }),

  diagnosisResult: null,
  diagnosisAnswers: initialAnswers,

  setDiagnosisAnswers: (answers) => {
    const next = { ...get().diagnosisAnswers, ...answers };
    const result = resolveDiagnosis(next);
    set({ diagnosisAnswers: next, diagnosisResult: result });
  },
}));
