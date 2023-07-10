import React, { useEffect, useState } from "react";
import AgoraRTC from "agora-rtc-sdk-ng";
import Videoroom from "./VideoRoom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const VideoCall = () => {
  const navigate = useNavigate();
  const parse = localStorage.getItem("vcdata");
  const parsed = JSON.parse(parse);
  const [data, setData] = useState(parsed);
  let [_id] = useState(() => {
    let result = localStorage.getItem("_id");
    console.log("idasddasdasdads", result);
    if (result != null) {
      return JSON.parse(result);
    } else {
      return [];
    }
  });

  const [tkn, setTkn] = useState([]);

  useEffect(() => {
    // console.log("bhfscf", tkn);
  }, []);

  const channel = "test";

  const tokenGen = () => {
    const item = {
      user_id: _id,
      astrologer_id: data._id,
      channel_name: channel,
    };
    console.log("item hai", item);
    axios
      .post(
        "http://103.104.74.215:3012/api/user/generate_agrora_token_calling",
        item
      )
      .then((res) => {
        console.log(res.data);
        setTkn(res.data);
      });
  };

  const APP_ID = "b13de305bceb4aa1a434b8a295f990dd";
  const CHANNEL = "test";

  const client = AgoraRTC.createClient({
    mode: "rtc",
    codec: "vp8",
  });

  const [users, setUsers] = useState([]);
  const [localTracks, setLocalTracks] = useState([]);
  const [tracks, setTracks] = useState([]);

  const handleUserJoined = async (user, mediaType) => {
    await client.subscribe(user, mediaType);

    if (mediaType === "video") {
      setUsers((previousUsers) => [...previousUsers, user]);
    }

    if (mediaType === "audio") {
      // user.audioTrack.play()
    }
  };

  const handleUserLeft = (user) => {
    setUsers((previousUsers) =>
      previousUsers.filter((u) => u.uid !== user.uid)
    );
  };

  useEffect(() => {
    client.on("user-published", handleUserJoined);
    client.on("user-left", handleUserLeft);

    client
      .join(APP_ID, CHANNEL, tkn.token, null)
      .then((uid) =>
        Promise.all([AgoraRTC.createMicrophoneAndCameraTracks(), uid])
      )
      .then(([newTracks, uid]) => {
        const [audioTrack, videoTrack] = newTracks;
        setLocalTracks(newTracks);
        setUsers((previousUsers) => [
          ...previousUsers,
          {
            uid,
            videoTrack,
            audioTrack,
          },
        ]);
        client.publish(newTracks);
        setTracks(newTracks); // Store the tracks in the state variable
      });

    return () => {
      for (let localTrack of localTracks) {
        localTrack.stop();
        localTrack.close();
      }
      client.off("user-published", handleUserJoined);
      client.off("user-left", handleUserLeft);
      if (tracks.length > 0) {
        // Check if tracks exist before using them
        client.unpublish(tracks).then(() => client.leave());
      }
    };
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <button onClick={tokenGen}>Generate Token</button>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 200px)",
        }}
      >
        {users.map((user) => (
          <Videoroom key={user.uid} user={user} />
        ))}
      </div>
    </div>
  );
};

export default VideoCall;

// import React, { useEffect, useState } from "react";
// import AgoraRTC from "agora-rtc-sdk-ng";
// import Videoroom from "./VideoRoom";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const VideoCall = () => {
//   const navigate = useNavigate();
//   const parse = localStorage.getItem("vcdata");
//   const parsed = JSON.parse(parse);
//   const [data, setData] = useState(parsed);
//   let [_id] = useState(() => {
//     let result = localStorage.getItem("_id");
//     console.log("idasddasdasdads", result);
//     if (result != null) {
//       return JSON.parse(result);
//     } else {
//       return [];
//     }
//   });

//   const [tkn, setTkn] = useState([]);

//   useEffect(() => {
//     // console.log("bhfscf", tkn);
//   }, []);

//   const channel = "test";

//   const tokenGen = () => {
//     const item = {
//       user_id: _id,
//       astrologer_id: data._id,
//       channel_name: channel,
//     };
//     console.log("item hai re", item);
//     axios
//       .post(
//         "http://103.104.74.215:3012/api/user/generate_agrora_token_calling",
//         item
//       )
//       .then((res) => {
//         console.log(res.data);
//         setTkn(res.data);
//       });
//   };

//   const APP_ID = "b13de305bceb4aa1a434b8a295f990dd";
//   const TOKEN = tkn.token;
//   const CHANNEL = "test";

//   const client = AgoraRTC.createClient({
//     mode: "rtc",
//     codec: "vp8",
//   });

//   const [users, setUsers] = useState([]);
//   const [localTracks, setLocalTracks] = useState([]);

//   const handleUserJoined = async (user, mediaType) => {
//     await client.subscribe(user, mediaType);

//     if (mediaType === "video") {
//       setUsers((previousUsers) => [...previousUsers, user]);
//     }

//     if (mediaType === "audio") {
//       // user.audioTrack.play()
//     }
//   };

//   const handleUserLeft = (user) => {
//     setUsers((previousUsers) =>
//       previousUsers.filter((u) => u.uid !== user.uid)
//     );
//   };

//   useEffect(() => {
//     // let tracks;

//     client.on("user-published", handleUserJoined);
//     client.on("user-left", handleUserLeft);

//     client
//       .join(APP_ID, CHANNEL, TOKEN, null)
//       .then((uid) =>
//         Promise.all([AgoraRTC.createMicrophoneAndCameraTracks(), uid])
//       )
//       .then(([tracks, uid]) => {
//         const [audioTrack, videoTrack] = tracks;
//         setLocalTracks(tracks);
//         setUsers((previousUsers) => [
//           ...previousUsers,
//           {
//             uid,
//             videoTrack,
//             audioTrack,
//           },
//         ]);
//         client.publish(tracks);
//       });

//     return () => {
//       for (let localTrack of localTracks){
//         localTrack.stop();
//         localTrack.close();
//       }
//       client.off("user-published", handleUserJoined);
//       client.off("user-left", handleUserLeft);
//       client.unpublish(tracks).then(() => client.leave());
//     };
//   }, []);

//   return (
//     <div style={{ display: "flex", justifyContent: "center" }}>
//       <button onClick={tokenGen}>Generate Token</button>

//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(2, 200px)",
//         }}
//       >
//         {users.map((user) => (
//           <Videoroom key={user.uid} user={user} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default VideoCall;
