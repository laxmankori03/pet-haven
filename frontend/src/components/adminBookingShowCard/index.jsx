import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Chip,
  Stack,
  Divider,
  Avatar,
  Button
} from "@mui/material";
import dayjs from "dayjs";
import { useDispatch } from "react-redux";
import { getAdminBookings, updateBookingStatus } from "@/config/redux/action/bookingAction";

export default function BookingCard({ booking }) {

  const dispatch = useDispatch();

  const pet = booking.pet || {};
  const owner = booking.owner || {};

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        borderRadius: 2,
        boxShadow: 3,
        p: 1,
      }}
      style={{backgroundColor:"#2A2F4F",color:"#fff",marginBottom:"2rem"}}
    >
      <CardContent>
        {/* Owner Info */}
        <Typography variant="h6" gutterBottom>
          Owner Details
        </Typography>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Avatar sx={{ bgcolor: "primary.main" }}>
            {owner?.name?.charAt(0) || "O"}
          </Avatar>
          <div>
            <Typography variant="subtitle1">{owner?.name || "Unknown"}</Typography>
            <Typography variant="body2">
              {owner?.email || "N/A"}
            </Typography>
          </div>
        </Stack>

        <Divider sx={{ my: 2 }} />

        {/* Pet Info */}
        <Typography variant="h6" gutterBottom>
          Pet Details
        </Typography>
        {pet?.image && (
          <Avatar
            src={pet.image}
            alt={pet.name}
            sx={{ width: 64, height: 64, mb: 1 }}
          />
        )}
        <Typography variant="subtitle1">Name: {pet?.name || "N/A"}</Typography>
        <Typography variant="body2">
          Breed: {pet?.breed || "Unknown"}
        </Typography>
        <Typography variant="body2">Type: {pet?.type || "Unknown"}</Typography>
        <Typography variant="body2">Age: {pet?.age || "N/A"} years</Typography>

        <Divider sx={{ my: 2 }} />

        {/* Dates */}
        <Typography variant="body2">
          Check-in:{" "}
          {booking.checkInDate
            ? dayjs(booking.checkInDate).format("DD MMM YYYY")
            : "N/A"}
        </Typography>
        <Typography variant="body2">
          Check-out:{" "}
          {booking.checkOutDate
            ? dayjs(booking.checkOutDate).format("DD MMM YYYY")
            : "N/A"}
        </Typography>

        {/* Services */}
        <Stack direction="row" spacing={1} sx={{ mt: 2, flexWrap: "wrap" }}>
          {Array.isArray(booking.services) &&
            booking.services.map((service, idx) => (
              <Chip key={idx} label={service} color="primary" size="small" />
            ))}
        </Stack>

        {/* Status */}
        <Chip
          label={booking.status || "Pending"}
          color={
            booking.status === "Confirmed"
              ? "success"
              : booking.status === "Rejected"
              ? "error"
              : "warning"
          }
          sx={{ mt: 2 }}
        />

        {/* Action Buttons */}
        <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
          <Button
            variant="contained"
            color="success"
            size="small"
            onClick={() => {
              dispatch(updateBookingStatus({bookingId:booking._id,status:"Confirmed"}))
              .unwrap()
              .then(()=>{
                dispatch(getAdminBookings());
              })
          }}
            disabled={booking.status === "Confirmed"}
          >
            Confirm
          </Button>
          <Button
            variant="contained"
            color="error"
            size="small"
            onClick={() => {
              dispatch(updateBookingStatus({bookingId:booking._id,status:"Rejected"}))
              .unwrap()
              .then(()=>{
                dispatch(getAdminBookings());
              })
          }}
            disabled={booking.status === "Rejected"}
          >
            Reject
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}
