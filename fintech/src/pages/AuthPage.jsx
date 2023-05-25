import React from 'react';

export default function AuthPage() {
  const handleClick = () => {
    let tmpwindow = window.open("about:blank");
    const clientId = "a14c06cd-a39b-4d4c-a4cf-1682a4d9a9f5"; //<-- 본인의 client id 를 입력
    tmpwindow.location.href = `https://testapi.openbanking.or.kr/oauth/2.0/authorize?response_type=code&client_id=${clientId}&redirect_uri=http://localhost:3000/authResult&scope=login inquiry transfer&state=12345678901234567890123456789012&auth_type=0`;
  };

  return (
    <div>
      <h1>사용자 인증 페이지</h1>
      <button onClick={handleClick}>사용자 인증</button>
    </div>
  );
}