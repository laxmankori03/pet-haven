import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { useUser } from '../../context/userContext';
import DashboardGreeting from './DashboardGreeting';
import QuickActionGrid from './QuickActionGrid';
import PetsOverview from './PetsOverview';
import UpcomingBooking from './UpcomingBooking';

const UserDashboard = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username,setUserName] = useState("");
  useEffect(() => {
    const verifyUser = async () => {
      if (!cookies.token) {
        navigate("/api/login");
      }
        const { data } = await axios.post(
          "http://localhost:8080/api/auth/verify",
          {},
          { withCredentials: true }
        );
        setUserName(data.user.name)
        return data.status ? toast(`Hello ${data.user.name}`,{
          position:"bottom-left"
        }) : (removeCookie("token"),navigate("/api/login"));
      }

    verifyUser();
  }, [navigate, removeCookie,cookies]);
   const [pets, setPets] = useState([]);

  // Load pets initially
  useEffect(() => {
    const getAllPets = async () => {
      try {
        const { data } = await axios.get("http://localhost:8080/api/pets", {
          withCredentials: true,
        });
        if (data.success) {
          setPets(data.pets);
        }
      } catch (err) {
        console.error("Failed to fetch pets", err.message);
      }
    };
    getAllPets();
  }, []);
  return (
    <>
        <DashboardGreeting userName={username}/>
        <QuickActionGrid setPets={setPets}/>
        <PetsOverview pets={pets}/>
        <UpcomingBooking/>
        <ToastContainer/>
    </>
  )
}

export default UserDashboard
