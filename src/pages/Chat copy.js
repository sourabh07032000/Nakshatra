import React, { useEffect, useState } from "react";
import firebase from "./Firebase";
import "./chat.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ReverseTimer from "./ReverseTimer";

const Chat = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [remainingTime, setRemainingTime] = useState(0);
  const [walletAmnt, setWalletAmnt] = useState([]);
  const [userData, setUserData] = useState([]);

  let [_id, set_id] = useState(() => {
    let result = localStorage.getItem("_id");
    if (result != null) {
      return JSON.parse(result);
    } else {
      return [];
    }
  });

  const chatt = localStorage.getItem("chatdata");
  const parse = JSON.parse(chatt);
  const [cData, setCData] = useState(parse);

  const walletBalance = 100; // Wallet balance in Rs
  const perMinuteRate = 10; // Price of chatting per minute in Rs

  useEffect(() => {
    const chatRef = firebase.database().ref("add");
    chatRef.on("value", (snapshot) => {
      const chatData = snapshot.val();
      if (chatData) {
        const chatMessages = Object.values(chatData);
        setMessages(chatMessages);
      }
    });
  }, []);

  const sendMessage = () => {
    if (currentMessage.trim() !== "") {
      const chatRef = firebase.database().ref("add");
      const newMessageRef = chatRef.push();
      newMessageRef.set({
        title: currentMessage,
        sender_id: _id, // ID of the sender
        receiver_id: cData._id, // ID of the receiver
      });
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    postId();
  }, []);
  const postId = () => {
    const item = {
      _id: _id,
    };
    axios
      .post(`http://103.104.74.215:3012/api/user/get_user_profile/`, item)
      .then((res) => setUserData(res.data.data));
  };

  useEffect(() => {
    const chatRef = firebase.database().ref("add");
    chatRef.on("value", (snapshot) => {
      const chatData = snapshot.val();
      if (chatData) {
        const chatMessages = Object.values(chatData);
        // Filter messages based on receiver's ID

        let receiverMessages = chatMessages.filter((message) => {
          return message.receiver_id === cData._id && message.sender_id == _id;
        });
        console.log(receiverMessages);

        // const receiverMessages = chatMessages.filter(
        //   (message) =>  message.receiver_id === cData._id
        // );
        setMessages(receiverMessages);
      }
    });
  }, [cData]);

  // Calculate remaining chat duration in seconds
  const calculateRemainingTime = () => {
    const chatDuration = Math.ceil(
      (walletAmnt?.ammount / cData?.chat_rate) * 60
    ); // Chat duration in seconds (5   minutes)
    const chatStartTime = new Date(); // Replace this with the actual start time
    const currentTime = new Date();
    const elapsedTime = Math.floor((currentTime - chatStartTime) / 1000);
    const remainingTime = chatDuration - elapsedTime;
    setRemainingTime(remainingTime);
  };

  useEffect(() => {
    calculateRemainingTime();
    const timer = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const disconnectChat = () => {
    // Perform the necessary actions to disconnect the chat

    // Deduct the chat cost from the wallet balance
    const chatDuration = Math.ceil(
      (walletAmnt?.ammount / cData?.chat_rate) * 60
    ); // Chat duration in seconds (5 minutes)
    const chatCost =
      Math.ceil((chatDuration - remainingTime) / 60) * cData?.chat_rate;
    const updatedBalance = walletBalance - chatCost;
    // Update the wallet balance in your backend or wherever it's stored

    // Navigate to another page
    alert("hahaha");
    navigate("/");
  };

  const manualDisconnect = () => {
    disconnectChat();
  };

  useEffect(() => {
    postRech();
  }, []);

  const postRech = () => {
    const item = {
      user_id: _id,
    };

    axios
      .post("http://103.104.74.215:3012/api/user/get_wallet_user", item)
      .then((res) => {
        setWalletAmnt(res.data.data);
      });
  };

  return (
    <>
      {/* <div>
            <div>
              {messages.map((message, index) => (
                <div key={index}>{message.text}</div>
              ))}
            </div>
            <input
              type="text"
              value={currentMessage}
              onChange={(e) => setCurrentMessage(e.target.value)}
            />
            <button onClick={sendMessage}>Send</button>
          </div> */}

      {/* <div>
            <ReverseTimer minutes={5} seconds={60} style={{ fontSize: 10 }}/>/
          </div> */}
      {remainingTime > 0 && (
        <>
          <ReverseTimer
            minutes={Math.floor(remainingTime / 60)}
            seconds={remainingTime % 60}
            style={{ fontSize: 10 }}
            onTimerEnd={disconnectChat}
          />
          <button onClick={manualDisconnect}>Disconnect</button>
        </>
      )}

      <section style={{ backgroundColor: "#eee" }}>
        <div className="container py-5">
          <div className="row d-flex justify-content-center">
            <div className="col-md-8 col-lg-6 col-xl-4">
              <div className="card">
                <div
                  className="card-header d-flex justify-content-between align-items-center p-3"
                  style={{ borderTop: "4px solid #ffa900" }}
                >
                  <h5 className="mb-0">Chat messages</h5>

                  <div className="d-flex flex-row align-items-center">
                    <i
                      onClick={() => navigate("/")}
                      style={{
                        fontSize: 20,
                        fontWeight: "bolder",
                        cursor: "pointer",
                      }}
                      class="fa fa-times"
                      aria-hidden="true"
                    ></i>
                  </div>
                </div>
                <div
                  className="card-body"
                  data-mdb-perfect-scrollbar="true"
                  style={{
                    position: "relative",
                    height: "500px",
                    overflowY: "scroll",
                  }}
                >
                  {messages.map((message, index) => (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        padding: 5,
                      }}
                    >
                      <img
                        style={{
                          height: 25,
                          width: 25,
                          borderRadius: "100%",
                          padding: 2,
                        }}
                        src={
                          "http://103.104.74.215:3012/uploads/" +
                          userData?.user_pic
                        }
                        class="blur-up lazyload update_img"
                        alt=""
                      />
                      <div key={index}>{message.title}</div>
                    </div>
                  ))}
                </div>
                <div className="card-footer text-muted d-flex justify-content-start align-items-center p-3">
                  <div className="input-group mb-0">
                    <input
                      type="text"
                      value={currentMessage}
                      onChange={(e) => setCurrentMessage(e.target.value)}
                      className="form-control"
                      placeholder="Type message"
                      aria-label="Recipient's username"
                      aria-describedby="button-addon2"
                    />
                    <button
                      onClick={sendMessage}
                      className="btn btn-warning"
                      type="button"
                      id="button-addon2"
                      style={{ paddingTop: ".55rem" }}
                    >
                      Send
                    </button>
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

export default Chat;
