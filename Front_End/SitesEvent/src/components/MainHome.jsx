import JumboC from "./JumboC";
import "./../css/MainHome.css";
import img1 from "./../assets/Rectangle2.png";
import img2 from "./../assets/Rectangle7.png";
import Carousell from "./Carousell";

import FormC from "./FormC";
/**
 * Componente MainHome che visualizza la homepage del sito.
 * Include il componente Jumbotron e il componente Carousel.
 */
export default function MainHome() {
  return (
    <>
      <main>
        <JumboC></JumboC>
        <section id="about">
          <div className="container about p-3">
            <div className="desc_about">
              <div className="title text-center">
                <h1>Welcome to Janas Event</h1>
              </div>
              <div className="descp text-center">
                <p>
                  where creativity, elegance, and meaning come together to
                  create unforgettable experiences.Inspired by the Janas,
                  mysterious, magical beings from Sardinian mythology known as
                  ancient weavers of destiny, our name carries the essence of
                  storytelling, tradition, and transformation.
                </p>
                <p>
                  Just like the Janas, who were said to dwell in hidden stone
                  dwellings (Domus de Janas) and craft intricate textiles of
                  gold, we weave together every detail of your event with care,
                  artistry, and soul. Whether you’re dreaming of an intimate
                  gathering,a bold celebration, or a brand experience that tells
                  your story, we’re here to make it not only beautiful — but
                  meaningful.
                </p>
                <p>
                  Based in the UK with Mediterranean roots, Janas Event blends
                  passion and precision to turn your vision into something truly
                  magical.
                </p>
                <span>Let’s create something timeless, together.</span>
              </div>
            </div>
            <div className="img_bg"></div>
          </div>
        </section>

        <section id="service" className="service p-3">
          <div className="container h-100 p-3 ">
            <div className="row ">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-4 ">
                <div className="desc_service">
                  <div className="title_service text-center">
                    <h3>Our Service</h3>
                  </div>
                  <div className="desc_service text-center">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eaque in fugiat excepturi quo placeat, deleniti ipsa modi
                      minus voluptas mollitia accusamus vitae minima esse!
                      Voluptatem in ipsa dicta a itaque corrupti distinctio eos
                      nesciunt provident velit, incidunt voluptatibus, soluta
                      qui fugiat voluptatum odit officia ullam illum temporibus
                      assumenda sed ad!
                    </p>
                  </div>
                </div>
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-8">
                <div className="img_service d-flex justify-content-center  gap-1">
                  <div>
                    <img className="w-100" src={img2} alt="" />{" "}
                  </div>
                  <div>
                    <img className="w-100" src={img1} alt="" />{" "}
                  </div>
                </div>
                <div className="img_service"></div>
              </div>
            </div>
          </div>
        </section>
        <section id="gallery" className="gallery  ">
          <div className="container p-3">
            <div className="desc_gallery text-center p-3 ">
              <div className="title_gallery">
                <h3>Gallery</h3>
              </div>
              <div className="desc_g">
                <p>
                  At Janas Events, we believe every celebration should tell a
                  story. Whether it's an elegant wedding, a dreamy birthday
                  party, or a corporate event with personality, our designs are
                  tailored to reflect your unique vision. Browse through our
                  gallery and discover how we bring unforgettable moments to
                  life.
                </p>
              </div>
            </div>
            <Carousell></Carousell>
          </div>
        </section>
        <section id="contact" className="formContact">
          <FormC></FormC>
        </section>
      </main>
    </>
  );
}
