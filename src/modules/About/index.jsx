import React from 'react';
import NAT1 from '../../assets/img/nat-1-large.jpg';
import NAT2 from '../../assets/img/nat-2-large.jpg';
import NAT3 from '../../assets/img/nat-3-large.jpg';

const About = () => {
  return (
    <section className="section-about">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
          Exciting tours for adventurous people
        </h2>
      </div>

      <div className="row">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary u-margin-bottom-small">
            You're going to fall in love with nature
          </h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipiscing elit interdum,
            penatibus convallis nisl pretium eleifend ridiculus. Ligula egestas
            dolor ridiculus odio imperdiet scelerisque senectus, turpis magnis
            aptent torquent velit purus, placerat vestibulum rhoncusmontes curae
            nascetur.
          </p>

          <h3 className="heading-tertiary u-margin-bottom-small">
            Live adventures like you never have before
          </h3>
          <p className="paragraph">
            Blandit vestibulum vulputate ante condimentum varius lacus cubilia
            praesent facilisi aliquam, suscipit penatibus egestas ridiculus
            eleifend.
          </p>

          <a href="#" className="btn-text">
            Learn more &rarr;
          </a>
        </div>
        <div className="col-1-of-2">
          <div className="composition">
            <img
              src={NAT1}
              alt="Photo 1"
              className="composition__photo composition__photo--p1"
            />
            <img
              src={NAT2}
              alt="Photo 2"
              className="composition__photo composition__photo--p2"
            />
            <img
              src={NAT3}
              alt="Photo 3"
              className="composition__photo composition__photo--p3"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
