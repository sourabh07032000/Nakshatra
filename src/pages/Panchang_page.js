import React from "react";
import Header1 from "./Header1";
import Footer from "./Footer";
import Setting from "./Setting";

const Panchang_page = () => {
  return (
    <>
      <Header1 />
      {/* <!-- Blog Section Start --> */}
      <section class="blog-section">
        <div class="container-fluid-lg">
          <div class="title">
            <h2>Panchang</h2>

            <p>
              A Panchang (Sanskrit: पञ्चाङ्गम्) is a Hindu calendar and almanac,
              which is used in Astrology. It follows traditional units of Hindu
              timekeeping, and presents important dates and their calculations
              in a tabulated form.{" "}
            </p>
            <p>
              The study of Panchang involves understanding Rasi phala, the
              impact of the signs of the zodiac on the individual. Astrologers
              consult the Panchang to understand present with movement of
              planets & its effect on individual, set auspicious date for
              occasions like engagement, weddings and other activities.
            </p>
          </div>

          <div
            class="slider-3 arrow-slider"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <div>
              <div class="blog-box ratio_50">
                <div class="blog-box-image">
                  <a href="blog-detail.html">
                    <img
                      src="../assets/images/blog/todaypan.jpg"
                      class="img-fluid bg-img"
                      alt=""
                    />
                  </a>
                </div>

                <div
                  class="blog-contain"
                  style={{
                    overflowY: "scroll",
                    position: "relative",
                    height: "350px",
                  }}
                >
                  <div>
                    <a href="blog-detail.html">
                      <h3>Panchang</h3>
                      <h4>Delhi- Wednesday, 05 April 2023</h4>
                    </a>
                  </div>
                  <div style={{ position: "absolute" }}>
                    <a href="blog-detail.html">
                      <ul>
                        <table class="home_table">
                          <tbody>
                            <tr>
                              <td scope="row">Date</td>
                              <td>Wednesday, 05 April 2023</td>
                              <hr />
                            </tr>
                            <tr>
                              <td scope="row">Tithi</td>
                              <td>Purnima</td>
                            </tr>
                            <tr>
                              <td scope="row">Day</td>
                              <td>Wednesday</td>
                            </tr>
                            <tr>
                              <td scope="row">Paksha</td>
                              <td> Shukla-Paksha</td>
                            </tr>
                            <tr>
                              <td scope="row">Sunrise</td>
                              <td id="sunRise"> 6:7:37</td>
                            </tr>
                            <tr>
                              <td scope="row">Sunset</td>
                              <td id="sunSet">18:41:36</td>
                            </tr>
                            <tr>
                              <td scope="row">Moonrise</td>
                              <td id="moonRise"> 18:1:34</td>
                            </tr>
                            <tr>
                              <td scope="row">Nakshatra</td>
                              <td> Hast</td>
                            </tr>
                            <tr>
                              <td scope="row">Nakshtra Till</td>
                              <td id="nakshtra">36 : 42 : 1</td>
                            </tr>
                            <tr>
                              <td scope="row">Yog</td>
                              <td>Dhruv</td>
                            </tr>
                            <tr>
                              <td scope="row">Yog Till</td>
                              <td id="yog">27 : 16 : 51</td>
                            </tr>
                            <tr>
                              <td scope="row">Karan I</td>
                              <td>Vishti</td>
                            </tr>
                            <tr>
                              <td scope="row">Surya Rashi</td>
                              <td>Pisces</td>
                            </tr>
                            <tr>
                              <td scope="row">Chandra Rashi</td>
                              <td>Virgo</td>
                            </tr>
                            <tr>
                              <td scope="row">Rahu Kal</td>
                              <td id="rahuKal"> 12:24:37 to 13:58:51</td>
                            </tr>
                          </tbody>
                        </table>
                      </ul>
                    </a>
                  </div>
                  {/* <!-- <button onclick="location.href = 'blog-detail.html';" class="blog-button">Read More
                                        <i class="fa-solid fa-right-long"></i></button> --> */}
                </div>
              </div>
            </div>

            <div>
              <div class="blog-box ratio_50">
                <div class="blog-box-image">
                  <a href="blog-detail.html">
                    <img
                      src="../assets/images/blog/panchang.jpg"
                      class="img-fluid bg-img"
                      alt=""
                    />
                  </a>
                </div>

                <div
                  class="blog-contain"
                  style={{
                    overflowY: "scroll",
                    position: "relative",
                    height: "350px",
                  }}
                >
                  <div>
                    <a href="blog-detail.html">
                      <h3>Explore More</h3>
                    </a>
                  </div>
                  <div style={{ position: "absolute" }}>
                    <a href="blog-detail.html">
                      <ul>
                        <li>
                          <a href="#">Today's Tithi</a>{" "}
                        </li>
                        <hr />
                        <li>
                          <a href="#">Today's vaar</a>{" "}
                        </li>
                        <hr />
                        <li>
                          <a href="#">Today's Shubh Muhurat</a>{" "}
                        </li>
                        <hr />
                        <li>
                          <a href="#">Today's Nakshatra</a>{" "}
                        </li>
                        <hr />
                        <li>
                          <a href="#">Today's Choghdiya</a>{" "}
                        </li>
                        <hr />
                        <li>
                          <a href="#">Today's Rahu Kaal</a>{" "}
                        </li>
                        <hr />
                        <li>
                          <a href="#">Today's Shubh Hora</a>{" "}
                        </li>
                        <hr />
                        <li>
                          <a href="#">Today's Yoga</a>{" "}
                        </li>
                        <hr />
                        <li>
                          <a href="#">Today's Karana</a>{" "}
                        </li>
                        <hr />
                      </ul>
                    </a>
                  </div>
                  {/* <!-- <button onclick="location.href = 'blog-detail.html';" class="blog-button">Read More
                                        <i class="fa-solid fa-right-long"></i></button> --> */}
                </div>
              </div>
            </div>

            <div>
              <div class="blog-box ratio_50">
                <div class="blog-box-image">
                  <a href="blog-detail.html">
                    <img
                      src="../assets/images/blog/festival.jpg"
                      class="img-fluid bg-img"
                      alt=""
                    />
                  </a>
                </div>
                <div
                  class="blog-contain"
                  style={{
                    overflowY: "scroll",
                    position: "relative",
                    height: "350px",
                  }}
                >
                  <div>
                    <a href="blog-detail.html">
                      <h3>Feast and Festival 2023</h3>
                    </a>
                  </div>
                  <div style={{ position: "absolute" }}>
                    <a href="blog-detail.html">
                      <ul>
                        <li>
                          <a href="#">Holi 2023</a>{" "}
                        </li>
                        <hr />
                        <li>
                          <a href="#">Bhai Dooj 2023</a>{" "}
                        </li>
                        <hr />
                        <li>
                          <a href="#">Chaitra Navratri 2023</a>{" "}
                        </li>
                        <hr />
                        <li>
                          <a href="#">Gudi Padwa 2023</a>{" "}
                        </li>
                        <hr />
                        <li>
                          <a href="#">Ugadi 2023</a>{" "}
                        </li>
                        <hr />
                        <li>
                          <a href="#">Rama Navami 2023</a>{" "}
                        </li>
                        <hr />
                        <li>
                          <a href="#">Hanuman Jyanti 2023</a>{" "}
                        </li>
                        <hr />
                        <li>
                          <a href="#">Baisakhi 2023</a>{" "}
                        </li>
                        <hr />
                        <li>
                          <a href="#">Diwali 2023</a>{" "}
                        </li>
                        <hr />
                      </ul>
                    </a>
                  </div>
                  {/* <!-- <button onclick="location.href = 'blog-detail.html';" class="blog-button">Read More
                                        <i class="fa-solid fa-right-long"></i></button> --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Blog Section End --> */}

      {/* <!-- Blog Section Start --> */}
      <section class="blog-section section-b-space">
        <div class="container-fluid-lg">
          <div class="row g-4">
            <h2>Panchang</h2>
            <p>
              Accuracy of attributes depending upon the Moon's motions were
              considered most crucial for the reliability of a Panchang, because
              the Moon is the fastest among all heavenly entities shown in
              traditional Panchang.{" "}
            </p>
            <p>
              Tithi, Nakshatra, Rasi, Yoga, and Karana depend upon Moon's
              motions, which are five in number. Panchang is a Sanskrit word it
              means " five limbs". If these five limbs which represents five
              attributes depending upon Moon, are accurate, an almanac is
              considered accurate, because it’s easy to calculate other elements
              due to their slow rates of change.
            </p>
            <div class="col-xxl-12 col-xl-12 col-lg-12 order-lg-2">
              <div class="row g-4 ratio_65">
                <div class="col-xxl-4 col-sm-3">
                  <div class="blog-box wow fadeInUp" data-wow-delay="0.05s">
                    <div class="blog-image">
                      <a href="blog-detail.html">
                        <img
                          src="../assets/images/inner-page/horoscope.jpg"
                          class="bg-img"
                          alt=""
                        />
                      </a>
                    </div>

                    <div class="blog-contain">
                      <div>
                        <a href="blog-detail.html">
                          <h3>Talk To India's Best Astrologers</h3>
                        </a>
                      </div>

                      <a href="blog-detail.html">
                        <p>
                          Consult the best Vedic Astrologers, Tarot Readers,
                          Numerologists and Vaastu experts online......
                        </p>
                      </a>
                      <button
                        onclick="location.href = 'blog-detail.html';"
                        class="blog-button"
                      >
                        Read More
                        <i class="fa-solid fa-right-long"></i>
                      </button>
                    </div>
                  </div>
                </div>

                <div class="col-xxl-4 col-sm-3">
                  <div class="blog-box wow fadeInUp" data-wow-delay="0.05s">
                    <div class="blog-image">
                      <a href="blog-detail.html">
                        <img
                          src="../assets/images/inner-page/horoscope.jpg"
                          class="bg-img"
                          alt=""
                        />
                      </a>
                    </div>

                    <div class="blog-contain">
                      <div>
                        <a href="todays-horoscope.html">
                          <h3>Today's Horoscope</h3>
                        </a>
                      </div>

                      <a href="todays-horoscope.html">
                        <p>
                          A horoscope is an astrology chart that is well
                          prepared in order to examine the future....
                        </p>
                      </a>
                      <button
                        onclick="location.href = 'todays-horoscope.html';"
                        class="blog-button"
                      >
                        Read More
                        <i class="fa-solid fa-right-long"></i>
                      </button>
                    </div>
                  </div>
                </div>

                <div class="col-xxl-4 col-sm-3">
                  <div class="blog-box wow fadeInUp" data-wow-delay="0.05s">
                    <div class="blog-image">
                      <a href="blog-detail.html">
                        <img
                          src="../assets/images/blog/festival.jpg"
                          class="bg-img"
                          alt=""
                        />
                      </a>
                    </div>

                    <div class="blog-contain">
                      <div>
                        <a href="blog-detail.html">
                          <h3>Festival</h3>
                        </a>
                      </div>

                      <a href="blog-detail.html">
                        <p>
                          Festivals are an important part of our lives; they
                          represent the beauty of our culture.....
                        </p>
                      </a>
                      <button
                        onclick="location.href = 'blog-detail.html';"
                        class="blog-button"
                      >
                        Read More
                        <i class="fa-solid fa-right-long"></i>
                      </button>
                    </div>
                  </div>
                </div>

                <div class="col-xxl-4 col-sm-3">
                  <div class="blog-box wow fadeInUp" data-wow-delay="0.15s">
                    <div class="blog-image">
                      <a href="blog-detail.html">
                        <img
                          src="../assets/images/inner-page/horoscope.jpg"
                          class="bg-img blur-up lazyload"
                          alt=""
                        />
                      </a>
                    </div>

                    <div class="blog-contain">
                      <div>
                        <a href="zodiac_signs.html">
                          <h3>Zodiac Signs</h3>
                        </a>
                      </div>

                      <a href="zodiac_signs.html">
                        <p>
                          Astrology, focuses on a person’s astrological or
                          zodiac sign, to a large extent. There are 12
                          Zodiac....
                        </p>
                      </a>
                      <button
                        onclick="location.href = 'zodiac_signs.html';"
                        class="blog-button"
                      >
                        Read More
                        <i class="fa-solid fa-right-long"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!--  <nav class="custome-pagination">
                        <ul class="pagination justify-content-center">
                            <li class="page-item disabled">
                                <a class="page-link" href="javascript:void(0)" tabindex="-1">
                                    <i class="fa-solid fa-angles-left"></i>
                                </a>
                            </li>
                            <li class="page-item active">
                                <a class="page-link" href="javascript:void(0)">1</a>
                            </li>
                            <li class="page-item" aria-current="page">
                                <a class="page-link" href="javascript:void(0)">2</a>
                            </li>
                            <li class="page-item">
                                <a class="page-link" href="javascript:void(0)">3</a>
                            </li>
                            <li class="page-item">
                                <a class="page-link" href="javascript:void(0)">
                                    <i class="fa-solid fa-angles-right"></i>
                                </a>
                            </li>
                        </ul>
                    </nav> --> */}
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Blog Section End --> */}

      {/* <!-- Category Section Start --> */}
      <section class="category-section-3">
        <div class="container-fluid-lg">
          <div class="title">
            <h2>Sombreness of Panchang</h2>
            <p>
              Panchang consists of two words namely, 'Panch' and 'Ang', Panch
              means 'Five' and Ang means 'Limbs'. Panchang is created by taking
              into account five aspects of the tradition Hindu timekeeping limbs
              or ‘ang’: day of the week (vaar); tithi or lunar day;
              constellation or nakshatra; yoga; and karan. The study of Panchang
              is the fundamental understanding of Rashi Phala, the impact of
              each of the 12 zodiac signs on an individual and how their day to
              day lives change based on several movements of the planets. The
              casting of a Panchang requires elaborate mathematical work
              involving high level of spherical geometry and in depth
              understanding of astronomical phenomena. However, in practice the
              tabulation is done on the basis of short-cut formulations as
              propounded by ancient Vedic sages and scholars.
            </p>
            <p>
              Panchang is created for the fundamental use of providing
              information on how a day might look like, how people should
              optimize the ‘subh’ or positive span of time in order to lead a
              happy and prosperous life and what should they refrain from doing
              at negative hours of the day to avoid problems. Panchangs are
              optimally utilizing in the Hindu culture for planning important
              events and functions in a person’s life. Panchang matches the
              current planetary configurations with the position of the heavenly
              bodies in a person’s astrological chart, so that the auspicious
              days can be pin-pointed in their best interests.
            </p>
          </div>
          <div class="row"></div>
        </div>
      </section>
      {/* <!-- Category Section End --> */}

      <Footer />
      <Setting />
    </>
  );
};

export default Panchang_page;
