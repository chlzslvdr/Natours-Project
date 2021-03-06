import React from 'react';
import LOGO1 from '../../assets/img/logo-green-1x.png';
import LOGO2 from '../../assets/img/logo-green-2x.png';
import LOGO1_small from '../../assets/img/logo-green-small-1x.png';
import LOGO2_small from '../../assets/img/logo-green-small-2x.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo-box">
        <picture className="footer__logo">
          <source
            srcSet={`${LOGO1_small} 1x, ${LOGO2_small} 2x`}
            media="(max-width: 37.5em)"
          />
          <img
            src={LOGO2}
            srcSet={`${LOGO1} 1x, ${LOGO2} 2x`}
            alt="Full logo"
            className="footer__logo"
          />
        </picture>
      </div>

      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Company
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Contact us
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Careers
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Privacy Policy
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
          <p className="footer__copyright">
            Built by{' '}
            <a
              href="https://github.com/chlzslvdr"
              target="_blank"
              className="footer__link"
            >
              Chelzea Salvador
            </a>{' '}
            while learning an online course on
            <a
              href="https://github.com/jonasschmedtmann/advanced-css-course.git"
              target="_blank"
              className="footer__link"
            >
              Advanced CSS and Sass
            </a>
            . Copyright &copy; by Jonas Schmedtmann. You are 100% allowed to use
            this webpage for both personal and commercial use, but NOT to claim
            it as your own design. A credit to the original author, Jonas
            Schmedtmann, is of course highly appreciated!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
