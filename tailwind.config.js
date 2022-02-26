module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0045FF',
        white: '#FFFFFF',
        gray: '#EAEAED',
        background: '#F7F8F9',
        'background-annotation': 'rgba(155, 159, 202, 0.07);',
        'button-hover': '#0031BA',
        'text-main': '#2D2D2D',
        'text-annotation': '#575F6E',
      },
      borderWidth: {
        DEFAULT: '1px',
        0: '0',
        2: '2px',
        3: '3px',
        4: '4px',
        6: '6px',
      },
      borderRadius: {
        large: '2.5rem',
      },
      fontFamily: {
        DEFAULT: ['DM Sans'],
        sans: ['DM Sans'],
      },
      textColor: {
        DEFAULT: '#2D2D2D',
      },
      width: {
        128: '32rem',
        160: '40rem',
        192: '48rem',
      },
      maxWidth: {
        sp: '90%',
      },
    },
  },
  plugins: [],
};
