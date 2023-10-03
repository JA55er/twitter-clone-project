const optionIcons = {
  image: (
    <svg
      className='tweetOptionsIcon'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 15 15'
    >
      <path
        fill='currentColor'
        fillRule='evenodd'
        d='M2.5 1h10A1.5 1.5 0 0 1 14 2.5v10a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 1 12.5v-10A1.5 1.5 0 0 1 2.5 1Zm0 1a.5.5 0 0 0-.5.5v5.864l1.682-1.682a.45.45 0 0 1 .647.01l3.545 3.798l2.808-2.808a.45.45 0 0 1 .636 0L13 9.364V2.5a.5.5 0 0 0-.5-.5h-10ZM2 12.5V9.636l1.989-1.988l3.542 3.794L8.941 13H2.5a.5.5 0 0 1-.5-.5Zm10.5.5h-2.345l-1.672-1.847L11 8.636l2 2V12.5a.5.5 0 0 1-.5.5ZM6.65 5.5a.85.85 0 1 1 1.7 0a.85.85 0 0 1-1.7 0Zm.85-1.75a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 0 0 0-3.5Z'
        clipRule='evenodd'
      />
    </svg>
  ),
  calendar: (
    <svg
      className='tweetOptionsIcon'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 36 36'
    >
      <path
        fill='currentColor'
        d='M32.25 6H29v2h3v22H4V8h3V6H3.75A1.78 1.78 0 0 0 2 7.81v22.38A1.78 1.78 0 0 0 3.75 32h28.5A1.78 1.78 0 0 0 34 30.19V7.81A1.78 1.78 0 0 0 32.25 6Z'
        className='clr-i-outline clr-i-outline-path-1'
      />
      <path
        fill='currentColor'
        d='M8 14h2v2H8z'
        className='clr-i-outline clr-i-outline-path-2'
      />
      <path
        fill='currentColor'
        d='M14 14h2v2h-2z'
        className='clr-i-outline clr-i-outline-path-3'
      />
      <path
        fill='currentColor'
        d='M20 14h2v2h-2z'
        className='clr-i-outline clr-i-outline-path-4'
      />
      <path
        fill='currentColor'
        d='M26 14h2v2h-2z'
        className='clr-i-outline clr-i-outline-path-5'
      />
      <path
        fill='currentColor'
        d='M8 19h2v2H8z'
        className='clr-i-outline clr-i-outline-path-6'
      />
      <path
        fill='currentColor'
        d='M14 19h2v2h-2z'
        className='clr-i-outline clr-i-outline-path-7'
      />
      <path
        fill='currentColor'
        d='M20 19h2v2h-2z'
        className='clr-i-outline clr-i-outline-path-8'
      />
      <path
        fill='currentColor'
        d='M26 19h2v2h-2z'
        className='clr-i-outline clr-i-outline-path-9'
      />
      <path
        fill='currentColor'
        d='M8 24h2v2H8z'
        className='clr-i-outline clr-i-outline-path-10'
      />
      <path
        fill='currentColor'
        d='M14 24h2v2h-2z'
        className='clr-i-outline clr-i-outline-path-11'
      />
      <path
        fill='currentColor'
        d='M20 24h2v2h-2z'
        className='clr-i-outline clr-i-outline-path-12'
      />
      <path
        fill='currentColor'
        d='M26 24h2v2h-2z'
        className='clr-i-outline clr-i-outline-path-13'
      />
      <path
        fill='currentColor'
        d='M10 10a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1Z'
        className='clr-i-outline clr-i-outline-path-14'
      />
      <path
        fill='currentColor'
        d='M26 10a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1Z'
        className='clr-i-outline clr-i-outline-path-15'
      />
      <path
        fill='currentColor'
        d='M13 6h10v2H13z'
        className='clr-i-outline clr-i-outline-path-16'
      />
      <path fill='none' d='M0 0h36v36H0z' />
    </svg>
  ),
  emoji: (
    <svg
      className='tweetOptionsIcon'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
    >
      <g fill='none'>
        <path d='M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z' />
        <path
          fill='currentColor'
          d='M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2Zm0 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16Zm2.8 9.857a1 1 0 1 1 1.4 1.428A5.984 5.984 0 0 1 12 17a5.984 5.984 0 0 1-4.2-1.715a1 1 0 0 1 1.4-1.428A3.984 3.984 0 0 0 12 15c1.09 0 2.077-.435 2.8-1.143ZM8.5 8a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Zm7 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Z'
        />
      </g>
    </svg>
  ),
  poll: (
    <svg
      className='tweetOptionsIcon'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
    >
      <path
        fill='currentColor'
        d='M7 11h7v2H7zm0-4h10.97v2H7zm0 8h13v2H7zM4 4h2v16H4z'
      />
    </svg>
  ),

  gif: (
    <svg
      className='tweetOptionsIcon'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 16 16'
    >
      <path d='M5.052 6.706c.481-.05.853.037.986.103a.5.5 0 1 0 .447-.894c-.351-.176-.928-.267-1.537-.203c-.96.1-1.948.934-1.948 2.297c0 1.385 1.054 2.3 2.3 2.3c.58 0 1.1-.272 1.397-.553c.262-.248.303-.577.303-.783v-.964a.5.5 0 0 0-.5-.5h-.807a.5.5 0 1 0 0 1H6v.464a.427.427 0 0 1-.006.071a1.126 1.126 0 0 1-.694.265c-.731 0-1.3-.505-1.3-1.3c0-.818.567-1.252 1.052-1.303ZM9 6.21a.5.5 0 0 0-1 0v3.6a.5.5 0 1 0 1 0v-3.6Zm1.5-.5a.5.5 0 0 0-.5.5v3.6a.5.5 0 0 0 1 0V8.506l1.003-.006a.5.5 0 0 0-.006-1L11 7.506v-.797h1.5a.5.5 0 0 0 0-1h-2ZM3.5 2A2.5 2.5 0 0 0 1 4.5v7A2.5 2.5 0 0 0 3.5 14h9a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 12.5 2h-9ZM2 4.5A1.5 1.5 0 0 1 3.5 3h9A1.5 1.5 0 0 1 14 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 11.5v-7Z' />
    </svg>
  ),
  location: (
    <svg
      className='tweetOptionsIcon'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 32 32'
    >
      <path
        fill='currentColor'
        d='M16 18a5 5 0 1 1 5-5a5.006 5.006 0 0 1-5 5Zm0-8a3 3 0 1 0 3 3a3.003 3.003 0 0 0-3-3Z'
      />
      <path
        fill='currentColor'
        d='m16 30l-8.436-9.949a35.076 35.076 0 0 1-.348-.451A10.889 10.889 0 0 1 5 13a11 11 0 0 1 22 0a10.884 10.884 0 0 1-2.215 6.597l-.001.003s-.3.394-.345.447ZM8.812 18.395c.002 0 .234.308.287.374L16 26.908l6.91-8.15c.044-.055.278-.365.279-.366A8.901 8.901 0 0 0 25 13a9 9 0 1 0-18 0a8.905 8.905 0 0 0 1.813 5.395Z'
      />
    </svg>
  ),
  notify: (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
      <path
        fill='currentColor'
        d='M16 14v3H8v-7c0-2.21 1.79-4 4-4c.85 0 1.64.26 2.28.72l1.43-1.43A5.87 5.87 0 0 0 13.5 4.2v-.7c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.7C7.91 4.86 6 7.21 6 10v7H4v2h16v-2h-2v-3h-2zm-4 8c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zM24 8h-3V5h-2v3h-3v2h3v3h2v-3h3V8z'
      />
    </svg>
  ),
};

export default optionIcons;
