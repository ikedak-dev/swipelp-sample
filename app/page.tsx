import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/patternA");
}
