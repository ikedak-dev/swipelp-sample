export const TOTAL_STEPS = 5;

export const DIAGNOSIS_LOADING_MS = 3000;

export const LAYOUT = {
  CTA_HEIGHT: 160,
} as const;

export const URLS = {
  CTA_URL: "",
} as const;

export const EXPERIENCE = [
  { label: "ほぼなし", value: "none" },
  { label: "過去にやっていた", value: "past" },
  { label: "現在も継続中", value: "current" },
];

export const ACTIVITY = [
  { label: "デスクワーク中心", value: "desk" },
  { label: "立ち仕事・外回り", value: "standing" },
  { label: "肉体労働", value: "physical" },
];

export const GOAL = [
  { label: "体重・体脂肪を減らしたい", value: "lose" },
  { label: "筋肉をつけたい", value: "muscle" },
  { label: "脂肪を落としながら筋肉もつけたい", value: "both" },
  { label: "健康維持・体力向上", value: "health" },
];

export const PERIOD = [
  { label: "1〜2ヶ月以内", value: "1-2" },
  { label: "3ヶ月以内", value: "3" },
  { label: "6ヶ月以上かけてじっくり", value: "6+" },
];

export const PLAN_IMAGE: Record<string, string> = {
  light: "result-1.png",
  standard: "result-2.png",
  premium: "result-3.png",
};
