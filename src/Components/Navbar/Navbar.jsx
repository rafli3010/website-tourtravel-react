import React, { useState } from "react";
import "./navbar.css";
import { MdOutlineTravelExplore } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
  const [active, setActive] = useState("navBar");
  // Fungsi ke Toggle Navbar
  const showNav = () => {
    setActive("navBar activeNavbar");
  };

  const closeNav = () => {
    setActive("navBar");
  };

  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1>
              <MdOutlineTravelExplore className="icon" />
              RP Tour & Travel
            </h1>
          </a>
        </div>
        <div className={active}>
          <ul className="navList flex">
            <li className="navItem">
              <a href="#" className="navLink">
                Beranda
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Paket
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Toko
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Tentang
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Berita
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Kontak
              </a>
            </li>

            <button className="btn">
              <a href="#">Book Now</a>
            </button>
          </ul>

          <div onClick={closeNav} className="closeNavbar">
            <IoIosCloseCircle className="icon" />
          </div>
        </div>
        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;
