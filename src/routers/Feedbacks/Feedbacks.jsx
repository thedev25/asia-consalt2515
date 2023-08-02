import React from "react";
import "./Feedbacks.css";
import img1 from "../../assets/01.jpg";
import img2 from "../../assets/02-2.jpg";
import img3 from "../../assets/03.jpg";
import img4 from "../../assets/04.jpg";
import img5 from "../../assets/05.jpg";
import img6 from "../../assets/06.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import MainForm from "../../components/MainForm/MainForm";

function Feedbacks() {
  return (
    <div>
      <main>
        <section className="feedbacks container-fluid p-0">
          <h2>Муваффақиятли талабаларимизниг шарҳлари</h2>
          <div className="feedbacks_row">
            <div
              className="iteem video-modal col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12"
              data-src="fNY4kHkf8Z4"
            >
              <div className="content">
                <div className="video-feed">
                  <LazyLoadImage
                    effect="blur"
                    delayTime={6000}
                    src={img1}
                    alt="student videofeed"
                  />
                </div>
              </div>
            </div>
            <div
              className="iteem video-modal col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12"
              data-src="tGs2UA_Uqfo"
            >
              <div className="content">
                <div className="video-feed">
                  <LazyLoadImage
                    effect="blur"
                    delayTime={6000}
                    src={img2}
                    alt="student videofeed"
                  />
                </div>
              </div>
            </div>
            <div
              className="iteem video-modal col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12"
              data-src="OoMFWejh-DY"
            >
              <div className="content">
                <div className="video-feed">
                  <LazyLoadImage
                    effect="blur"
                    delayTime={6000}
                    src={img3}
                    alt="student videofeed"
                  />
                </div>
              </div>
            </div>
            <div
              className="iteem video-modal col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12"
              data-src="4dnhNPRxwGk"
            >
              <div className="content">
                <div className="video-feed">
                  <LazyLoadImage
                    effect="blur"
                    delayTime={6000}
                    src={img4}
                    alt="student videofeed"
                  />
                </div>
              </div>
            </div>
            <div
              className="iteem video-modal col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12"
              data-src="yaNaJCOGsP8"
            >
              <div className="content">
                <div className="video-feed">
                  <LazyLoadImage
                    effect="blur"
                    delayTime={6000}
                    src={img5}
                    alt="student videofeed"
                  />
                </div>
              </div>
            </div>
            <div
              className="iteem video-modal col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12"
              data-src="EYViPDu0UO8"
            >
              <div className="content">
                <div className="video-feed">
                  <LazyLoadImage
                    effect="blur"
                    delayTime={6000}
                    src={img6}
                    alt="student videofeed"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <MainForm />
    </div>
  );
}

export default Feedbacks;
