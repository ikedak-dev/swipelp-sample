import React from "react";
import styles from "@/components/ui/common/ProgressBar.module.css";

type Props = {
  current: number;
  total: number;
};

export const ProgressBar = ({ current, total }: Props) => {
  return (
    <div className="px-6 pt-2 pb-3 flex-shrink-0">
      <div className="flex gap-1.5 mb-1.5">
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            className={`h-[3px] flex-1 rounded-full transition-all duration-500 ${
              i < current ? "bg-[#1a3a6b]" : styles.progBarInactive
            }`}
          />
        ))}
      </div>
      <p className={`text-[10px] tracking-[0.15em] ${styles.stepLabel}`}>
        {current} / {total}
      </p>
    </div>
  );
};
