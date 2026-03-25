"use client";

import React from "react";
import { useSlideStore } from "@/store/slideStore";
import { ImageLayout } from "@/components/layouts/main/Image";

const PLAN_IMAGE: Record<string, string> = {
  light: "result-1.png",
  standard: "result-2.png",
  premium: "result-3.png",
};

export const Result = () => {
  const { diagnosisResult } = useSlideStore();

  if (!diagnosisResult) return null;

  return (
    <ImageLayout
      file_name={PLAN_IMAGE[diagnosisResult]}
      alt={`診断結果: ${diagnosisResult}`}
    />
  );
};
