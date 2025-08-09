/**
 * Componente Carousel che visualizza una serie di immagini in una sequenza.
 * Utilizza la libreria Swiper per la gestione delle immagini.
 */
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./../css/Carousell.css";
import img1 from "./../assets/Rectangle44.png";
import img2 from "./../assets/Rectangle45.png";
// import required modules
import { Navigation } from "swiper/modules";
export default function Carousell() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img src={img1} alt="Image 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="Image 2 " />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
