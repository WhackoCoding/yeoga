import "./styles/main.css"
import Layout from "./layout/Layout"
import { Route, Routes, useLocation, useNavigate } from "react-router-dom"
// import { Helmet } from "react-helmet-async"
import Login from "./pages/users/Login"
import Map from "./tests/Map"
import Index from "./pages/index/Index"
import Chat from "./tests/Chat"
import SwiperTest from "./tests/SwiperTest"
// import UserInfo from "./pages/userpages/UserInfo"
import CityList from "./pages/CityList"
import NativeJoin1 from "./pages/users/NativeJoin1"
import NativeJoin from "./pages/users/NativeJoin"
import UserJoin from "./pages/users/UserJoin"
import Local from "./pages/users/Local"
import { Sub1 } from "./pages/search/Sub1"
import { Sub3 } from "./pages/subs/Sub3"
import { Upload } from "./pages/uploads/Upload"
import { useEffect } from "react"
import Event from "./pages/events/Events"
import HookTest from "./tests/HookTest"
import Identify from "./pages/subs/Identify"
import Reservation from "./pages/reservation/Reservation"
import UploadForm from "./pages/uploads/UploadForm"
import { SearchNation } from "./pages/search/SearchNation"
import UserPage from './pages/userpages/UserPage'
import GoogleLoginTest from "./tests/GoogleLogin"
import { Test } from "./tests/GoogleLoginTest2"
import WriteReview from "./pages/subs/WriteReview"
import ImageUpload from "./tests/ImageUpload"
import UserPageBuyBox from './pages/userpages/UserPageBuyBox'
import UserPageWish from './pages/userpages/UserPageWish'
import { 카운터 as Counter } from './tests/카운터'
import { 지도 as MapKo } from './tests/지도'
import { 타이머 as TimerKo } from './tests/타이머'
import Place from "./tests/Place"
import SearchNative from "./pages/search/SearchNative"
import Chat2 from "./pages/chats/Chat"
import NativeDesc from "./pages/native/NativeDesc"
import ChatDum from "./pages/chats/Chat2"
import ChatTest from "./pages/chats/ChatTest"
import EventPage from "./pages/events/EventPage"
import { Chat as NChat } from "./pages/chats/NativeChats"

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      // behavior: "smooth"
      behavior: "instant"
    })
  }, [pathname])
  return null;
}

const Redirect = () => {
  const nav = useNavigate()
  useEffect(() => {
    setTimeout(() => nav('/', {replace: true}), 2000)
  }, [nav])
  return <div style={{display: "flex", justifyContent: "center", alignItems: "center", width: "100vw", height: "100vh"}}><h1>잘못된 접근입니다.</h1></div>
}

export default function App() {
  return (
    <>
    {/* 스크롤 자동으로 위 */}
    <ScrollToTop />
    <Routes>
      {/* 공용 레이아웃 */}
      <Route element={<Layout />}>
        {/* 메인 */}
        <Route index element={<Index />} />
        {/* 로그인 */}
        <Route path="/login" element={<Login />} />
        {/* 마이페이지 */}
        {/* <Route path="/mypage" element={<UserInfo />} /> */}
        <Route path="/mypage">
          <Route path=":num" element={<UserPage />} />
          <Route path=":num/wish" element={<UserPageWish />} />
          <Route path=":num/buy" element={<UserPageBuyBox />} />
        </Route>
        {/* 도시들 (아마 안 쓸 수도) */}
        <Route path="/citys" element={<CityList />} />
        {/* 검색 결과 */}
        <Route path="/search/:locate" element={<Sub1 />} />
        <Route path="/search/nation" element={<SearchNation />} />
        <Route path="/search/native" element={<SearchNative />} />
        {/* 객실 페이지 */}
        <Route path="/room" element={<Sub3 />}>
          <Route path=":num" element={<Sub3 />} />
        </Route>
        {/* 유저 회원가입 */}
        <Route path="/user-join" element={<UserJoin />} />
        {/* 현지인 회원가입 */}
        <Route path="/native-join" element={<NativeJoin />} />
        <Route path="/native-join1" element={<NativeJoin1 />} />
        {/* 현지인 페이지 */}
        <Route path="/local/*" element={<Local />} />
        {/* 객실 업로드 */}
        <Route path="/upload" element={<Upload />} />
        <Route path="/upload-more" element={<UploadForm />} />
        {/* 이벤트 상세 */}
        <Route path="/event" element={<Event />} />
        <Route path="/event/:num" element={<EventPage />} />
        {/* 예약하기 */}
        <Route path="/order" element={<Reservation />} />
        {/* 현지인 소개 */}
        <Route path="/native-desc" element={<NativeDesc />} />
        {/* 채팅방 */}
        <Route path="/chats" element={<NChat />} />
      </Route>
      {/* 채팅 */}
      <Route path="/chat" element={<Chat2 />} />
      {/* /test 들은 테스트용 */}
      <Route path="/test">
        <Route path="map" element={<Map />} />
        <Route path="swiper" element={<SwiperTest /> } />
        <Route path="hook" element={<HookTest />} />
        <Route path="chat/:sender/:id" element={<Chat />} />
        <Route path="google" element={<GoogleLoginTest />} />
        <Route path="google2" element={<Test />} />
        <Route path="image" element={<ImageUpload />} />
        <Route path="카운터" element={<Counter />} />
        <Route path="지도" element={<MapKo />} />
        <Route path="타이머" element={<TimerKo />} />
        <Route path="place" element={<Place />} />
        <Route path="dum" element={<ChatDum />} />
        <Route path="chatt" element={<ChatTest />} />
      </Route>
      {/* 본인인증 */}
      <Route path="/identify" element={<Identify />} />
      {/* 리뷰 */}
      <Route path="/review/:hnum" element={<WriteReview />} />
      {/* 404시 메인으로 */}
      <Route path="*" element={<Redirect />} />
    </Routes>
    </>
  )
}