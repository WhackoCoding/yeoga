import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Pagination, Navigation, Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const SearchBar = () => {
  const [ search, setSearch ] = useState("")
  const nav = useNavigate();

  return (
    <div className="menu-search-bar">
      <div>
        <i className="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder="여행 갈 도시를 찾아보세요!" className="search" onChange={(e) => setSearch(e.target.value)} onKeyDown={(e) => {
          if (e.key === "Enter" && search !== "") {
            nav(`/search/${encodeURIComponent(search)}`)
          }
        }} value={search} />
      </div>
      <button onClick={() => search !== "" ? nav(`/search/${search}`) : null}>검색하기</button>
    </div>
  )
}

export default function ImageMenu() {

  return (
    <div style={{position: "relative"}}>
      <div style={{position: "absolute", width: "auto", height: "auto", zIndex: "10", left: "13%", top: "48%", transform: "translateY(-52%)"}}>
        <h1 style={{marginBottom: "10px", color: "white"}}>Enjoy Your Trip!</h1>
        <span style={{color: "white"}}>여행을 즐기세요!</span><br />
            
        {/* <SearchBar /> */}

      </div>
      <Swiper
        modules={[ Pagination, Navigation, Autoplay ]}
        style={{height: "350px"}}
        slidesPerView={1}
        slidesPerGroup={1}
        autoplay={{delay: 7000}}
        // pagination={{clickable: true}}
        navigation={true}
        loop={true}
        >
        <SwiperSlide style={{ backgroundColor: "rgb(0, 0, 0, 0.3)", backgroundBlendMode: "darken", backgroundSize: "cover", backgroundImage: "url('https://www.hotelscombined.co.kr/rimg/dimg/03/ab/17bc47f0-city-33286-172e067f89c.jpg?width=1366&height=768&xhint=3138&yhint=1902&crop=true&watermarkposition=lowerright')"}}></SwiperSlide>
        <SwiperSlide style={{ backgroundColor: "rgb(0, 0, 0, 0.3)", backgroundBlendMode: "darken", backgroundSize: "cover", backgroundImage: "url('https://img1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/3zNv/image/nN3KKXuQmxTmeb-4fFpCqj_8ccc.jpg')"}}></SwiperSlide>
        <SwiperSlide style={{ backgroundColor: "rgb(0, 0, 0, 0.3)", backgroundBlendMode: "darken", backgroundSize: "cover", backgroundImage: "url('https://images.chosun.com/resizer/AyIXHNeYnbGuDpYGMqd1qHqIfJ0=/616x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/FCQHGPIZD5B6PIVGLZ3MD4XZS4.jpg')"}}></SwiperSlide>
        <SwiperSlide style={{ backgroundColor: "rgb(0, 0, 0, 0.3)", backgroundBlendMode: "darken", backgroundSize: "cover", backgroundImage: "url('https://cf.bstatic.com/xdata/images/country/1020x340/1126.jpg?k=5be7b49bb224015668dc5149aa9033e17151086b2c101e2d21914a1c3a771fa6&o=')"}}></SwiperSlide>
      </Swiper>
    </div>
  )
}