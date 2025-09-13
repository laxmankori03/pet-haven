import { registerUser, verifySignupOtp } from "@/config/redux/action/authAction";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const Singup = () => {
  const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [role, setRole] = React.useState("user");
  const [otp, setOtp] = useState("");
const [step, setStep] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(registerUser({ name, email, phone: phoneNumber, password, role }));
    // if (authState.error) {
    //   toast.error(authState.error);
    // } else {
      //   toast.success(authState.message);
      //   setStep(2)
      // }
      
      if (authState.success) {
        toast.success(authState.message);
        setStep(2)
      }else{
        toast.error(authState.error);
      }
    };
    console.log(authState);
    
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    dispatch(verifySignupOtp({email,otp}));
    // if (authState.error) {
    //   toast.error(authState.error);
    // } else {
      //   toast.success(authState.message || "Registration successful");
      //   router.push("/login");
      // }
      if (authState.success) {
        toast.success(authState.message || "Registration successful");
        router.push("/login");
      }else{
          toast.error(authState.error);
      }
  }

  return (
    <div
      class="container d-flex justify-content-center align-items-center text-light"
      style={{ height: "90vh" }}
    >
      {step === 1 ?(
        <form
        class="bg-darkcard p-4 rounded shadow"
        style={{ width: "100%", maxWidth: "450px" }}
        onSubmit={handleSubmit}
      >
        <h2 class="mb-4 text-center" style={{ color: "#4DD0E1" }}>
          Register for Pet Haven 🐾
        </h2>

        <div class="mb-3">
          <label class="form-label">Full Name</label>
          <input
            type="text"
            class="form-control"
            placeholder="John Doe"
            required
            name="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>

        <div class="mb-3">
          <label class="form-label">Email address</label>
          <input
            type="email"
            class="form-control"
            placeholder="name@example.com"
            required
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
        </div>

        <div class="mb-3">
          <label class="form-label">Phone Number</label>
          <input
            type="tel"
            class="form-control"
            placeholder="9876543210"
            required
            name="phoneNumber"
            onChange={(e) => setPhoneNumber(e.target.value)}
            value={phoneNumber}
          />
        </div>

        <div class="mb-3">
          <label class="form-label">Password</label>
          <input
            type="password"
            class="form-control"
            placeholder="********"
            required
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <label class="form-label">Role</label>
        <select
          class="form-select mb-3"
          aria-label="Default select example"
          name="role"
          onChange={(e) => setRole(e.target.value)}
          value={role}
        >
          <option value="user" selected>
            User
          </option>
          <option value="admin">Admin</option>
        </select>
        {authState.loading ? (
          <button class="btn btn-primary w-100 mt-2" type="button" disabled>
            <span
              class="spinner-border spinner-border-sm me-1"
              role="status"
              aria-hidden="true"
            ></span>
            Loading...
          </button>
        ) : (
          <button type="submit" class="btn btn-primary w-100 mt-2">
            Create Account
          </button>
        )}
        <p class="text-center mt-3 text-white">
          Already have an account? <Link href="/login">Login</Link>
        </p>
      </form>
      ):(
<form
        class="bg-darkcard p-4 rounded shadow"
        style={{ width: "100%", maxWidth: "450px" }}
        onSubmit={handleVerifyOtp}
      >
        <h2 class="mb-4 text-center" style={{ color: "#4DD0E1" }}>
          Verify your Pet Haven account 🐾
        </h2>

        <div class="mb-3">
          <label class="form-label">OTP</label>
          <input
            type="text"
            class="form-control"
            placeholder="XXXXX"
            required
            name="otp"
            onChange={(e) => setOtp(e.target.value)}
            value={otp}
          />
        </div>
        {authState.loading ? (
          <button class="btn btn-primary w-100 mt-2" type="button" disabled>
            <span
              class="spinner-border spinner-border-sm me-1"
              role="status"
              aria-hidden="true"
            ></span>
            Loading...
          </button>
        ) : (
          <button type="submit" class="btn btn-primary w-100 mt-2">
            Verify Account
          </button>
        )}
      </form>
      )
      }
    </div>
  );
};

export default Singup;
