import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const New = () => {
  useEffect(() => {
    getNews();
  }, []);
  const [news, setNews] = useState([]);

  const getNews = () => {
    axios
      .get(`http://103.104.74.215:3012/api/user/news_list`)
      .then((res) => setNews(res.data.data));
  };
  
  return (
    <>
      {/* <!-- Product Section Start --> */}

      <section className="product-section">
        <div className="container-fluid-lg">
          <div className="row g-sm-4 g-3">
            <div className="col-xxl-12 col-xl-12">
              <div className="title">
                <h2>Nakshatra Talk IN NEWS</h2>
                <span className="title-leaf">
                  <svg className="icon-width">
                    <Link to="https://themes.pixelstrap.com/fastkart/assets/svg/leaf.svg#leaf"></Link>
                  </svg>
                </span>
                {/* <!-- <p>Top Categories Of The Week</p> --> */}
              </div>

              <div
                className="category-slider-2 product-wrapper no-arrow"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingBottom: 10,
                }}
              >
                {news?.map((i) => {
                  return (
                    <div style={{ width: "10%" }}>
                      <a href="#" className="category-box category-dark">
                        <div>
                          <img
                            src={
                              "http://103.104.74.215:3012/uploads/" + i.image
                            }
                          />
                          {/* <!-- <h5>Vegetables & Fruit</h5> --> */}
                        </div>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Product Section End --> */}
    </>
  );
};

export default New;
