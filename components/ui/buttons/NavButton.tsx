import React from "react";
import styles from "@/components/ui/buttons/NavButton.module.css";

type Props = {
  onBack: () => void;
  onNext: () => void;
  isFirst: boolean;
  isLast: boolean;
  canNext: boolean;
};

export const NavButton = ({
  onBack,
  onNext,
  isFirst,
  isLast,
  canNext,
}: Props) => {
  return (
    <div className="flex flex-row items-center gap-3 px-6 pt-4 pb-2 flex-shrink-0">
      <button
        onClick={onBack}
        disabled={isFirst}
        className={`flex-shrink-0 flex items-center justify-center text-base font-bold transition-all duration-200 bg-transparent rounded-xl ${
          isFirst ? styles.backBtnDisabled : styles.backBtn
        }`}
        style={{ width: "56px", height: "56px" }}
      >
        ←
      </button>
      <button
        onClick={onNext}
        disabled={!canNext}
        className="flex-1 font-bold text-sm rounded-xl tracking-wide transition-all duration-200 active:scale-[0.98] border-none"
        style={{
          height: "56px",
          backgroundColor: canNext ? "#1a3a6b" : "#e2e8f0",
          color: canNext ? "#ffffff" : "#94a3b8",
          cursor: canNext ? "pointer" : "not-allowed",
        }}
      >
        {isLast ? "診断する →" : "次へ →"}
      </button>
    </div>
  );
};
