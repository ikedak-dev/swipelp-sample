import CtaButton from "@/components/ui/buttons/CTAButton";
import { LAYOUT } from "@/constants";
export const CTALayout = () => {
  return (
    <div
      className="absolute bottom-0 left-0 right-0 z-50 flex items-center justify-center"
      style={{ height: `${LAYOUT.CTA_HEIGHT}px` }}
    >
      <div className="w-full p-8">
        <CtaButton />
      </div>
    </div>
  );
};
