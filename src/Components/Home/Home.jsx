import React, { useEffect } from "react";
import "./home.css";
import video from "../../Assets/video.mp4";
import { IoLocationOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { SiGooglemaps } from "react-icons/si";
import { BsListTask } from "react-icons/bs";
import { TbApps } from "react-icons/tb";

import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  // Membuat Efek AOS (Animated On Scroll) Agar bisa ada Animasi dalam scroll
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="home">
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type="video/mp4"></video>

      <div className="homeContent container">
        <div className="textDiv">
          <span data-aos="fade-up" className="smallText">
            Paket Kami
          </span>
          <h1 data-aos="fade-up" className="homeTitle">
            Cari Liburan Kamu
          </h1>
        </div>

        <div data-aos="fade-up" className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city">Cari Destinasi:</label>
            <div className="input flex">
              <input type="text" placeholder="Enter Name Here...." />
              <IoLocationOutline className="icon" />
            </div>
          </div>
          <div className="dateInput">
            <label htmlFor="date">Pilih Tanggal:</label>
            <div className="input flex">
              <input type="date" />
            </div>
          </div>
          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price:">Max Price:</label>
              <h3 className="total">Rp10000000</h3>
            </div>
            <div className="input flex">
              <input type="range" max="10000000" min="1000" />
            </div>
          </div>
          <div className="searchOptions flex">
            <IoSearch className="icon" />
            <span>FILTER</span>
          </div>
        </div>

        <div data-aos="fade-up" className="homeFooterIcons flex">
          <div className="rightIcons">
            <FaWhatsapp className="icon" />
            <FaInstagram className="icon" />
            <SiGooglemaps className="icon" />
          </div>

          <div className="leftIcons">
            <BsListTask className="icon" />
            <TbApps className="icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
