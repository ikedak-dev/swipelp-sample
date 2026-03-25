import React from "react";
import styles from "@/components/ui/buttons/SkipButton.module.css";

type Props = {
  onClick: () => void;
};

export const SkipButton = ({ onClick }: Props) => {
  return (
    <div className="px-6 pt-3 pb-5 flex-shrink-0">
      <button
        onClick={onClick}
        className={`w-full rounded-xl text-sm font-medium tracking-wide transition-all duration-200 active:scale-[0.98] bg-transparent ${styles.skipBtn}`}
        style={{ height: "52px" }}
      >
        プランをすでに決めている方はこちら
      </button>
    </div>
  );
};
