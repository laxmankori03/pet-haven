import React from "react";
import { Box, Typography } from '@mui/material';
import CustomerReviewsCard from "./CustumerReviewCard";

const CustomerReviews = () => {
     const customerReviews = [
  {
    id: 1,
    name: "Riya Sharma",
    rating: 5,
    comment: "Absolutely loved the service! My dog was so happy and well cared for.",
    date: "2025-06-15",
    image: "/images/users/riya.jpg"
  },
  {
    id: 2,
    name: "Aman Verma",
    rating: 4,
    comment: "Clean facility and friendly staff. Will definitely come back.",
    date: "2025-06-20",
    image: "/images/users/aman.jpg"
  },
  {
    id: 3,
    name: "Sneha Kapoor",
    rating: 5,
    comment: "Best pet hotel experience ever! They even gave me daily updates with photos.",
    date: "2025-07-01",
    image: "/images/users/sneha.jpg"
  },
  {
    id: 4,
    name: "Rahul Jain",
    rating: 3,
    comment: "Overall good, but pickup timing was a bit delayed.",
    date: "2025-06-28",
    image: "/images/users/rahul.jpg"
  },
  {
    id: 5,
    name: "Neha Mehta",
    rating: 5,
    comment: "My cat was treated like royalty. Highly recommended!",
    date: "2025-07-08",
    image: "/images/users/neha.jpg"
  }
];

  return (
    <div className="conatainer vh-100 d-flex flex-column justify-content-center align-items-center">
      <h1
        style={{ color: "var(--text)", fontSize: "3rem" }}
        className="text-center my-5 fw-bold"
      >
        Customer Reviews
      </h1>
       <Box sx={{ p: 3 }} display="flex" flexWrap="wrap" justifyContent="center">
        {customerReviews.map((el)=>{
            return <CustomerReviewsCard name={el.name} rating={el.rating} comment={el.comment} date={el.date} key={el.id}/>
        })}
      </Box>
    </div>
  );
};

export default CustomerReviews;

