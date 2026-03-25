import Link from "next/link";
import styles from "./CTAButton.module.css";
import { URLS } from "@/constants";

const CtaButton = () => {
  return (
    <Link href={`${URLS.CTA_URL}`} className="flex justify-center w-full">
      <div
        className={`relative flex items-center justify-center w-full px-6 py-4 rounded-full cursor-pointer ${styles.button}`}
      >
        <div
          className={`absolute top-0 left-0 right-0 h-1/2 rounded-t-full opacity-20 ${styles.shine}`}
        />
        <span className="relative flex items-center font-bold text-xl sm:text-2xl tracking-wide text-white">
          <span className="break-keep">無料体験に申し込む</span>
          <span
            className={`ml-3 shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full p-[2px] ${styles.iconWrapper}`}
          >
            <span className="flex items-center justify-center w-full h-full rounded-full bg-white">
              <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
                <path d="M1 1l10 6-10 6V1z" fill="url(#btnGrad)" />
                <defs>
                  <linearGradient id="btnGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#22c55e" />
                    <stop offset="50%" stopColor="#16a34a" />
                    <stop offset="100%" stopColor="#15803d" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </span>
        </span>
      </div>
    </Link>
  );
};

export default CtaButton;
