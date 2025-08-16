import Navbar from "@/components/Navbar";
import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../config/redux/store.js";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }) {
  return( 
  <Provider store={store}>
  <Navbar/>
  <Component {...pageProps} />
  <ToastContainer position="top-right" autoClose={3000} pauseOnHover draggable theme="dark"/>
  </Provider>
  );
}
