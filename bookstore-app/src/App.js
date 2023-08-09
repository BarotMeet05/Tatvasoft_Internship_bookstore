import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import HomePage from "./components/HomePage";
import BooksList from "./components/BooksList";
import Form1 from "./components/Form1";
import PageNotFound from "./components/PageNotFound";
import  GlobalStyles  from "./style/GlobalStyles";
import { createTheme, ThemeProvider } from "@mui/material";
import {ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const theme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            backgroundColor: "green"
          }
        }
      }
    }
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
        {/* <ToastContainer/> */}
          <div className="navbar" style={{ ...GlobalStyles.navbar }}>
            {/* style={{ ...GlobalStyles.navbar }} */}
            <NavLink to="/"> Home </NavLink>

            <NavLink to="/books"> Books </NavLink>
            <NavLink to="/form"> Form </NavLink>
          </div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/books" element={<BooksList />} />
            <Route path="/form" element={<Form1 />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
        {/* for image insertion */}
        {/* <img
        src={
          "https://tse3.mm.bing.net/th?id=OIP.dJTqBQy3mMnMdI8klN_kHAHaGT&pid=Api&P=0&h=180"
        }
        alt="oops..."
      ></img> */}
             <ToastContainer/>
      </ThemeProvider>
    </div>
  );
}
