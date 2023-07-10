import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LatestBlog = () => {

  const navigate = useNavigate
  const uid = Math.random().toString(36).slice(-4);

  const [loader, setLoader] = useState(false);

  return (
    <>
      {loader === true && (
        <div class="fullpage-loader">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}
      {/* <!-- Blog Section Start --> */}
      <section class="blog-section section-b-space">
        <div class="container-fluid-lg">
          <div className="title">
            <h2>LATEST FROM BLOG </h2>

            <h4>Top Astrologers. 24 * 7 customer support. Happy to help</h4>
          </div>
          <div class="row">
            <div class="col-xxl-12 col-xl-12 col-lg-12 order-lg-3">
              <div class="row g-4 ratio_65">
                <div class="col-lg-4 col-sm-6">
                  <div class="blog-box wow fadeInUp">
                    <div class="blog-image">
                      <a onClick={()=>{
                      setLoader(true);                     
                    }} 
                      href="BlogDetail">
                        <img
                          style={{ width: "100%", objectFit: "contain" }}
                          src="../assets/images/inner-page/blog/1.jpg"
                          class="bg-img blur-up lazyload"
                          alt=""
                        />
                      </a>
                    </div>

                    <div class="blog-contain">
                      <div class="blog-label">
                        <span class="time">
                          <i data-feather="clock"></i> <span>28 Feg, 2023</span>
                        </span>
                        <span class="super">
                          <i data-feather="user"></i>{" "}
                          <span>JyotiRaj Singh</span>
                        </span>
                      </div>
                      <a href="BlogDetail">
                        <h3>Shri Ram Stuti by Shiv Ji</h3>
                      </a>
                      <a  href="BlogDetail">
                      <button
                     onClick={()=>{
                      setLoader(true);                     
                    }} 
                        class="blog-button"
                      >
                        Read More
                        <i class="fa-solid fa-right-long"></i>
                      </button>
                      </a>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-sm-6">
                  <div class="blog-box wow fadeInUp" data-wow-delay="0.05s">
                    <div class="blog-image">
                      <a 
                      onClick={()=>{
                        setLoader(true);                     
                      }} 
                      href="EclipsesBlogDetail">
                        <img
                          style={{ width: "100%", objectFit: "contain" }}
                          src="../assets/images/inner-page/blog/2.jpg"
                          class="bg-img"
                          alt=""
                        />
                      </a>
                    </div>

                    <div class="blog-contain">
                      <div class="blog-label">
                        <span class="time">
                          <i data-feather="clock"></i> <span>20 Feg, 2023</span>
                        </span>
                        <span class="super">
                          <i data-feather="user"></i>{" "}
                          <span>JyotiRaj Singh</span>
                        </span>
                      </div>
                      <a href="EclipsesBlogDetail">
                        <h3>Eclipses- change is constant.</h3>
                      </a>
                      <a href="EclipsesBlogDetail">
                      <button  class="blog-button" onClick={()=>setLoader(true)}>
                        Read More
                        <i class="fa-solid fa-right-long"></i>
                      </button>
                      </a>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-sm-6">
                  <div class="blog-box wow fadeInUp" data-wow-delay="0.1s">
                    <div class="blog-image">
                      <a
                      onClick={()=>{
                        setLoader(true);                     
                      }} 
                      href="VedicBlog">
                        <img
                          style={{ width: "100%", objectFit: "contain" }}
                          src="../assets/images/inner-page/blog/3.jpg"
                          class="bg-img blur-up lazyload"
                          alt=""
                        />
                      </a>
                    </div>

                    <div class="blog-contain">
                      <div class="blog-label">
                        <span class="time">
                          <i data-feather="clock"></i> <span>15 Feg, 2023</span>
                        </span>
                        <span class="super">
                          <i data-feather="user"></i>{" "}
                          <span>JyotiRaj Singh</span>
                        </span>
                      </div>
                      <a href="VedicBlog">
                        <h3>Vedic Astrology.</h3>
                      </a>
                      <a href="VedicBlog">
                      <button 
                       onClick={()=>{
                        setLoader(true);                     
                      }}
                      class="blog-button">
                        Read More
                        <i class="fa-solid fa-right-long"></i>
                      </button>
                      </a>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-sm-6">
                  <div class="blog-box wow fadeInUp" data-wow-delay="0.15s">
                    <div class="blog-image">
                      <a
                      onClick={()=>{
                        setLoader(true);                     
                      }} 
                      href="NavagrahasBlog">
                        <img
                          style={{ width: "100%", objectFit: "contain" }}
                          src="../assets/images/inner-page/blog/4.jpg"
                          class="bg-img blur-up lazyload"
                          alt=""
                        />
                      </a>
                    </div>

                    <div class="blog-contain">
                      <div class="blog-label">
                        <span class="time">
                          <i data-feather="clock"></i> <span>26 Feg, 2023</span>
                        </span>
                        <span class="super">
                          <i data-feather="user"></i>{" "}
                          <span>JyotiRaj Singh</span>
                        </span>
                      </div>
                      <a href="NavagrahasBlog">
                        <h3>Navagrahas: The planets in Astrology</h3>
                      </a>

                      <a href="NavagrahasBlog">
                      <button onClick={()=>{
                        setLoader(true);                     
                      }}   class="blog-button">
                        Read More
                        <i class="fa-solid fa-right-long"></i>
                      </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Blog Section End --> */}
    </>
  );
};

export default LatestBlog;
