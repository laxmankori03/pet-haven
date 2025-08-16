const { configureStore } = require("@reduxjs/toolkit");
import authReducer from "../redux/reducer/authReducer/index.js";
import hotelReducer from '../redux/reducer/hotelReducer/index.js'
import petReducer from '../redux/reducer/petReducer/index.js'
import bookingReducer from '../redux/reducer/bookingReducer/index.js'


const store = configureStore({
    reducer:{
        auth: authReducer,
        hotel: hotelReducer,
        pet: petReducer,
        booking: bookingReducer,
    }
})

export default store;