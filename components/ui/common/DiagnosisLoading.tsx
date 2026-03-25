import React, { useEffect, useState } from "react";
import { DIAGNOSIS_LOADING_MS } from "@/constants";
import styles from "./DiagnosisLoading.module.css";

export const DiagnosisLoading = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startTime = performance.now();
    const tick = () => {
      const elapsed = performance.now() - startTime;
      const next = Math.min((elapsed / DIAGNOSIS_LOADING_MS) * 100, 100);
      setProgress(next);
      if (next < 100) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, []);

  return (
    <div className={styles.container}>
      <p className={styles.label}>Analyzing</p>

      <div className={styles.progressWrapper}>
        <div className={styles.progressTrack}>
          <div
            className={styles.progressFill}
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className={styles.progressNum}>{Math.floor(progress)}%</p>
      </div>

      <div className={styles.dots}>
        <span />
        <span />
        <span />
      </div>

      <div className={styles.textBlock}>
        <p className={styles.mainText}>分析中</p>
        <p className={styles.subText}>
          あなたの回答をもとに
          <br />
          最適なプランを診断しています
        </p>
      </div>
    </div>
  );
};
