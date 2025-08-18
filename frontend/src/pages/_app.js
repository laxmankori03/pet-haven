import Navbar from "@/components/Navbar";
import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../config/redux/store.js";
import { ToastContainer } from "react-toastify";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return( 
  <Provider store={store}>
  <Navbar/>
  <Component {...pageProps} />
  <ToastContainer position="top-right" autoClose={3000} pauseOnHover draggable theme="dark"/>
  </Provider>
  );
}
