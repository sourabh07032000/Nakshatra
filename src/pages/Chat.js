import React, { useEffect, useState } from "react";
import firebase from "./Firebase";
import "./chat.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ReverseTimer from "./ReverseTimer";

const Chat = () => {
  const time =()=>{
    setEndTime(showTime);
    
      // date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
      
      const xx = new Date(`Aug 12, 2022 ${startTime}`);
      const y = new Date(`Aug 12, 2022 ${showTime}`);
      const a  = Math.abs(xx.getTime() - y.getTime())/1000;
      setTotalTime(a)   
  }
  const manualDisconnect = () => {
    time()
    disconnectChat();
  };
  const date = new Date();
  const showTime =
    date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

  const [startTime, setStartTime] = useState(showTime);
  const a = startTime.split(":");
  const startSecond = +a[0] * 60 * 60 + +a[1] * 60 + +a[2];
  const [endTime, setEndTime] = useState("00:00:00");
  const b = endTime.split(":");
  const endSecond = +b[0] * 60 * 60 + +b[1] * 60 + +b[2];
  const postRech = () => {
    const item = {
      user_id: _id,
    };

    axios
      .post("http://103.104.74.215:3012/api/user/get_wallet_user", item)
      .then((res) => {
        setWalletAmnt(res.data.data);
        setAmount(res.data.data.ammount)

      });
  };
  const count =()=>{

  }
  const [totalTime, setTotalTime] = useState('')
  

  const disconnectChat = () => {
    // Perform the necessary actions to disconnect the chat

    // Deduct the chat cost from the wallet balance
    const chatDuration = Math.ceil(15 * 60); // Chat duration in seconds (5 minutes)
    const chatCost = Math.ceil((chatDuration - remainingTime) / 60) * 10;
    time()
    
    
   
    

    // alert("hahaha");
    // navigate("/");
  };
  const [timeT, setTimeT] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setAmount((x) => x - cData?.chat_rate);
      return () => {
        if (amount < 0) {
          clearInterval(interval);
        }
      };
    }, 60000);
  }, []);

  

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
  const [st, setSt] = useState(new Date())
  const [et,setEt] = useState('')

  // Calculate remaining chat duration in seconds


  

  const [amount, setAmount] = useState(walletAmnt?.ammount);

  
  const [x, setX] = useState(0);


  

  useEffect(() => {
    postRech();
  }, []);

  

  return (
    <>
    
        <>
          <ReverseTimer
            minutes={9}
            seconds={60}
            style={{ fontSize: 10 }}
            // onTimerEnd={disconnectChat}
          />
          <button onClick={manualDisconnect}>Disconnect</button>
          <div>
            {/* <label>Amount Left:{amount}</label> */}
            <div className="App">
             
              <br></br>
              <label>{(endSecond-startSecond)/60}</label>
              <level>{}</level>
            </div>
          </div>
        </>
    
      {amount < 0 && disconnectChat()}

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

// import React, { useEffect, useState } from "react";
// import firebase from "./Firebase";
// import "./chat.css";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Chat = () => {
//   const navigate = useNavigate();
//   const [messages, setMessages] = useState([]);
//   const [currentMessage, setCurrentMessage] = useState("");
//   const [amnt, setAmnt] = useState("");
//   const [walletAmnt, setWalletAmnt] = useState(100); // Initial wallet amount
//   const [userData, setUserData] = useState([]);
//   const [remainingTime, setRemainingTime] = useState(5 * 60); // 5 minutes in seconds
//   const [isTimerRunning, setIsTimerRunning] = useState(false);

//   let [_id, set_id] = useState(() => {
//     let result = localStorage.getItem("_id");
//     if (result != null) {
//       return JSON.parse(result);
//     } else {
//       return [];
//     }
//   });

//   const chatt = localStorage.getItem("chatdata");
//   const parse = JSON.parse(chatt);
//   const [cData, setCData] = useState(parse);

//   useEffect(() => {
//     const chatRef = firebase.database().ref("add");
//     chatRef.on("value", (snapshot) => {
//       const chatData = snapshot.val();
//       if (chatData) {
//         const chatMessages = Object.values(chatData);
//         setMessages(chatMessages);
//       }
//     });
//   }, []);

//   const sendMessage = () => {
//     if (currentMessage.trim() !== "") {
//       const chatRef = firebase.database().ref("add");
//       const newMessageRef = chatRef.push();
//       newMessageRef.set({
//         title: currentMessage,
//         sender_id: _id,
//         receiver_id: cData._id,
//       });
//       setCurrentMessage("");
//     }
//   };

//   useEffect(() => {
//     postId();
//   }, []);

//   const postId = () => {
//     const item = {
//       _id: _id,
//     };
//     axios
//       .post(`http://103.104.74.215:3012/api/user/get_user_profile/`, item)
//       .then((res) => setUserData(res.data.data));
//   };

//   useEffect(() => {
//     const chatRef = firebase.database().ref("add");
//     chatRef.on("value", (snapshot) => {
//       const chatData = snapshot.val();
//       if (chatData) {
//         const chatMessages = Object.values(chatData);
//         let receiverMessages = chatMessages.filter((message) => {
//           return message.receiver_id === cData._id && message.sender_id == _id;
//         });
//         setMessages(receiverMessages);
//       }
//     });
//   }, [cData]);

//   useEffect(() => {
//     postRech();
//   }, []);

//   const postRech = () => {
//     const item = {
//       user_id: _id,
//     };

//     axios
//       .post("http://103.104.74.215:3012/api/user/get_wallet_user", item)
//       .then((res) => {
//         setAmnt(res.data.data);
//         console.log("yayaya", amnt);
//       });
//   };

//   useEffect(() => {
//     // Start the timer when wallet amount is greater than the per minute charge
//     if (walletAmnt >= cData.chat_rate && !isTimerRunning) {
//       setIsTimerRunning(true);
//     }
//   }, [walletAmnt]);

//   useEffect(() => {
//     let timer;
//     if (isTimerRunning && remainingTime > 0) {
//       timer = setTimeout(() => {
//         setRemainingTime((prevTime) => prevTime - 1);
//       }, 1000);
//     } else if (remainingTime === 0) {
//       // Auto disconnect after 5 minutes
//       setIsTimerRunning(false);
//       // Perform the necessary actions for auto disconnect here
//     }
//     return () => {
//       clearTimeout(timer);
//     };
//   }, [isTimerRunning, remainingTime]);

//   useEffect(() => {
//     if (isTimerRunning && remainingTime > 0) {
//       // Deduct wallet amount every minute
//       const chargePerMinute = 10;
//       if (remainingTime % 60 === 0) {
//         setWalletAmnt((prevAmount) => prevAmount - chargePerMinute);
//       }
//     }
//   }, [isTimerRunning, remainingTime]);

//   const disconnectChat = () => {
//     // Perform the necessary actions for manual disconnect here
//     setIsTimerRunning(false);
//     navigate("/");
//     // Clear the messages
//     // setMessages([]);
//   };

//   return (
//     <>
//       <section style={{ backgroundColor: "#eee" }}>
//         <div className="container py-5">
//           <div>
//             <p>
//               Remaining Time: {Math.floor(remainingTime / 60)}:
//               {remainingTime % 60}
//             </p>
//             <p>Wallet Amount: {walletAmnt} Rs</p>
//             <button onClick={disconnectChat}>Disconnect Chat</button>
//           </div>
//           <div className="row d-flex justify-content-center">
//             <div className="col-md-8 col-lg-6 col-xl-4">
//               <div className="card">
//                 <div
//                   className="card-header d-flex justify-content-between align-items-center p-3"
//                   style={{ borderTop: "4px solid #ffa900" }}
//                 >
//                   <h5 className="mb-0">Chat messages</h5>
//                   <div className="d-flex flex-row align-items-center">
//                     <i
//                       onClick={() => navigate("/")}
//                       style={{
//                         fontSize: 20,
//                         fontWeight: "bolder",
//                         cursor: "pointer",
//                       }}
//                       className="fa fa-times"
//                       aria-hidden="true"
//                     ></i>
//                   </div>
//                 </div>

//                 <div
//                   className="card-body"
//                   data-mdb-perfect-scrollbar="true"
//                   style={{
//                     position: "relative",
//                     height: "500px",
//                     overflowY: "scroll",
//                   }}
//                 >
//                   {messages.map((message, index) => (
//                     <div
//                       style={{
//                         display: "flex",
//                         flexDirection: "row",
//                         padding: 5,
//                       }}
//                     >
//                       <img
//                         style={{
//                           height: 25,
//                           width: 25,
//                           borderRadius: "100%",
//                           padding: 2,
//                         }}
//                         src={
//                           "http://103.104.74.215:3012/uploads/" +
//                           userData?.user_pic
//                         }
//                         className="blur-up lazyload update_img"
//                         alt=""
//                       />
//                       <div key={index}>{message.title}</div>
//                     </div>
//                   ))}
//                 </div>
//                 <div className="card-footer text-muted d-flex justify-content-start align-items-center p-3">
//                   <div className="input-group mb-0">
//                     <input
//                       type="text"
//                       value={currentMessage}
//                       onChange={(e) => setCurrentMessage(e.target.value)}
//                       className="form-control"
//                       placeholder="Type message"
//                       aria-label="Recipient's username"
//                       aria-describedby="button-addon2"
//                     />
//                     <button
//                       onClick={sendMessage}
//                       className="btn btn-warning"
//                       type="button"
//                       id="button-addon2"
//                       style={{ paddingTop: ".55rem" }}
//                       disabled={!isTimerRunning || walletAmnt < 10}
//                     >
//                       Send
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Chat;
