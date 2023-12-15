import React, { useEffect } from "react";
import "./main.css";
import image from "../../Assets/image1.jpg";
import image2 from "../../Assets/image2.jpg";
import image3 from "../../Assets/image3.jpg";
import image4 from "../../Assets/image4.jpg";

import { MdOutlineLocationOn } from "react-icons/md";
import Aos from "aos";
import "aos/dist/aos.css";

const Data = [
  {
    id: 1,
    imgSrc: image,
    desTitle: "Kota Tua Jakarta",
    location: "DKI Jakarta",
    grade: "STUDY TOUR",
    fees: "Rp.1.200.000,00",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi recusandae sed officiis voluptatum, tempore iste labore ea necessitatibus molestiae earum nostrum non a nobis. Facilis nemo in consectetur tempora aspernatur sunt rerum doloremque dolor ullam inventore, esse iusto ad amet repellat cumque. Quisquam dolores dolor inventore deserunt incidunt laborum iusto.",
  },
  {
    id: 2,
    imgSrc: image2,
    desTitle: "Kota Tua Jakarta",
    location: "DKI Jakarta",
    grade: "STUDY TOUR",
    fees: "Rp.1.200.000,00",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi recusandae sed officiis voluptatum, tempore iste labore ea necessitatibus molestiae earum nostrum non a nobis. Facilis nemo in consectetur tempora aspernatur sunt rerum doloremque dolor ullam inventore, esse iusto ad amet repellat cumque. Quisquam dolores dolor inventore deserunt incidunt laborum iusto.",
  },
  {
    id: 3,
    imgSrc: image3,
    desTitle: "Kota Tua Jakarta",
    location: "DKI Jakarta",
    grade: "STUDY TOUR",
    fees: "Rp.1.200.000,00",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi recusandae sed officiis voluptatum, tempore iste labore ea necessitatibus molestiae earum nostrum non a nobis. Facilis nemo in consectetur tempora aspernatur sunt rerum doloremque dolor ullam inventore, esse iusto ad amet repellat cumque. Quisquam dolores dolor inventore deserunt incidunt laborum iusto.",
  },
  {
    id: 4,
    imgSrc: image4,
    desTitle: "Kota Tua Jakarta",
    location: "DKI Jakarta",
    grade: "STUDY TOUR",
    fees: "Rp.1.200.000,00",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi recusandae sed officiis voluptatum, tempore iste labore ea necessitatibus molestiae earum nostrum non a nobis. Facilis nemo in consectetur tempora aspernatur sunt rerum doloremque dolor ullam inventore, esse iusto ad amet repellat cumque. Quisquam dolores dolor inventore deserunt incidunt laborum iusto.",
  },
];

const Main = () => {
  // Membuat Efek AOS (Animated On Scroll) Agar bisa ada Animasi dalam scroll
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="main container section">
      <div data-aos="fade-up" className="secTitle">
        <h3 data-aos="fade-up" className="title">
          Destinasi Favorit
        </h3>
      </div>

      <div data-aos="fade-up" className="secContent grid">
        {Data.map(
          ({ id, imgSrc, desTitle, location, grade, fees, description }) => {
            return (
              <div key="id" className="singleDestination">
                <div data-aos="fade-up" className="imageDiv">
                  <img src={imgSrc} alt={desTitle} />
                </div>
                <div data-aos="fade-up" className="cardInfo">
                  <h4 data-aos="fade-up" className="desTitle">
                    {desTitle}
                  </h4>
                  <span data-aos="fade-up" className="continent flex">
                    <MdOutlineLocationOn className="icon" />
                    <span data-aos="fade-up" className="name">
                      {location}
                    </span>
                  </span>

                  <div data-aos="fade-up" className="fees flex">
                    <div data-aos="fade-up" className="grade">
                      <span>
                        {grade}
                        <small>+1</small>
                      </span>
                    </div>
                    <div data-aos="fade-up" className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div data-aos="fade-up" className="desc">
                    <p>{description}</p>
                  </div>

                  <button data-aos="fade-up" className="btn flex">
                    DETAIL
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Main;
