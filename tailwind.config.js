export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: "20px",
      center: true
    },
    screens: {
			xl: { max: "1279px" },
			lg: { max: "1023px" },
      kpx: {max:"1000px"},
			md: { max: "767px" },
			sm: { max: "639px" },
      hab: {max: "545px"},
      nvs: {max: "500px"},
      mins: {max: "350px"}
		},
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Exo 2', 'sans-serif'],
    },
    extend: {
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [],
}