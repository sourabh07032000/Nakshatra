import { Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup_page from "./pages/Signup_page";
import Login_page from "./pages/Login_page";
import Kundali from "./pages/Kundali";
import Kundali_milan from "./pages/Kundali_milan";
import Blog_page from "./pages/Blog_page";
import NakshatraMart_page from "./pages/NakshatraMart_page";
import Tarot from "./pages/Tarot";
import Mahurt from "./pages/Mahurt";
import SpeaktoAustrology from "./pages/SpeaktoAustrology";
import Spritual from "./pages/Spritual";
import Panchang_page from "./pages/Panchang_page";
import Profile from "./pages/Profile";
import Love from "./pages/Love";
import Zodiac from "./pages/Zodiac";
import Vastu from "./pages/Vastu";
import Pooja from "./pages/Pooja";
import Signup from "./pages/Signup"
import BlogDetail from "./pages/BlogDetail"
import Horoscope_page from "./pages/Horoscope_page";
import EclipsesBlogDetail  from "./pages/EclipsesBlogDetail"
import Horoscope_yearly from "./pages/Horoscope_yearly"
import Horoscope_monthly from "./pages/Horoscope_monthly"
import AstrologersList from "./pages/AstrologersList"
import AstrologerDetail from "./pages/AstrologerDetail"
import Astrolive from "./pages/Astrolive"
import PujaListDetail from "./pages/PujaListDetail"
import Streaming from "./pages/Streaming"
import VedicBlog from "./pages/VedicBlog"
import NavagrahasBlog from "./pages/NavagrahasBlog"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import VideoCall from "./pages/VideoCall"
import Chat from "./pages/Chat";
import ChatForm from "./pages/ChatForm";

function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Signup_page />}/>
        <Route path="/login" element={<Login_page />}/>
        <Route path="/kundali" element={<Kundali />}/>
        <Route path="/kundali_milan" element={<Kundali_milan />}/>
        <Route path="/blog" element={<Blog_page />}/>
        <Route path="/nakshatra_mart" element={<NakshatraMart_page />}/>
        <Route path="/tarot" element={<Tarot />}/>
        <Route path="/muhurat" element={<Mahurt />}/>
        <Route path="/speaktoaustrology" element={<SpeaktoAustrology />}/>
        <Route path="/spritual" element={<Spritual />}/>
        <Route path="/panchang" element={<Panchang_page />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/love" element={<Love />}/>
        <Route path="/zodiac" element={<Zodiac />}/>
        <Route path="/vastu" element={<Vastu />}/>
        <Route path="/pooja" element={<Pooja />}/>
        <Route path="/SignUp" element={<Signup />}/>
        <Route path="/BlogDetail" element={<BlogDetail />}/>
        <Route path="/EclipsesBlogDetail" element={<EclipsesBlogDetail />}/>
        <Route path="/Horoscope_page" element={<Horoscope_page />}></Route>
        <Route path="/Panchang_page" element={<Panchang_page />}></Route>
        <Route path="/AstrologersList" element={<AstrologersList/>}></Route>
        <Route path="/Horoscope_yearly" element={<Horoscope_yearly/>}></Route>
        <Route path="/Horoscope_monthly" element={<Horoscope_monthly/>}></Route>
        <Route path="/AstrologerDetail" element={<AstrologerDetail/>}></Route>
        <Route path="/Astrolive" element={<Astrolive/>}></Route>
        <Route path="/PujaListDetail" element={<PujaListDetail/>}></Route>
        <Route path="/Streaming" element={<Streaming/>}></Route>
        <Route path="/VedicBlog" element={<VedicBlog/>}></Route>
        <Route path="/NavagrahasBlog" element={<NavagrahasBlog/>}></Route>
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>}></Route>
        <Route path="/VideoCall" element={<VideoCall/>}></Route>
        <Route path="/Chat" element={<Chat/>}></Route>
        <Route path="/ChatForm" element={<ChatForm/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
