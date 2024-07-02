module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: ['important'],
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        h2: ['Roboto', 'sans-serif'],
      },
      borderRadius: {
        xl: '20px',
      },
    },
    screens: {
      mq1300: { raw: 'screen and (max-width: 1300px)' },
      mq1250: { raw: 'screen and (max-width: 1250px)' },
      mq1225: { raw: 'screen and (max-width: 1225px)' },
      lg: { max: '1200px' },
      mq1150: { raw: 'screen and (max-width: 1150px)' },
      mq1125: { raw: 'screen and (max-width: 1125px)' },
      mq1100: { raw: 'screen and (max-width: 1100px)' },
      mq1050: { raw: 'screen and (max-width: 1050px)' },
      mq800: { raw: 'screen and (max-width: 800px)' },
      mq750: { raw: 'screen and (max-width: 750px)' },
      mq520: {raw : 'screen and (max-width: 520px)'},
      mq450: { raw: 'screen and (max-width: 450px)' },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('important', ({ container }) => {
        container.walkRules(rule => {
          rule.selector = `.\\!${rule.selector.slice(1)}`;
          rule.walkDecls(decl => {
            decl.important = true;
          });
        });
      });
    }
  ],
};
