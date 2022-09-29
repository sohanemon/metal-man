const Footer = () => {
  return (
    <div className='p-10 bg-[#18182F] grid grid-cols-2 text-[#BABAEE] text-sm'>
      <div>
        <svg
          class='w-10 fill-current'
          viewBox='0 0 207 328'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M14 164V107.5H97V196.5L69.5 169V134.5H41V151.5L97 207V326.5L14 219.5V174.5L42 201.5V210L69.5 245.5V219.5L14 164Z'
            stroke='black'
          />
          <path
            d='M110 326.5V107.5H193V156H166V134.5H165H137.5V171H193V199H137.5V245.5L147.5 232H183L110 326.5Z'
            stroke='black'
          />
          <path
            d='M170 94H37.5H37L36 92L35 89.5L33 85.5L30.5 81L27 75L23.5 69.5L20.5 65.5L17 61.5L13.5 57.5L11.5 55.5L10.5 54.5L10 54H9.5H7.5H6L4.5 53.5L3 52.5L1.5 51L1 49L1.5 47L2.5 45.5L3.5 44.5L5 43.5L7 43H8.5L10.5 43.5L12 44.5L13.5 46.5L14 48.5V50.5L13.5 51.5L12.5 52.5L11.6467 53.1467L12 53.5L15 56.5L20.5 61.5L25 65.5L30 69L34.5 71L38 71.5L41.5 70.5L44 69L46.5 66.5L48 64.5L48.5 62V51V48.5L48 45L47 40.5L46 35.5L45.5 33.5L45 32L44.5 31H44H41.5L39 30L37 29L35.5 27.5L34.5 25.5V22.5L36 20L38 18.5L40.5 17.5H43.5L46.5 18.5L48.5 20.5L50 22L50.5 24.5L50 26.5L49 28.5L46.5 30V32L48 35L51 39L55.5 45.5L59.5 51L64 55.5L68 59L72.5 61.5L77.5 62L82 61.5L85 60.5L88.5 57L92.5 52.5L94.5 48L96.5 42.5L98.5 36.5L100.5 31.5L101.5 26L102 22.5L102.5 19.5V17L100.5 16L98 14.5L96.5 13.5L95.5 11.5L94.5 9L95.5 6L97 4L98 2.5L100 2L102.5 1H104.5L107 1.5L109 3L111.5 5L113 7L112.5 11L111 13.5L109 16L105.5 17V22.5L107.5 29L109.5 35.5L111.5 43.5L114.5 49.5L117.5 55L121.5 59.5L125 62H128H130.5L133 60.5L138 58L141 55.5L144.5 53L147.5 50L151 47L155.5 41.5L159 37L161.5 31L160.5 30L159 28L157 26V22.5L158 20.5L160.5 18.5L164 17L167.5 17.5L170 19L171.5 20.5L173 23V26L171.5 28.5L169.5 30.5L166.5 31.5H163L162 35L161 39.5L160 43.5L158.5 50.5V55.5L159 60.5L160 64L162 66.5L164 69L168 71H172L175 70L178.5 68L185.5 63L195.5 53L193.5 50.5V48L194.5 45.5L196 44.5L198.5 43L201.5 43.5L204 45L205.5 47.5L206 50L204.5 53L201.5 54.5H198.5L197 54L184 69.5L181.5 73L170 94Z'
            stroke='black'
          />
        </svg>
        <p class='font-semibold'>
          SohanEmon
          <br />
          Baby Web Developer
        </p>
      </div>
      <div>
        <span class='footer-title'>Social</span>
        <div class='flex mt-4 gap-4'>
          <a class='cursor-pointer' href='https://twitter.com/sohanemon'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              class='fill-current'
            >
              <path d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z'></path>
            </svg>
          </a>
          <a
            class='cursor-pointer'
            href='https://youtube.com/sohanurrahmanemon'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              class='fill-current'
            >
              <path d='M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z'></path>
            </svg>
          </a>
          <a class='cursor-pointer' href='https://facebook.com/m.sohanemon'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              class='fill-current'
            >
              <path d='M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z'></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
