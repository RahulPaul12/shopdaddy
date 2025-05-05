/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    screens: {
      'small': '521px',
      'sm':'640px',
      'md':'768px',
      'mid':'700px',
      'lg':'1024px'
    },
    zIndex: {
      "60": "60",
      "70": "70",
      "80": "80",
  },
    extend: {
      fontFamily:{
        "client": ["var(--client-font)"]
      },
      colors:{
        "primary" : "var(--primary)",
        "primary-light" : "var(--primary-light)",
        "warning" : "var(--warning)",
        "positive":"var(--positive)",
        "light":"var(--light)",
        "light-white":"var(--light-white)",
        "light-dark":"var(--light-dark)",
        "highlight-red":"var(--highlight-red)",
        "negative-red":"var(--negative-red)",
        "heartfavourite":"var(--favourite)",
        "positive-light":"var(--positive-light)",
        "drawer-bg":"rgba(83, 83, 83, 0.40)",
        "modal-bg":"rgba(83, 83, 83, 0.40)"
      },
      backgroundImage:{
        'hero-pattern': "url('./images/hero/banner1.png')",
        'dashboard':"url('/images/dashboard/dashboard-bg.png')",
        'login':"url('/images/login/hero.png')",
        'forgot':"url('/images/login/forget_password.png')"
      },
      boxShadow:{
        header:"0px 6px 32px 0px rgba(0, 0, 0, 0.04);",
        favourite: "0px 4px 16px rgba(126, 133, 142, 0.16)",
        buttonprimary:'0px 6px 16px 0px rgba(52, 90, 254, 0.24)',
        cookieShadow :'0px 4px 40px 0px rgba(23, 31, 70, 0.16)'
      },
      dropShadow:{
       'blue':'0px 6px 10px rgba(64, 100, 255, 0.34)',
       'menu':'0px 4px 32px rgba(0, 0, 0, 0.06)'
      }
     
    },
  },
  plugins: [],
}





