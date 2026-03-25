import type { DiagnosisAnswers, DiagnosisResult } from "@/store/slideStore";

export const resolveDiagnosis = (
  answers: DiagnosisAnswers,
): DiagnosisResult => {
  const { period, goal, weight, idealWeight } = answers;
  if (!period || !weight || !idealWeight) return null;

  const loss = parseFloat(weight) - parseFloat(idealWeight);

  if (goal === "muscle") return loss >= 5 ? "premium" : "standard";
  if (period === "1-2" || loss >= 8) return "premium";
  if (period === "6+" || loss <= 3) return "light";
  return "standard";
};
