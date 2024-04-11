module.exports = {
  content: ["./templates/**/*.{html,js,ts,tsx}", "./static/**/*.{html,js,ts,tsx}"],
  corePlugins: {
    preflight: false,
  },
  // prefix: "twind-",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        "display-3xl": [
          "5.75rem",
          {
            fontWeight: "400",
            letterSpacing: "0px",
          },
        ],
        "display-3xl-tablet": [
          "5rem",
          {
            fontWeight: "400",
            letterSpacing: "0px",
          },
        ],
        "display-3xl-mobile": [
          "3.5rem",
          {
            fontWeight: "400",
            letterSpacing: "0px",
          },
        ],
        "display-2xl": [
          "4.5rem",
          {
            fontWeight: "400",
            letterSpacing: "0px",
          },
        ],
        "display-2xl-tablet": [
          "4rem",
          {
            fontWeight: "400",
            letterSpacing: "0px",
          },
        ],
        "display-2xl-mobile": [
          "3rem",
          {
            fontWeight: "400",
            letterSpacing: "0px",
          },
        ],
        "display-xl": [
          "3rem",
          {
            fontWeight: "400",
            letterSpacing: "0px",
          },
        ],
        "display-xl-tablet": [
          "3.37rem",
          {
            fontWeight: "400",
            letterSpacing: "0px",
          },
        ],
        "display-xl-mobile": [
          "2.625rem",
          {
            fontWeight: "400",
            letterSpacing: "0px",
          },
        ],
        "display-lg": [
          "3rem",
          {
            fontWeight: "400",
            letterSpacing: "0px",
          },
        ],
        "display-lg-tablet": [
          "2.5rem",
          {
            fontWeight: "400",
            letterSpacing: "0px",
          },
        ],
        "display-lg-mobile": [
          "2rem",
          {
            fontWeight: "400",
            letterSpacing: "0px",
          },
        ],
        "display-md": [
          "2.25rem",
          {
            fontWeight: "400",
            letterSpacing: "0px",
          },
        ],
        "display-md-tablet": [
          "2rem",
          {
            fontWeight: "400",
            letterSpacing: "0px",
          },
        ],
        "display-md-mobile": [
          "1.75rem",
          {
            fontWeight: "400",
            letterSpacing: "0px",
          },
        ],
        "display-sm": [
          "1.87rem",
          {
            fontWeight: "400",
            letterSpacing: "0px",
          },
        ],
        "display-sm-tablet": [
          "1.87rem",
          {
            fontWeight: "400",
            letterSpacing: "0px",
          },
        ],
        "display-sm-mobile": [
          "1.5rem",
          {
            fontWeight: "400",
            letterSpacing: "0px",
          },
        ],
        "display-xs": [
          "1.5rem",
          {
            fontWeight: "400",
            letterSpacing: "0px",
          },
        ],
        "display-xs-tablet": [
          "1.5rem",
          {
            fontWeight: "400",
            letterSpacing: "0px",
          },
        ],
        "display-xs-mobile": [
          "1.25rem",
          {
            fontWeight: "400",
            letterSpacing: "0px",
          },
        ],
        "body-xl": [
          "1.25rem",
          {
            fontWeight: "400",
            letterSpacing: "0px",
          },
        ],
        "body-lg": [
          "1.125rem",
          {
            fontWeight: "400",
            letterSpacing: "0px",
          },
        ],
        "body-md": [
          "1rem",
          {
            fontWeight: "400",
            letterSpacing: "0px",
          },
        ],
        "body-sm": [
          "0.875rem",
          {
            fontWeight: "400",
            letterSpacing: "0px",
          },
        ],
        "body-xs": [
          "0.75rem",
          {
            fontWeight: "400",
            letterSpacing: "0px",
          },
        ],
        "body-2xs": [
          "0.75rem",
          {
            fontWeight: "400",
            letterSpacing: "0px",
          },
        ],
        "overline-md": [
          "0.875rem",
          {
            fontWeight: "400",
            letterSpacing: "0px",
          },
        ],
        "overline-sm": [
          "0.75rem",
          {
            fontWeight: "400",
            letterSpacing: "0px",
          },
        ],
      },
      colors: {
        gray: {
          25: "#f3f6f8",
          50: "#e1e8ec",
          100: "#c7d3da",
          200: "#a0b3c0",
          300: "#728c9e",
          400: "#577183",
          500: "#4b5e6f",
          600: "#3e4c59",
          700: "#3b454f",
          800: "#343b45",
          900: "#1f252d",
        },
        primary: {
          25: "#faffe6",
          50: "#f4fec9",
          100: "#e8fd99",
          200: "#d5f85e",
          300: "#c0ed2e",
          400: "#a2d40e",
          500: "#7da907",
          600: "#5f810a",
          700: "#405611",
          800: "#405611",
          900: "#203003",
        },
        secondary: {
          25: "#edefff",
          50: "#dde3ff",
          100: "#c3c9ff",
          200: "#9ea5ff",
          300: "#7877ff",
          400: "#6457fd",
          500: "#5639f2",
          600: "#4a2cd6",
          700: "#3c27ac",
          800: "#352788",
          900: "#21174f",
        },
        "tertiary-1": {
          25: "#fff7ed",
          50: "#ffeed5",
          100: "#ffd9a9",
          200: "#febe73",
          300: "#fd9332",
          400: "#fb7914",
          500: "#ec5d0a",
          600: "#c4450a",
          700: "#9b3711",
          800: "#7d2f11",
          900: "#441606",
        },
        "tertiary-2": {
          25: "#effefa",
          50: "#c8ffee",
          100: "#91fee0",
          200: "#51f7cf",
          300: "#1ad1ab",
          400: "#05c7a2",
          500: "#01a085",
          600: "#067f6c",
          700: "#0a6558",
          800: "#0e5349",
          900: "#00332e",
        },
        background: {
          25: "#edfcfe",
          50: "#d0f6fd",
          100: "#a8ecf9",
          200: "#6bdcf5",
          300: "#28c3e8",
          400: "#0ca6ce",
          500: "#0d84ad",
          600: "#126a8c",
          700: "#185772",
          800: "#184861",
          900: "#092b3d",
        },
        error: {
          25: "#FFF5F7",
          50: "#FFEEF0",
          100: "#FFDFE3",
          200: "#FFC9D0",
          300: "#FFA4AF",
          400: "#FF7F8E",
          500: "#FF6B76",
          600: "#F84A5F",
          700: "#DD4154",
          800: "#BB2C3D",
          900: "#991B2A",
        },
        warning: {
          25: "#FFFCF5",
          50: "#FFFAEB",
          100: "#FEF0C7",
          200: "#FEDF89",
          300: "#FEC84B",
          400: "#FDB022",
          500: "#F79009",
          600: "#DC6803",
          700: "#B54708",
          800: "#93370D",
          900: "#7A2E0E",
        },
        success: {
          25: "#F6FEF9",
          50: "#ECFDF3",
          100: "#D1FADF",
          200: "#A6F4C5",
          300: "#76E89A",
          400: "#60CB82",
          500: "#4CAE6B",
          600: "#3B9156",
          700: "#2B7442",
          800: "#1D562F",
          900: "#03462B",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
