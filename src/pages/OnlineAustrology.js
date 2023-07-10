import React, { useState, useEffect } from "react";
import { baseUrl } from "./baseUrl";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const OnlineAustrology = () => {
  useEffect(() => {
    getData(0);
    postData();
  }, []);

  const navigate = useNavigate();

  const [list, setList] = useState([]);
  let [_id, set_id] = useState(() => {
    let result = localStorage.getItem("_id");
    if (result != null) {
      return JSON.parse(result);
    } else {
      return [];
    }
  });

  const [liveAstrologer, setLiveAstrologer] = useState([]);
  const getData = () => {
    axios
      .get("http://103.104.74.215:3012/api/user/astrologer_live_list")
      .then((res) => setLiveAstrologer(res.data.data));
  };

  const postData = () => {
    const item = {
      user_id: _id,
    };
    axios
      .post("http://103.104.74.215:3012/api/user/astrologer_list/", item)
      .then((res) => {
        setList(res.data.data);
      });
  };
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
      {/* <!-- Order Detail Section Start --> */}
      <section class="order-detail">
        <div class="container-fluid-lg">
          <div class="row g-sm-4 g-3">
            {/* <!-- Live session start --> */}

            <div class="col-xxl-6 col-xl-6 col-lg-6">
              <div class="title title-flex">
                <div>
                  <h2>Online Astrologers </h2>
                  <h4>4 Astrologers are Online</h4>
                </div>
                <div class="timing-box">
                  <a href="AstrologersList">
                    <img
                      src="../assets/images/veg-3/category/live_right_arrow.png"
                      class="img-fluid"
                      alt=""
                      style={{
                        height: "40px",
                        width: "40px",
                        marginRight: "20px",
                      }}
                    />
                  </a>
                </div>
              </div>
              <div class="row g-sm-4 g-3">
                {" "}
                {list?.slice(0, 4).map((i) => {
                  return (
                    <div
                      class="col-xl-6 col-sm-6"
                      style={{ display: "flex", flexDirection: "row" }}
                    >
                      <div class="seller-grid-box seller-grid-box-1">
                        <div class="grid-image">
                          <div class="image">
                            <img
                              src={
                                "http://103.104.74.215:3012/uploads/" +
                                i?.profile_pic
                              }
                              class="img-fluid"
                              alt=""
                              style={{
                                height: "60px ",
                                width: "60px",
                                borderRadius: "100%",
                              }}
                            />

                            <button
                              // onclick="location.href = 'product-4-image.html';"
                              class="nav-item"
                              style={{
                                borderRadius: "15px",
                                width: "60px",
                                height: "30px",
                                borderColor: "#f5b60a",
                                boxShadow: "5px",
                              }}
                            >
                              {i.rating ? i.rating : "0"}
                              <li>
                                <i
                                  style={{ width: "13px" }}
                                  class="fa fa-star-o"
                                  aria-hidden="true"
                                ></i>
                              </li>
                            </button>
                          </div>

                          <div class="contain-name">
                            <div>
                              <h4>{i.name}</h4>

                              <div class="since-number">
                                <h6>{i.language}</h6>
                              </div>

                              <div class="since-number">
                                <h6>{i.role}</h6>
                              </div>
                            </div>
                            {/* <!--   <label class="product-label">380 Products</label> --> */}
                          </div>
                        </div>

                        <br />

                        <div
                          class="grid-contain"
                          style={{ width: "100%", paddingBottom: "20px" }}
                        >
                          <div
                            class="seller-contact-details"
                            style={{ width: "60%", float: "left" }}
                          >
                            {i.experiance_year > "0" ? (
                              <div class="saller-contact">
                                <div class="seller-icon">
                                  <i class="fa-solid fa-map-pin"></i>
                                </div>

                                <div class="contact-detail">
                                  <h5>{i.experiance_year}Years</h5>
                                </div>
                              </div>
                            ) : null}

                            <div class="saller-contact">
                              <div class="seller-icon">
                                <i class="fa-solid fa-phone"></i>
                              </div>

                              <div class="contact-detail">
                                <h5>
                                  {" "}
                                  ₹ {i.charging_price ? i.charging_price : "0"}
                                  /Min
                                </h5>
                              </div>
                            </div>
                          </div>

                          <div
                            class="seller-contact-details"
                            style={{ width: "40%", float: "right" }}
                          >
                            <div class="saller-contact">
                              <a href="videoCall">
                                {i.call_status === "1" ? (
                                  <img
                                    onClick={() => {
                                      setLoader(true);

                                      localStorage.setItem(
                                        "vcdata",
                                        JSON.stringify(i)
                                      );
                                      navigate("/videoCall");
                                    }}
                                    src="../assets/images/veg-3/category/phone.png"
                                    class="img-fluid"
                                    alt=""
                                    style={{ height: "25px" }}
                                  />
                                ) : (
                                  <img
                                    src="../assets/images/veg-3/category/calling.png"
                                    class="img-fluid"
                                    alt=""
                                    style={{ height: "25px" }}
                                  />
                                )}
                              </a>

                              <a href="">
                                <img
                                  onClick={() => {
                                    setLoader(true);

                                    localStorage.setItem(
                                      "chatdata",
                                      JSON.stringify(i)
                                    );
                                    navigate("/ChatForm");
                                  }}
                                  src="../assets/images/veg-3/category/chat.png"
                                  class="img-fluid"
                                  alt=""
                                  style={{ height: "25px", marginLeft: "10px" }}
                                />
                              </a>
                            </div>

                            <div class="saller-contact">
                              <div class="contact-detail">
                                {i.call_status === "1" ? (
                                  <h6> Call</h6>
                                ) : (
                                  <h6> Off</h6>
                                )}
                              </div>

                              <div
                                class="contact-detail"
                                style={{ marginLeft: "10px" }}
                              >
                                <h6> Chat</h6>
                              </div>
                            </div>
                          </div>
                        </div>

                        <br />
                        <br />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* <!--   Live session end --> */}

            <div class="col-xxl-6 col-xl-6 col-lg-6">
              <div class="title title-flex">
                <div>
                  <h2>Live Sessions</h2>
                  <h4>4 Astrologers are live now</h4>
                </div>

                <div class="timing-box">
                  <a href="Astrolive">
                    <img
                      src="../assets/images/veg-3/category/live_right_arrow.png"
                      class="img-fluid"
                      alt=""
                      style={{ height: "40px", width: "40px" }}
                    />
                  </a>
                </div>
              </div>
              {liveAstrologer?.slice(0, 4).map((i) => (
                <div class="row g-sm-4 g-3">
                  <div class="col-xl-6 col-sm-6" style={{}}>
                    <div
                      class="product-box-4"
                      style={{
                        background: "linear-gradient(45deg, #8b6704, #493939)",
                      }}
                    >
                      <div class="grid-image">
                        <div class="image">
                          <img
                            src={
                              "http://103.104.74.215:3012/uploads/" +
                              i.astrologer_data.profile_pic
                            }
                            class="img-fluid"
                            alt=""
                            style={{
                              height: "55px",
                              width: "55px",
                              borderRadius: "100%",
                            }}
                          />
                        </div>

                        <div class="contain-name">
                          <div>
                            <h4 style={{ color: "white" }}>
                              {i.astrologer_data.name}{" "}
                            </h4>

                            <div class="since-number">
                              <h6 style={{ color: "white" }}>
                                Spiritual Guidance
                              </h6>
                            </div>
                            <br />
                            <button
                              onClick={() => {
                                setLoader(true);

                                localStorage.setItem(
                                  "liveData",
                                  JSON.stringify(i)
                                );
                                navigate("/Streaming");
                              }}
                              class="nav-item"
                              style={{
                                borderRadius: "15px",
                                width: "60px",
                                height: "30px",
                                boxShadow: "1px",
                                marginTop: "-30px",
                              }}
                            >
                              Live
                              <li>
                                <i
                                  class="fa-solid fa-circle"
                                  style={{ width: "10px", color: "green" }}
                                ></i>
                              </li>
                            </button>
                          </div>
                        </div>
                      </div>

                      <br />

                      <div class="grid-contain" style={{ width: "100%" }}>
                        <div class="seller-contact-details">
                          <div class="saller-contact" style={{}}>
                            <a href="product-4-image.html">
                              <img
                                src="../assets/images/veg-3/category/calling.png"
                                class="img-fluid"
                                alt=""
                                style={{ height: "25px" }}
                              />
                            </a>

                            <a href="product-4-image.html">
                              <img
                                src="../assets/images/veg-3/category/chat.png"
                                class="img-fluid"
                                alt=""
                                style={{ height: "25px", marginLeft: "10px" }}
                              />
                            </a>

                            <a href="product-4-image.html">
                              <img
                                src="../assets/images/veg-3/category/chat.png"
                                class="img-fluid"
                                alt=""
                                style={{ height: " 25px", marginLeft: "10px" }}
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <br />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OnlineAustrology;
