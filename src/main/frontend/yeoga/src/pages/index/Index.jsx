import "../../styles/index.css"
import ImageMenu from "./components/ImageMenu"
import EventMenu from "./components/EventMenu"
import EventCart from "./components/EventCart"
import Ad from "./components/Ad"
import Location from  "./components/Location"
import Recommend from "../../components/Recommend"
// import { useSetDummyData, } from "../../utils/useData"
import { useEffect, useState } from "react"
import axios from "axios"

export default function Index() {
  // const data = useSetDummyData();
  // const data0 = data.filter((i) => i.hType === 0)
  // const data1 = data.filter((i) => i.hType === 1);
  // const data2 = data.filter((i) => i.hType === 2);
  // const data14 = data1.slice(0, 4);
  // const data24 = data2.slice(0, 4);
  // const realData = useGetData("/main/get-hotel?type=2");
  // const data3 = data.filter((i) => i.hType === 3)
  // console.log(realData);
  const [ 튀빙겐, set튀빙겐 ] = useState([]);
  const [ 소르그, set소르그 ] = useState([]);
  const [ 최저가, set최저가 ] = useState([]);
  const [ 데이터1, set데이터1 ] = useState([])
  const [ 데이터2, set데이터2 ] = useState([])
  const [ 평점순, set평점순 ] = useState([])

  useEffect(() => {
    axios.get('/main/get-hotel-city?name=튀빙겐')
    .then(res => {set튀빙겐(res.data); console.log("튀빙겐", res.data)})
    .catch(e => console.error(e))

    axios.get('/main/get-hotel-city?name=크베들린부르크')
    .then(res => {set소르그(res.data); console.log(res.data)})
    .catch(e => console.error(e))

    axios.get('/main/get-native-page')
    .then(res => {set최저가(res.data); console.log(res.data)})
    .catch(e => console.error(e))

    axios.post('/main/native-page-name?name=Sofia')
    .then(res => {set데이터1(res.data); console.log("jin",res.data)})
    .catch(e => console.error(e))

    axios.post('/main/native-page-name?name=Johannes')
    .then(res => {set데이터2(res.data); console.log("rla",res.data)})
    .catch(e => console.error(e))

    axios.post(`/main/high-rate-hotel`)
    .then(res => set평점순(res.data))
    .catch(e => console.error(e))


  }, [])
  
  return (
    <main>
      <ImageMenu />
    
      <EventMenu title={"🎉여간행장 최저가 보장!🎉"} sub={"type1"} data={최저가} />    
    
      <EventCart menu1={"Sofia 님의 최저가 상품"} menu2={"Johannes 님의 최저가 상품"} item1={데이터1.slice(0, 4)} item2={데이터2} title1={"하하호호"} title2={"룰루랄라"} sub1={"type2"} sub2={"type3"} />
    
      <Ad images={['/img/ad1.png', '/img/ad2.png']} />
    
      <Location title={"평점순"} sub={""} data={평점순} />
    
      <Recommend id={1} data={튀빙겐} title={"튀빙겐"} sub={""} />
    
      <Recommend id={2} style={{marginTop: "50px"}} data={소르그} title={"크베들린부르크"} sub={""} />
    </main>
  )
}