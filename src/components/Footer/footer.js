import React from "react";
import { Link } from "gatsby";
import { FaEnvelope, FaInstagram, FaFacebook, FaTwitter, FaResearchgate, FaLinkedin } from 'react-icons/fa'


import footerStyles from "./footer.module.css";

const Footer = () => (

      <footer id="footer" className={footerStyles.Footer}>
        <div className={footerStyles.content}>
          <div className={footerStyles.inner}>
            <section className={footerStyles.about}>
              <h3>Button to specific link</h3>
              <p>
               A link to something specific that someone may be looking for on your website.
              </p>
              <ul className={footerStyles.actions}>
                <li>
                  <a href="#" className={footerStyles.button}>
                    Link to thing
                  </a>
                </li>
              </ul>
            </section>
            <div className={footerStyles.contact}>
            <ul className={footerStyles.iconBulleted}>
              <h3>Get In Touch</h3>
              <li className={footerStyles.Social}>
                  <a href="https://facebook.com"><FaFacebook /></a> 
                  <a href="https://instagram.com"><FaInstagram /></a>
                  <a href="https://twitter.com"><FaTwitter /></a>
                  {/*<a href="https://researchgate.com"><FaResearchgate /></a>
                  <a href="https://linkedin.com"><FaLinkedin /></a>*/}
              </li>
            </ul>
            </div>
          </div>
        </div>
        <p className={footerStyles.copyright}>
          Created by <a href="https://salemaziel.com">Salem Aziel</a> © All Rights Reserved
          </p>

      </footer>
    );
;
export default Footer;
