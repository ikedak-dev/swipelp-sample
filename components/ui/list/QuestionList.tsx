import React from "react";
import { QuestionItem } from "@/components/ui/item/QuestionItem";

export type Option = {
  label: string;
  sub?: string;
  value: string;
};

type Props = {
  question: string;
  options: Option[];
  selected: string | null;
  onSelect: (value: string) => void;
};

export const QuestionList = ({
  question,
  options,
  selected,
  onSelect,
}: Props) => {
  return (
    <div className="flex flex-col px-6 pt-1 pb-2 flex-shrink-0">
      <p className="text-sm font-bold mb-3" style={{ color: "#1a3a6b" }}>
        {question}
      </p>
      <div className="flex flex-col gap-2">
        {options.map((opt) => (
          <QuestionItem
            key={opt.value}
            label={opt.label}
            sub={opt.sub}
            selected={selected === opt.value}
            onClick={() => onSelect(opt.value)}
          />
        ))}
      </div>
    </div>
  );
};
