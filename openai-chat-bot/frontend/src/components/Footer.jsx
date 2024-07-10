import React from "react";
import "../css/Footer.css";

const Footer = () => {
  return (
    // Using React fragments to avoid unnecessary divs
    <>
      <footer>
        Created by Maxim Dymchenko
        <a target='_blank' href='https://github.com/maximdymchenko'>
          Github
        </a>
        <a target='_blank' href='https://leetcode.com/u/maximdym/'>
          Leetcode
        </a>
      </footer>
    </>
  );
};

export default Footer;
