import axios from 'axios';

export default async function authenticate(state, code) {
  if (!state) {
    const response = await axios.post(
      'auth/kakao',
      { token: code },
      { withCredentials: true }
    );

    return response;
  }
  const response = await axios.post(
    'auth/naver',
    { code, state },
    { withCredentials: true }
  );

  return response;
}
