/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      
      backgroundImage: theme => ({
        'banner-background':"url('/src/Assets/images/bannerBackground.png')",
        'banner-background-mobile' : "url('/src/Assets/images/solwyz mobile banner image.png')",
        'banner-background-2': "url('/src/Assets/images/backgroundImage2.png')",
        'service-background' : "url('/src/Assets/images/ServiceBackground.jpg')",
        'service-background-mobile' : "url('/src/Assets/images/ServiceBackgroundMobile.png')",
        'BackDrop': "url('/src/Assets/images/backgrnd.png')",
        'Footer_BackDrop': "url('/src/Assets/images/background services.png')",

        'Career-Details-Banner':"url('/src/Assets/images/Join us.png')",

        'career-cover': "url('/src/Assets/images/CareerCoverImg.jpg')"

      }),

      colors: {
        'banner-buttonBackground': '#03434F',
        'contact-formBackground': '#EFEFEF',
        'gray-textColor': '#AEAEAE'
      },

      fontWeight: {
        'extra-thin': '50',
      },
      
      fontFamily: { 
        urbanist: ['Urbanist', 'sans-serif'], 
      }  
    },
  },
  plugins: [],
}

