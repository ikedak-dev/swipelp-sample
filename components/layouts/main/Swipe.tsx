import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
import { useSlideStore } from "@/store/slideStore";
import { getVisibleSections, getIndexById } from "@/lib/slideNavigation";
import type { SectionConfig } from "@/types";
import type { Swiper as SwiperType } from "swiper";
import { LAYOUT } from "@/constants";

type Props = {
  sections: SectionConfig[];
};

export const Swipe = ({ sections }: Props) => {
  const { activeId, setActiveId, diagnosisResult, isLoading } = useSlideStore();
  const swiperRef = useRef<SwiperType | null>(null);

  const visibleSections = getVisibleSections(sections, diagnosisResult);

  // isLoadingが変わったらSwiperインスタンスに直接反映
  useEffect(() => {
    if (!swiperRef.current) return;
    swiperRef.current.allowTouchMove = !isLoading;
    swiperRef.current.mousewheel[isLoading ? "disable" : "enable"]();
  }, [isLoading]);

  useEffect(() => {
    if (!swiperRef.current) return;
    const index = getIndexById(visibleSections, activeId);
    if (index !== -1 && swiperRef.current.activeIndex !== index) {
      swiperRef.current.slideTo(index);
    }
  }, [activeId, diagnosisResult]);

  return (
    <Swiper
      direction="vertical"
      slidesPerView={1}
      mousewheel={true}
      allowTouchMove={true}
      modules={[Mousewheel, Pagination]}
      pagination={{ type: "progressbar", clickable: true }}
      className="w-full overflow-hidden"
      style={{ height: `calc(100dvh - ${LAYOUT.CTA_HEIGHT}px)` }}
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
      onSlideChange={(swiper) => {
        if (isLoading) return;
        setActiveId(visibleSections[swiper.activeIndex].id);
      }}
    >
      {visibleSections.map((section) => (
        <SwiperSlide key={section.id}>{section.component}</SwiperSlide>
      ))}
    </Swiper>
  );
};
