import type { SectionConfig } from "@/types";
import { ImageLayout } from "@/components/layouts/main/Image";
import { Engagement } from "@/features/sections/engagement/Engagement";
import { Result } from "@/features/sections/result/Result";
import { useSlideStore } from "@/store/slideStore";

export const sections: SectionConfig[] = [
  {
    id: "fv",
    component: <ImageLayout file_name="fv.jpg" alt="" />,
    showCTA: false,
  },
  {
    id: "agitation-1",
    component: <ImageLayout file_name="agitation-1.png" alt="" />,
    showCTA: false,
  },
  {
    id: "agitation-2",
    component: <ImageLayout file_name="agitation-2.png" alt="" />,
    showCTA: false,
  },
  {
    id: "agitation-3",
    component: <ImageLayout file_name="agitation-3.png" alt="" />,
    showCTA: false,
  },
  {
    id: "affinity",
    component: <ImageLayout file_name="affinity.png" alt="" />,
    showCTA: false,
  },
  {
    id: "solution-1",
    component: <ImageLayout file_name="solution-1.png" alt="" />,
    showCTA: false,
  },
  {
    id: "solution-2",
    component: <ImageLayout file_name="solution-2.png" alt="" />,
    showCTA: false,
  },
  {
    id: "solution-3",
    component: <ImageLayout file_name="solution-3.png" alt="" />,
    showCTA: false,
  },
  {
    id: "solution-4",
    component: <ImageLayout file_name="solution-4.png" alt="" />,
    showCTA: false,
  },
  {
    id: "narrow-1",
    component: <ImageLayout file_name="narrow-1.png" alt="" />,
    showCTA: false,
  },
  {
    id: "narrow-2",
    component: <ImageLayout file_name="narrow-2.png" alt="" />,
    showCTA: false,
  },
  {
    id: "offer-1",
    component: <ImageLayout file_name="offer-1.png" alt="" />,
    showCTA: false,
  },
  {
    id: "offer-2",
    component: <ImageLayout file_name="offer-2.png" alt="" />,
    showCTA: false,
  },
  {
    id: "offer-3",
    component: <ImageLayout file_name="offer-3.png" alt="" />,
    showCTA: false,
  },
  { id: "engagement", component: <Engagement />, showCTA: false },
  {
    id: "result",
    component: <Result />,
    showCTA: false,
    // 診断済みのときだけ表示
    canShow: () => useSlideStore.getState().diagnosisResult !== null,
    skipTo: {
      forward: "action-1", // 前進でスキップ → action-1へ
      backward: "engagement", // 後退でスキップ → engagementへ
    },
  },
  {
    id: "action-1",
    component: <ImageLayout file_name="action-1.png" alt="action1" />,
    showCTA: false,
  },
  {
    id: "action-2",
    component: <ImageLayout file_name="action-2.png" alt="action2" />,
    showCTA: false,
  },
];
