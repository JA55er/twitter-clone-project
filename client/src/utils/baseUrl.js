let BASE_URL = '';

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://localhost:8080';
} else {
  BASE_URL = 'https://api-dot-tweet-portfolio.lm.r.appspot.com';
}

console.log(BASE_URL)

 export default BASE_URL