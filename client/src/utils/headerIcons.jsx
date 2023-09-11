const headerIcons = {
  home: (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
      <path fill='currentColor' d='M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z' />
    </svg>
  ),
  explore: (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 256'>
      <path
        fill='currentColor'
        d='m229.66 218.34l-50.07-50.06a88.11 88.11 0 1 0-11.31 11.31l50.06 50.07a8 8 0 0 0 11.32-11.32ZM40 112a72 72 0 1 1 72 72a72.08 72.08 0 0 1-72-72Z'
      />
    </svg>
  ),
  notifications: (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
      <path
        fill='currentColor'
        d='M10.146 3.248a2 2 0 0 1 3.708 0A7.003 7.003 0 0 1 19 10v4.697l1.832 2.748A1 1 0 0 1 20 19h-4.535a3.501 3.501 0 0 1-6.93 0H4a1 1 0 0 1-.832-1.555L5 14.697V10c0-3.224 2.18-5.94 5.146-6.752zM10.586 19a1.5 1.5 0 0 0 2.829 0h-2.83zM12 5a5 5 0 0 0-5 5v5a1 1 0 0 1-.168.555L5.869 17H18.13l-.963-1.445A1 1 0 0 1 17 15v-5a5 5 0 0 0-5-5z'
      />
    </svg>
  ),
  messages: (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
      <path
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
        d='M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75'
      />
    </svg>
  ),
  lists: (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -2 24 24'>
      <path
        fill='currentColor'
        d='M3 0h10a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3zm0 2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3zm2 1h6a1 1 0 0 1 0 2H5a1 1 0 1 1 0-2zm0 12h2a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2zm0-4h6a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2zm0-4h6a1 1 0 0 1 0 2H5a1 1 0 1 1 0-2z'
      />
    </svg>
  ),
  bookmarks: (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
      <path
        fill='currentColor'
        d='M5 2h14a1 1 0 0 1 1 1v19.143a.5.5 0 0 1-.766.424L12 18.03l-7.234 4.536A.5.5 0 0 1 4 22.143V3a1 1 0 0 1 1-1Zm13 2H6v15.432l6-3.761l6 3.761V4Z'
      />
    </svg>
  ),
  communities: (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'>
      <path
        fill='currentColor'
        d='M15 14s1 0 1-1s-1-4-5-4s-5 3-5 4s1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276c.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4a2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0a3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4c0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904c.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724c.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0a3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4a2 2 0 0 0 0-4Z'
      />
    </svg>
  ),
  verified: (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
      <path
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M8.5 12.5L11 15l4.5-4.5m-.595-5.512l-.48-.659a3 3 0 0 0-4.85 0l-.48.659l-.804-.127a3 3 0 0 0-3.43 3.43l.127.804l-.659.48a3 3 0 0 0 0 4.85l.659.48l-.127.804a3 3 0 0 0 3.43 3.43l.804-.127l.48.659a3 3 0 0 0 4.85 0l.48-.659l.804.127a3 3 0 0 0 3.43-3.43l-.127-.804l.659-.48a3 3 0 0 0 0-4.85l-.659-.48l.127-.804a3 3 0 0 0-3.43-3.43l-.804.127z'
      />
    </svg>
  ),
  profile: (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
      <g fill='none' stroke='currentColor' strokeWidth='2'>
        <path
          strokeLinejoin='round'
          d='M4 18a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z'
        />
        <circle cx='12' cy='7' r='3' />
      </g>
    </svg>
  ),
  more: (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'>
      <g fill='none'>
        <path
          stroke='currentColor'
          strokeLinejoin='round'
          strokeWidth='4'
          d='M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z'
        />
        <circle cx='14' cy='24' r='3' fill='currentColor' />
        <circle cx='24' cy='24' r='3' fill='currentColor' />
        <circle cx='34' cy='24' r='3' fill='currentColor' />
      </g>
    </svg>
  ),
  accountSettings: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='ionicon'
      viewBox='0 0 512 512'
    >
      <circle
        cx='256'
        cy='256'
        r='32'
        fill='none'
        stroke='currentColor'
        strokeMiterlimit='10'
        strokeWidth='32'
      />
      <circle
        cx='416'
        cy='256'
        r='32'
        fill='none'
        stroke='currentColor'
        strokeMiterlimit='10'
        strokeWidth='32'
      />
      <circle
        cx='96'
        cy='256'
        r='32'
        fill='none'
        stroke='currentColor'
        strokeMiterlimit='10'
        strokeWidth='32'
      />
    </svg>
  ),
  twitter: (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 256 209'
    >
      <path
        fill='#55acee'
        d='M256 25.45a105.04 105.04 0 0 1-30.166 8.27c10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52c0 4.117.465 8.125 1.36 11.97c-43.65-2.191-82.35-23.1-108.255-54.876c-4.52 7.757-7.11 16.78-7.11 26.404c0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661c0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475c-17.975 14.086-40.622 22.483-65.228 22.483c-4.24 0-8.42-.249-12.529-.734c23.243 14.902 50.85 23.597 80.51 23.597c96.607 0 149.434-80.031 149.434-149.435c0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45'
      />
    </svg>
  ),
};

export default headerIcons;
