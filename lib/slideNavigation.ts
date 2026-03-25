import type { SectionConfig } from "@/types";

export const getVisibleSections = (
  sections: SectionConfig[],
  diagnosisResult: string | null,
): SectionConfig[] => {
  return sections.filter((s) => s.id !== "result" || diagnosisResult !== null);
};

export const getIndexById = (sections: SectionConfig[], id: string): number => {
  return sections.findIndex((s) => s.id === id);
};
