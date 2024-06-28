import { Link, useLocation, useNavigate } from "react-router-dom";
import PopUp from "../pages/users/PopUp";
import { useEffect, useState, useRef } from "react";
import axios from "axios";

const SearchBar = () => {
  const { pathname } = useLocation()
  const [ search, setSearch ] = useState("")
  const nav = useNavigate();

  useEffect(() => {
    if (pathname === "/") {
      setSearch("")
    }
  }, [pathname])
  // value={search}

  return (
    <div className="search-bar">
      <i className="fa-solid fa-magnifying-glass"></i>
      <input className="search" type="text" name="" placeholder="도시를 검색하세요" onChange={(e) => setSearch(e.target.value)} onKeyDown={(e) => {
        if (e.key === "Enter" && search !== "") {
          nav(`/search/${(search)}`)
          // setSearch("")encodeURIComponent
        }
      }} value={search} />
    </div>
  )
}

function ChatPop({act, setAct}) {
  const modalRef = useRef();

  const handleClose = () => {
    setAct(false);
  };

  useEffect(() => {
    axios.post(`/chat-room`)
      .then(res => { setData(res.data); console.log("목록", res.data); })
      .catch(e => console.error(e));
  }, []);

  const [data, setData] = useState([]);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      handleClose();
    }
  };

  useEffect(() => {
    if (act) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [act]);

  return (
    <div
      ref={modalRef}
      className="채팅방목록컨테이너"
      style={act ? { display: "block", position: "absolute", top: "70px", right: "0" } : { display: "none" }}
    >
      <div className="채팅방목록헤더">
        <p className="채팅방목록헤더이름">채팅</p>
        {/* <p style={{ fontSize: "20px" }} onClick={handleClose}>&times;</p> */}
      </div>

      {data.map((i, index) => (
        <div className="채팅방미리보기컨테이너" key={index}>
          <img src="https://cdn.pixabay.com/photo/2022/07/07/20/22/fireworks-7307992_1280.jpg" alt="" />
          <Link to={"/chat"} state={{ uid: i?.uid }} style={{color: "black", textDecoration: "none"}}>
            <div className="채팅방미리보기우측">
              <p className="채팅방미리보기상대이름">{i.uname}</p>
              <p className="채팅방미리보기내용">{i.cot}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default function Header() {
  const { pathname } = useLocation();
  const [ act, setAct ] = useState(false);
  const [ user, setUser ] = useState(null);
  const [ chatAct, setChatAct ] = useState(false)

  const nav = useNavigate();
  useEffect(() => {
    axios.post(`/login/session`, {
      withCredentials: true,
    })
    .then(res => {
      setUser(res.data)
      console.log(res.data)
    })
    .catch(e => console.error(e))
  }, [pathname])

  const handleLogout = async () => {
    const confirm = window.confirm("로그아웃 하시겠습니까?")
    if (confirm) {
      await axios.get(`/login/logout`)
      .then(res => console.log(res.data))
      .catch(e => console.error(e))
      setUser(null)
      nav("/")
    }
  }

  return (
    <>
      {pathname !== "/login" ? <PopUp act={act} setAct={setAct} /> : <></>}
      <header>
        <div style={{width: '1200px', margin: '0 auto'}}>

        <div className="header">
          <div>
            <div className="logo">
              <Link to={"/"}>
                <h1 onClick={() => window.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: 'smooth'
                        })}>여간행장</h1>
              </Link>
            </div>
            { pathname !== "/upload" && pathname !== "/upload-more" && user?.native !== '1' ?
            <SearchBar /> : <span style={{marginLeft: "6px", marginTop: "13px"}}>현지인</span>
             }
          </div>
          <div className="login-menu" style={{position: "relative"}}>
          <ChatPop act={chatAct} setAct={setChatAct} />
            { 
              pathname === "/login" || pathname === "/user-join" || pathname === "/native-join" || pathname === "/native-join1" ? 
              <></>
              :
              <>
                { user?.name ? <> { user?.native !== "1" ? <></> : chatAct ? <></> :
                // nav("/chats")
                <span onClick={() => setChatAct(!chatAct)} style={{marginRight: "10px"}}><i className="fa-solid fa-comments"></i></span>}
                <span onClick={handleLogout}>{user.name} 님</span>
                { user?.native !== "1" ? (pathname !== "/mypage/*" && <Link to={`/mypage/${user.id}`}>
                <button>마이페이지</button>
                </Link>) : (pathname !== "/local/*") && 
                  <Link to={"/local/manage"}>
                    <button>마이페이지</button>
                  </Link>
                }
                </>
                 : <> <span onClick={() => setAct(true)}>회원가입</span>
                <Link to={"/login"}>
                  <button>로그인</button>
                </Link>
                </>}
              </>
            }
          </div>
        </div>
        <div className="header-nav">
          {/* <span><i className="fa-solid fa-plane-departure"></i>&nbsp; 메뉴1</span> */}
          <span onClick={() => nav("/citys")}><i className="fa-solid fa-hotel"></i>&nbsp;도시들</span>
          <span onClick={() => nav("/search/native")}><i className="fa-solid fa-person"></i>&nbsp;현지인</span>
          <span onClick={() => nav("/event")}><i className="fa-solid fa-gift"></i>&nbsp;이벤트</span>
          {/* <span><i className="fa-solid fa-box"></i>&nbsp;메뉴 5</span> */}
          {/* <span>더보기&nbsp;<i className="fa-solid fa-caret-down"></i></span> */}
        </div>
        </div>
      </header>
    </>
  )
}