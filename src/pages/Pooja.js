import React, { useEffect, useState } from "react";
import axios from "axios";
import Header1 from "./InHeader";
import Footer from "./Footer";

const Pooja = () => {
  useEffect(() => {
    getData();
  }, []);

  const [getPooja, setGetPooja] = useState([]);

  const getData = () => {
    axios.get("http://103.104.74.215:3012/api/user/puja_list").then((res) => {
      // console.log(res.data.data)
      setGetPooja(res.data.data);
    });
  };
  const [loader, setLoader] = useState(false);
  return (
    <>
      <Header1 />
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

      {/* <!-- Breadcrumb Section Start --> */}
      <section class="breadscrumb-section pt-0">
        <div class="container-fluid-lg">
          <div class="row">
            <div class="col-12">
              <div class="breadscrumb-contain">
                <h2>Puja</h2>
                <nav>
                  <ol class="breadcrumb mb-0">
                    <li class="breadcrumb-item">
                      <a href="index-2.html">
                        <i class="fa-solid fa-house"></i>
                      </a>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      Puja
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Breadcrumb Section End --> */}

      <section class="blog-section section-b-space">
        <div class="container-fluid-lg">
          <div class="row">
            <div class="col-xxl-12 col-xl-12 col-lg-12 order-lg-3">
              <div class="row g-4 ratio_65">
                {getPooja.map((i) => {
                  return (
                    <div class="col-lg-4 col-sm-6">
                      <div class="blog-box wow fadeInUp">
                        <a
                          href="PujaListDetail"

                          onClick={() =>{
                            setLoader(true)
                            localStorage.setItem("pujaDet", JSON.stringify(i))
                           } }
                        >
                          <img
                            src={
                              "http://103.104.74.215:3012/uploads/" + i.file[0]
                            }
                            class="img-fluid bg-img"
                            alt=""
                          />
                        </a>
                      </div>

                      <div class="blog-contain">
                        <div class="blog-label">
                          <span class="super">
                            <span>
                              <h2>{i.title}</h2>
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Pooja;
