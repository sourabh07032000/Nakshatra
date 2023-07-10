import React from "react";
import { useNavigate } from "react-router-dom";

function Blog() {
  const navigate = useNavigate();
  return (
    <div>
      {/* <div class="fullpage-loader">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
</div> */}

      <section class="blog-section section-b-space">
        <div class="container-fluid-lg">
          <div class="row">
            <div class="col-xxl-12 col-xl-12 col-lg-12 order-lg-3">
              <div class="row g-4 ratio_65">
                <div class="col-lg-4 col-sm-6"> 
                  <div class="blog-box wow fadeInUp">
                    <div class="blog-image">
                      <a href="BlogDetail">
                        <img
                        style={{width:"100%",objectFit:"contain"}}
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
                      <a  href="BlogDetail">
                        <h3>Shri Ram Stuti by Shiv Ji</h3>
                      </a>
                      <button 
                        onClick={()=>navigate("/BlogDetail")}
                        class="blog-button"
                      >
                        Read More
                        <i class="fa-solid fa-right-long"></i>
                      </button>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-sm-6">
                  <div class="blog-box wow fadeInUp" data-wow-delay="0.05s">
                    <div class="blog-image">
                      <a href="EclipsesBlogDetail">
                        <img            style={{width:"100%",objectFit:"contain"}}
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
                      <button
                
                     onClick={()=>navigate("/EclipsesBlogDetail")}
                        class="blog-button"
                      >
                        Read More
                        <i class="fa-solid fa-right-long"></i>
                      </button>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-sm-6">
                  <div class="blog-box wow fadeInUp" data-wow-delay="0.1s">
                    <div class="blog-image">
                      <a href="VedicBlog">
                        <img            style={{width:"100%",objectFit:"contain"}}
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
                      <button
                       onClick={()=>navigate("/vedicBlog")}
                        class="blog-button"
                      >
                        Read More
                        <i class="fa-solid fa-right-long"></i>
                      </button>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-sm-6">
                  <div class="blog-box wow fadeInUp" data-wow-delay="0.15s">
                    <div class="blog-image">
                      <a href="NavagrahasBlog">
                        <img            style={{width:"100%",objectFit:"contain"}}
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
                      <button
                        onClick={()=>navigate("/navagrahasBlog")}
                        class="blog-button"
                      >
                        Read More
                        <i class="fa-solid fa-right-long"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
