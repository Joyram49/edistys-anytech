/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        border: {
          lightBlue: "var(--border-light-blue)", // rgb(233, 243, 255)
          default: "var(--border-default)", // rgb(229, 231, 235)
          highlight: "var(--border-highlight)", // rgb(185, 217, 255)
          deepBlue: "var(--border-deep-blue)", // rgb(22, 67, 119)
          primaryBlue: "var(--text-primary-blue)",
        },
        text: {
          primaryBlue: "var(--text-primary-blue)", // rgb(31, 128, 240)
          // secondaryBlue: "var(--text-secondary-blue)", // rgb(27, 118, 233)
          darkBlue: "var(--text-dark-blue)", // rgb(11, 48, 91)
          secondaryBlue: "var(--text-secondary-blue)", // rgb(22, 67, 119)
          deepBlack: "var(--text-deep-black)", // rgb(21, 29, 47)
          topFooterHoverBlue: "var(--text-footer-top-hover)", // rgb(11, 48, 91)
          footerHover: "var(--text-footer-hover)", // rgb(185, 217, 255)
        },
        background: {
          orange: "var(--bg-orange)", // rgb(254, 139, 83)
          cardBlue: "var(--bg-card-blue)", // rgb(22, 67, 119)
          tabBlue: "var(--bg-tab-blue)",
          footerTop: "var(--bg-footer-top)", // rgb(21, 29, 47)
          footerBottom: "var(--bg-footer-bottom)", // rgb(0, 21, 45)
          primaryBlue: "var(--text-primary-blue)",
        },
      },
      fontFamily: {
        inter: "var(--font-inter)",
        montserrat: "var(--font-montserrat)",
      },
      spacing: {
        sm: "24px",
        xs: "16px",
        lg: "32px",
      },
      margin: {
        md: "32px",
        lg: "64px",
        xl: "128px",
      },
      padding: {
        md: "32px",
      },
    },
  },
  plugins: [],
};

export default tailwindConfig;
