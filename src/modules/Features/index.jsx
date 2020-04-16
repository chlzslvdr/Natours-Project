import React from 'react';

const Features = () => {
  return (
    <section className="section-features">
      <div className="row">
        <div className="col-1-of-4">
          <div className="feature-box">
            <i className="feature-box__icon icon-basic-world" />
            <h3 className="heading-tertiary u-margin-bottom-small">
              Explore the world
            </h3>
            <p className="feature-box__text">
              Turpis eget sociis nascetur pretium felis convallis litora
              condimentum nisl ipsum vitae potenti.
            </p>
          </div>
        </div>

        <div className="col-1-of-4">
          <div className="feature-box">
            <i className="feature-box__icon icon-basic-compass" />
            <h3 className="heading-tertiary u-margin-bottom-small">
              Meet Nature
            </h3>
            <p className="feature-box__text">
              Scelerisque imperdiet varius sapien ultricies, cubilia ad nisl
              pharetra, massa sem sollicitudin.
            </p>
          </div>
        </div>

        <div className="col-1-of-4">
          <div className="feature-box">
            <i className="feature-box__icon icon-basic-map" />
            <h3 className="heading-tertiary u-margin-bottom-small">
              Find your way
            </h3>
            <p className="feature-box__text">
              Arcu tortor habitasse risus penatibus commodo lacinia metus vel
              porttitor curae rhoncus.
            </p>
          </div>
        </div>

        <div className="col-1-of-4">
          <div className="feature-box">
            <i className="feature-box__icon icon-basic-heart" />
            <h3 className="heading-tertiary u-margin-bottom-small">
              Live a healthier life
            </h3>
            <p className="feature-box__text">
              Ridiculus facilisi nisl tempus molestie tristique accumsan
              inceptos porttitor aliquam mauris.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
