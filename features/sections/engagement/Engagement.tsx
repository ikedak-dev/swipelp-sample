"use client";

import React, { useState } from "react";
import { useSlideStore } from "@/store/slideStore";
import { ProgressBar } from "@/components/ui/common/ProgressBar";
import { NavButton } from "@/components/ui/buttons/NavButton";
import { SkipButton } from "@/components/ui/buttons/SkipButton";
import { DiagnosisLoading } from "@/components/ui/common/DiagnosisLoading";
import {
  TOTAL_STEPS,
  EXPERIENCE,
  ACTIVITY,
  GOAL,
  PERIOD,
  DIAGNOSIS_LOADING_MS,
} from "@/constants";
import styles from "./Engagement.module.css";

export const Engagement = () => {
  const { setDiagnosisAnswers, setActiveId, isLoading, setIsLoading } =
    useSlideStore();

  const [step, setStep] = useState(1);
  const [experience, setExperience] = useState<string | null>(null);
  const [activity, setActivity] = useState<string | null>(null);
  const [goal, setGoal] = useState<string | null>(null);
  const [period, setPeriod] = useState<string | null>(null);
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [idealWeight, setIdealWeight] = useState("");

  const isFirst = step === 1;
  const isLast = step === TOTAL_STEPS;

  const canNext: boolean = (() => {
    if (step === 1) return !!experience;
    if (step === 2) return !!activity;
    if (step === 3) return !!goal;
    if (step === 4) return !!period;
    if (step === 5) return !!height && !!weight && !!idealWeight;
    return false;
  })();

  const handleBack = () => {
    if (!isFirst) setStep((s) => s - 1);
  };

  const handleNext = () => {
    if (!canNext) return;
    if (isLast) {
      setDiagnosisAnswers({
        experience,
        activity,
        goal,
        period,
        height,
        weight,
        idealWeight,
      });
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setActiveId("result");
      }, DIAGNOSIS_LOADING_MS);
      return;
    }
    setStep((s) => s + 1);
  };

  const handleSkip = () => setActiveId("action-1");

  const SPEC_FIELDS = [
    {
      label: "身長",
      placeholder: "170",
      unit: "cm",
      val: height,
      set: setHeight,
    },
    {
      label: "現在の体重",
      placeholder: "75",
      unit: "kg",
      val: weight,
      set: setWeight,
    },
    {
      label: "目標体重",
      placeholder: "65",
      unit: "kg",
      val: idealWeight,
      set: setIdealWeight,
    },
  ];

  const OPTIONS: Record<number, { label: string; value: string }[]> = {
    1: EXPERIENCE,
    2: ACTIVITY,
    3: GOAL,
    4: PERIOD,
  };

  const SELECTED: Record<number, string | null> = {
    1: experience,
    2: activity,
    3: goal,
    4: period,
  };

  const ON_SELECT: Record<number, (v: string) => void> = {
    1: setExperience,
    2: setActivity,
    3: setGoal,
    4: setPeriod,
  };

  const QUESTIONS: Record<number, string> = {
    1: "Q1. 運動経験を教えてください",
    2: "Q2. 1日の活動量を教えてください",
    3: "Q3. ジムに通う一番の目的は？",
    4: "Q4. いつまでに達成したいですか？",
  };

  if (isLoading) return <DiagnosisLoading />;

  return (
    <div className={styles.container}>
      <div className="px-6 pt-10 pb-1 flex-shrink-0 text-center">
        <h2 className={`text-lg font-black leading-snug ${styles.title}`}>
          どのプランが自分に合うか
          <br />
          わからない方へ
        </h2>
        <p className={`mt-1 text-xs leading-relaxed ${styles.desc}`}>
          質問に答えるだけで、あなたに最もフィットするプランをご提案します。
        </p>
      </div>

      <ProgressBar current={step} total={TOTAL_STEPS} />

      {step <= 4 && (
        <div className="flex flex-col flex-shrink-0 px-6 pt-1 pb-2">
          <p className={`text-sm font-bold mb-2 ${styles.questionLabel}`}>
            {QUESTIONS[step]}
          </p>
          <div className="flex flex-col gap-2">
            {OPTIONS[step].map((opt) => {
              const isSelected = SELECTED[step] === opt.value;
              return (
                <button
                  key={opt.value}
                  onClick={() => ON_SELECT[step](opt.value)}
                  className={
                    isSelected ? styles.optionBtnSelected : styles.optionBtn
                  }
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {step === 5 && (
        <div className="flex flex-col flex-shrink-0 px-6 pt-1 pb-2">
          <p className={`text-sm font-bold mb-4 ${styles.questionLabel}`}>
            Q5. あなたのスペックを教えてください
          </p>
          <div className="flex flex-col gap-4">
            {SPEC_FIELDS.map((f) => (
              <div key={f.label} className={styles.specRow}>
                <p className={`text-sm font-medium ${styles.specLabel}`}>
                  {f.label}
                </p>
                <input
                  type="number"
                  placeholder={f.placeholder}
                  value={f.val}
                  onChange={(e) => f.set(e.target.value)}
                  className={styles.specInput}
                />
                <span className={`text-sm ${styles.specUnit}`}>{f.unit}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex-1" />

      <NavButton
        onBack={handleBack}
        onNext={handleNext}
        isFirst={isFirst}
        isLast={isLast}
        canNext={canNext}
      />
      <SkipButton onClick={handleSkip} />
    </div>
  );
};
