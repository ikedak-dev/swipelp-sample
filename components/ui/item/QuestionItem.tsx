import React from "react";
import styles from "@/components/ui/item/QuestionItem.module.css";

type Props = {
  label: string;
  sub?: string;
  selected: boolean;
  onClick: () => void;
};

export const QuestionItem = ({ label, sub, selected, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`w-full rounded-xl px-5 py-4 text-left transition-all duration-200 active:scale-[0.98] ${
        selected ? styles.optionBtnSelected : styles.optionBtn
      }`}
    >
      <p
        className={`text-sm font-bold leading-snug ${
          selected ? styles.optionLabelSelected : styles.optionLabel
        }`}
      >
        {label}
      </p>
      {sub && (
        <p className="text-[14px] mt-1 leading-snug text-zinc-500">{sub}</p>
      )}
    </button>
  );
};
