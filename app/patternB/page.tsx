"use client";
import { Swipe } from "@/components/layouts/main/Swipe";
import { CTALayout } from "@/components/layouts/main/CTA";
import { sections } from "@/features/pattern/patternB/sections.config";

export default function PatternBPage() {
  return (
    <>
      <Swipe sections={sections} />
      <CTALayout />
    </>
  );
}
