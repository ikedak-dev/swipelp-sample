export type SectionConfig = {
  id: string;
  component: React.ReactNode;
  showCTA: boolean;
  // このスライドを表示する条件。falseを返したらスキップ
  canShow?: () => boolean;
  // スキップ時の遷移先id。未指定なら次 or 前のスライドに進む
  skipTo?: {
    forward: string; // 前進方向でスキップ時
    backward: string; // 後退方向でスキップ時
  };
};
