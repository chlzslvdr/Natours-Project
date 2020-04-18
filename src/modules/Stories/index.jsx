import React from 'react';
import FIGURE_1 from '../../assets/img/nat-8.jpg';
import FIGURE_2 from '../../assets/img/nat-9.jpg';
import VIDEO_1 from '../../assets/img/video.mp4';
import VIDEO_2 from '../../assets/img/video.webm';

const Stories = () => {
  return (
    <section className="section-stories">
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
          <source src={VIDEO_1} type="video/mp4" />
          <source src={VIDEO_2} type="video/webm" />
          You're browser is not supported!
        </video>
      </div>

      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">We make people genuinely happy</h2>
      </div>

      <div className="row">
        <div className="story">
          <figure className="story__shape">
            <img src={FIGURE_1} alt="Figure 1" className="story__img" />
            <figcaption className="story__caption">Mary Smith</figcaption>
          </figure>
          <div className="story__text">
            <h3 className="heading-tertiary u-margin-bottom-small ">
              I had the best week ever with my family
            </h3>
            <p>
              Fusce convallis facilisi elementum primis nulla nibh libero cum
              tincidunt rutrum, metus molestie taciti leo hendreritiaculis
              maecenas netus orci non duis pellentesque inceptos nam, et vivamus
              magna volutpat etiam facilis hac massa dignissim ultricies iaculis
              vehicula aenean tempus elementum conubia!
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="story">
          <figure className="story__shape">
            <img src={FIGURE_2} alt="Figure 2" className="story__img" />
            <figcaption className="story__caption">Jack Wilson</figcaption>
          </figure>
          <div className="story__text">
            <h3 className="heading-tertiary u-margin-bottom-small ">
              Wow! My Life is completely different now
            </h3>
            <p>
              Duis sociis dis inceptos etiam metus accumsan nullam pretium felis
              diam, curabitur lobortis quam cursus nisl neque pharetra fusce,
              ullamcorper. Aliquet rhoncus sapien magna semper praesent taciti
              habitant mollis, dignissim neque parturient, interdum vel purus
              lobortis diam nullam nisi tristique sagittis.
            </p>
          </div>
        </div>
      </div>

      <div className="u-center-text u-margin-top-huge">
        <a href="#" className="btn-text">
          Read all stories &rarr;
        </a>
      </div>
    </section>
  );
};

export default Stories;
