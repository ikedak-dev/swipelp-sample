"use client";
import { Swipe } from "@/components/layouts/main/Swipe";
import { CTALayout } from "@/components/layouts/main/CTA";
import { sections } from "@/features/pattern/patternA/sections.config";

export default function PatternAPage() {
  return (
    <>
      <Swipe sections={sections} />
      <CTALayout />
    </>
  );
}
