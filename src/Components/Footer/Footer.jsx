import React, { useEffect } from "react";
import "./footer.css";
import video2 from "../../Assets/video2.mp4";
import { FiChevronRight, FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import {
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlineTwitter,
  AiOutlineWhatsApp,
} from "react-icons/ai";

import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  // Membuat Efek AOS (Animated On Scroll) Agar bisa ada Animasi dalam scroll
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div data-aos="fade-up" className="secContent container">
        <div className="contactDiv">
          <div className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel With Us</h2>
          </div>

          <div className="inputDiv flex">
            <input type="text" placeholder="Masukkan Email" />
            <button className="btn flex" type="submit">
              SEND <FiSend className="icon" />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                <MdOutlineTravelExplore className="icon" /> RP Tour & Travel
              </a>
            </div>
            <div className="footerParagraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
              aliquam. Quaerat odio quam praesentium veniam.
            </div>

            <div className="footerSocials flex">
              {<AiOutlineWhatsApp className="icon" />}
              {<AiOutlineMail className="icon" />}
              {<AiOutlineInstagram className="icon" />}
              {<AiOutlineTwitter className="icon" />}
            </div>
          </div>

          <div className="footerLinks grid">
            <div className="linkGroup">
              <span className="groupTitle">KONTAK KAMI</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Services
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Services
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Services
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Services
              </li>
            </div>

            <div className="linkGroup">
              <span className="groupTitle">PARTNER</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Hotel
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Bus Pariwisata
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Rumah Makan
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Services
              </li>
            </div>

            <div className="linkGroup">
              <span className="groupTitle">PENCARIAN TERAKHIR</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Jakarta
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Bandung
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Yogyakarta
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Semarang
              </li>
            </div>
          </div>

          <div className="footerDiv flex">
            <small>WEBSITE TRAVEL TERBAIK</small>
            <small>BY RAFLI RAKHA PRATAMA </small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
