export default function Footer() {
  return (
    <footer>
    <div>
      <div>
        <h3>고객지원실 운영안내</h3>
        <p>수업 시간 09:00~16:15</p>
        <p>점심 시간 12:35~13:35</p>
        <p>유선 상담 1234-5678</p>
        <button onClick={() => window.open('https://pf.kakao.com/_yepxiG/chat', '_blank', 'width=500,height=500')}>1:1 상담</button>
      </div>
      <div>
        <div>
          <p>소개</p>
          <p>회사소개</p>
          <p>채용</p>
          <p>공고</p>
        </div>
        <div>
          <p>파트너</p>
          <p>파트너 홈</p>
          <p>마케팅/제휴 문의</p>
        </div>
        <div>
          <p>지원</p>
          <p>공지사항/FAQ</p>
          <p>최저가 보장제</p>
        </div>
      </div>
    </div>
    <hr />
    <div>
      <div>
        <span>이용 약관</span>
        <span>개인정보 처리방침</span>
        <span>취소 및 환불 정책</span>
      </div>
      <p>상호명 여간행장 | 프론트엔드 : 김승민, 김윤, 이주현 | 백엔드 : 김남욱, 김우진, 김지윤<br />주소 신구대학교 남관 111호 PBL룸</p>
      <p>본 프로젝트는 세계 여러나라의 숙박업소를 보여주는 사이트입니다.</p>
      <br />
    </div>
  </footer>
  )
}