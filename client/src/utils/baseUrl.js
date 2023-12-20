let BASE_URL = '';

// BASE_URL = 'http://192.168.0.179:5173'

const isLocalhost = window.location.hostname === 'localhost';

console.log(process.env.NODE_ENV);

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  // BASE_URL = 'http://localhost:8080';
  BASE_URL = isLocalhost
    ? 'http://localhost:8080'
    : 'http://192.168.0.179:8080';
} else {
  // BASE_URL = 'http://192.168.0.179:5173'
  // BASE_URL = process.env.REACT_APP_GAE_API_URL;
  BASE_URL = 'https://api-dot-twitter-6t.lm.r.appspot.com';
}

console.log(BASE_URL);

export default BASE_URL;
