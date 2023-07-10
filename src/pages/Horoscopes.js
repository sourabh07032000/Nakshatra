import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { Row, Grid, Col } from "react-bootstrap";

const Horoscopes = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    flexDirection: "row",
  };
  return (
    <>
      <section className="category-section-2">
        <div className="container-fluid-lg">
          <div className="title">
            <h2>Daily Horoscopes</h2>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="category-slider arrow-slider">
                <Slider {...settings}>
                  <div className="shop-category-box border-0 wow fadeIn">
                    <a href="daily_horoscope.html" className="circle-1">
                      <img
                        src="../assets/images/veg-3/category/1.png"
                        className="img-fluid blur-up lazyload"
                        alt=""
                      />
                    </a>
                    <div className="category-name">
                      <h6>Aries</h6>
                      <h6 style={{ fontSize: "10px" }}>21/3-19/4</h6>
                    </div>
                  </div>
                  <div>
                    <div
                      className="shop-category-box border-0 wow fadeIn"
                      data-wow-delay="0.05s"
                    >
                      <a href="daily_horoscope.html" className="circle-2">
                        <img
                          src="../assets/images/veg-3/category/2.png"
                          className="img-fluid blur-up lazyload"
                          alt=""
                        />
                      </a>
                      <div className="category-name">
                        <h6>Taurus</h6>
                        <h6 style={{ fontSize: "10px" }}>20/4-20/5</h6>
                      </div>
                    </div>
                  </div>

                  <div style={{ alignSelf: "center" }}>
                    <div
                      className="shop-category-box border-0 wow fadeIn"
                      data-wow-delay="0.1s"
                    >
                      <a href="daily_horoscope.html" className="circle-3">
                        <img
                          src="../assets/images/veg-3/category/3.png"
                          className="img-fluid blur-up lazyload"
                          alt=""
                        />
                      </a>
                      <div className="category-name">
                        <h6>Gemini</h6>
                        <h6 style={{ fontSize: "10px" }}>21/5-20/6</h6>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      className="shop-category-box border-0 wow fadeIn"
                      data-wow-delay="0.15s"
                    >
                      <a href="daily_horoscope.html" className="circle-4">
                        <img
                          src="../assets/images/veg-3/category/4.png"
                          className="img-fluid blur-up lazyload"
                          alt=""
                        />
                      </a>
                      <div className="category-name">
                        <h6>Cancer</h6>
                        <h6 style={{ fontSize: "10px" }}>21/6-22/7</h6>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div
                      className="shop-category-box border-0 wow fadeIn"
                      data-wow-delay="0.2s"
                    >
                      <a href="daily_horoscope.html" className="circle-4">
                        <img
                          src="../assets/images/veg-3/category/5.png"
                          className="img-fluid blur-up lazyload"
                          alt=""
                        />
                      </a>
                      <div className="category-name">
                        <h6>Leo</h6>
                        <h6 style={{ fontSize: "10px" }}>23/7-22/8</h6>
                      </div>
                    </div>
                  </div>

                  <div
                    className="shop-category-box border-0 wow fadeIn"
                    data-wow-delay="0.25s"
                  >
                    <a href="daily_horoscope.html" className="circle-1">
                      <img
                        src="../assets/images/veg-3/category/6.png"
                        className="img-fluid blur-up lazyload"
                        alt=""
                      />
                    </a>
                    <div className="category-name">
                      <h6>Virgo</h6>
                      <h6 style={{ fontSize: "10px" }}>23/8-22/9</h6>
                    </div>
                  </div>
                  <div style={{ alignSelf: "center" }}>
                    <div
                      className="shop-category-box border-0 wow fadeIn"
                      data-wow-delay="0.3s"
                    >
                      <a href="daily_horoscope.html" className="circle-2">
                        <img
                          src="../assets/images/veg-3/category/7.png"
                          className="img-fluid blur-up lazyload"
                          alt=""
                        />
                      </a>
                      <div className="category-name">
                        <h6>Libra</h6>
                        <h6 style={{ fontSize: "10px" }}>23/9-22/10</h6>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div
                      className="shop-category-box border-0 wow fadeIn"
                      data-wow-delay="0.35s"
                    >
                      <a href="daily_horoscope.html" className="circle-3">
                        <img
                          src="../assets/images/veg-3/category/8.png"
                          className="img-fluid blur-up lazyload"
                          alt=""
                        />
                      </a>
                      <div className="category-name">
                        <h6>Scorpio</h6>
                        <h6 style={{ fontSize: "10px" }}>23/10-21/11</h6>
                      </div>
                    </div>
                  </div>

                  <div style={{ alignSelf: "center" }}>
                    <div
                      className="shop-category-box border-0 wow fadeIn"
                      data-wow-delay="0.4s"
                    >
                      <a href="daily_horoscope.html" className="circle-4">
                        <img
                          src="../assets/images/veg-3/category/9.png"
                          className="img-fluid blur-up lazyload"
                          alt=""
                        />
                      </a>
                      <div className="category-name">
                        <h6>Sagittarius</h6>
                        <h6 style={{ fontSize: "10px" }}>22/11-21/12</h6>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div
                      className="shop-category-box border-0 wow fadeIn"
                      data-wow-delay="0.45s"
                    >
                      <a href="daily_horoscope.html" className="circle-4">
                        <img
                          src="../assets/images/veg-3/category/10.png"
                          className="img-fluid blur-up lazyload"
                          alt=""
                        />
                      </a>
                      <div className="category-name">
                        <h6>Capricorn</h6>
                        <h6 style={{ fontSize: "10px" }}>22/12-19/1</h6>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div
                      className="shop-category-box border-0 wow fadeIn"
                      data-wow-delay="0.5s"
                    >
                      <a href="daily_horoscope.html" className="circle-4">
                        <img
                          src="../assets/images/veg-3/category/11.png"
                          className="img-fluid blur-up lazyload"
                          alt=""
                        />
                      </a>
                      <div className="category-name">
                        <h6>Aquarius</h6>
                        <h6 style={{ fontSize: "10px" }}>20/1-18/2</h6>
                      </div>
                    </div>
                  </div>
                  <div style={{ alignSelf: "center" }}>
                    <div
                      className="shop-category-box border-0 wow fadeIn"
                      data-wow-delay="0.55s"
                    >
                      <a href="daily_horoscope.html" className="circle-4">
                        <img
                          src="../assets/images/veg-3/category/12.png"
                          className="img-fluid blur-up lazyload"
                          alt=""
                        />
                      </a>
                      <div className="category-name">
                        <h6>Pisces </h6>
                        <h6 style={{ fontSize: "10px" }}>19/2-20/3</h6>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Horoscopes;
