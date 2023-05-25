import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import axios from 'axios';

export default function AuthResultPage() {
  const queryParams = useLocation().search;
  const code = queryString.parse(queryParams).code;

  const [accessToken, setAccessToken] = useState('');
  const [userSeqNo, setUserSeqNo] = useState('');

  const getAccessToken = () => {
    // axios를 통해 토큰을 발급 받음.
    let requestBody = {
      code: code,
      client_id: "a14c06cd-a39b-4d4c-a4cf-1682a4d9a9f5",
      client_secret: "3ff5a605-b3ff-4a25-aff6-041b5722a2c5",
      redirect_uri: "http://localhost:3000/authResult",
      grant_type: "authorization_code",
    };

    const urlFormEncodedRequestBody = queryString.stringify(requestBody);
    // urlencoded 형태로 전송 데이터를 변경.

    axios
      .post("/oauth/2.0/token", urlFormEncodedRequestBody)
      .then(({ data }) => {
        console.log(data.access_token);
        console.log(data.user_seq_no);

        setAccessToken(data.access_token);
        setUserSeqNo(data.user_seq_no);

        localStorage.setItem("accessToken", data.access_token);
        localStorage.setItem("userSeqNo", data.user_seq_no);

      });
  };

  return (
    <>
      <h1>토근 발급</h1>
      <p>발급 받은 인증 코드는 : {code}</p>
      <button onClick={getAccessToken}>AccessToken 발급</button>
      <p>발급 받은 AccessToken은 : {accessToken}</p>
      <p>발급 받은 userSeqNo은 : {userSeqNo}</p>
    </>
  );
}