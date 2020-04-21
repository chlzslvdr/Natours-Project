import React from 'react';
import TOUR_1 from '../../assets/img/nat-8.jpg';
import TOUR_2 from '../../assets/img/nat-9.jpg';

const Popup = () => {
  return (
    <div className="popup" id="popup">
      <div className="popup__content">
        <div className="popup__left">
          <img src={TOUR_1} alt="Tour photo" className="popup__img" />
          <img src={TOUR_2} alt="Tour photo 2" className="popup__img" />
        </div>

        <div className="popup__right">
          <a href="#section-tours" className="popup__close">
            &times;
          </a>
          <h2 className="heading-secondary u-margin-bottom-small">
            Start booking now
          </h2>
          <h3 className="heading-tertiary u-margin-bottom-small">
            Important &ndash; Please read the terms and conditions first
          </h3>
          <p className="popup__text">
            Fermentum tempor interdum morbi massa molestie purus luctus felis
            vulputate, nibh sociosqu mauris et tempus mattis dui nostra. Taciti
            pellentesque tincidunt aptent eros magnis mi integer tristique mus.
            Ridiculus dis maecenas euismod enim tempor elementum eleifend
            iaculis montes lacus tristique, vel lectus felis augue habitant
            litora gravida sem. Consequat ridiculus suscipit nascetur velaris
            gravida lorem vivamus curae fringilla ante varius tempus commodo
            hendrerit cubilia, duis lacinia tortor proin ultrices semper
            placerat maecenas lobortis. Rutrum molestie nisl quis cubilia vel
            tortor fringilla sapien, tempor faucibus cras maecenas metus orci
            turpis dolor porta.
          </p>
          <a href="#" className="btn btn--green">
            Book now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Popup;
