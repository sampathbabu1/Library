import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import BookDetail from "./components/BookDetail/BookDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lower from "./components/Lower/Lower";
import { Container } from "@mui/material";
export const theme = createTheme({
  palette: {
    primary: { main: "#2ce080" },
    secondary: {
      main: "#042330",
    },
    custom: {
      main: "#20ba68",
    },
    grey: {
      main: "#6D787E",
    },
    action: {
      hover: "#ffffff",
    },
  },

  typography: {
    fontFamily: "Cera Pro",
    button: {
      textTransform: "none",
    },
  },
  // components: {
  //   MuiCssBaseline: {
  //     styleOverrides: [
  //       `
  //       @font-face {
  //         font-family: 'CeraPro';
  //         font-style: normal;
  //         font-display: swap;
  //         font-weight: 400;
  //         src: local('CeraPro'), local('CeraPro-Regular'), url(${CeraProBold}) format('ttf');
  //         unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
  //       }
  //     `,
  //       `
  //       @font-face {
  //         font-family: 'CeraProBold';
  //         font-style: bold;
  //         font-display: swap;
  //         font-weight: 600;
  //         src: local('CeraProBold'), local('CeraProBold-Regular'), url(${CeraProBold}) format('ttf');
  //         unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
  //       }
  //     `,
  //     ],
  //   },
  // },
});

// ReactDOM.render(
//   <React.StrictMode>
//     <ThemeProvider theme={theme}>
//       <>
//         <Nav />
//         <Footer />
//       </>
//     </ThemeProvider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );
ReactDOM.render(
  <Container>
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* < Nav /> */}
              <Home />
              <Footer />
            </>
          }
        ></Route>
        <Route
          path=":id"
          element={
            <>
              <BookDetail />
              <Footer />
            </>
          }
        ></Route>
        <Route path="/mylibrary" element={<><Lower ></Lower><Footer /></>} ></Route>
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
  </Container>,
  document.getElementById("root")
);
reportWebVitals();
