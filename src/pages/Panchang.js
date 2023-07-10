import React from "react";

const Panchang = () => {
  return (
    <>
      <section class="blog-section section-b-space">
        <div class="container-fluid-lg">
          <div class="row g-4">
            <div class="col-xxl-12 col-xl-12 col-lg-12 order-lg-2">
              <div class="row g-4 ratio_65">
                <div class="slider-3 arrow-slider"  style={{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly"}}>
                  <div   style={{width:"30%",}}>
                    <div class="blog-box ratio_50">
                      <div class="blog-box-image" style={{ height: "150px" }}>
                        <a href="blog-detail.html">
                          <img
                            src="../assets/images/blog/pp.jpg"
                            class="img-fluid bg-img"
                            alt=""
                          />
                        </a>
                      </div>

                      <div
                        class="blog-contain"
                        style={{
                          overflowY: " scroll",
                          position: "relative",
                          height: "350px",
                        }}
                      >
                        <div>
                          <a href="blog-detail.html">
                            <h3>PANCHANG</h3>
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

                  <div style={{width:"30%"}}>
                    <div class="blog-box ratio_50">
                      <div class="blog-box-image" style={{ height: "150px" }}>
                        <a href="blog-detail.html">
                          <img
                            src="../assets/images/blog/SP.jpg"
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
                            <h3>SPIRITUALITY</h3>
                          </a>
                        </div>
                        <div style={{ position: "absolute" }}>
                          <a href="blog-detail.html">
                            <ul>
                              <li>
                                <a href="#">Yoga</a>{" "}
                              </li>
                              <hr />
                              <li>
                                <a href="#">Meditation</a>{" "}
                              </li>
                              <hr />
                              <li>
                                <a href="#">Gems Stone</a>{" "}
                              </li>
                              <hr />
                              <li>
                                <a href="#">Rudraskha</a>{" "}
                              </li>
                              <hr />
                              <li>
                                <a href="#">Yantra</a>{" "}
                              </li>
                              <hr />
                              <li>
                                <a href="#">Mantras & Chants</a>{" "}
                              </li>
                              <hr />
                              <li>
                                <a href="#">Pooja Performance</a>{" "}
                              </li>
                              <hr />
                              <li>
                                <a href="#">Spiritual Retreats</a>{" "}
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

                  <div style={{width:"30%"}}>
                    <div class="blog-box ratio_50">
                      <div class="blog-box-image" style={{ height: "150px" }}>
                        <a href="blog-detail.html">
                          <img
                            src="../assets/images/blog/fe.jpg"
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
                            <h3>FESTIVAL</h3>
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Panchang;
