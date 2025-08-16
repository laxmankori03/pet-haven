
import React from "react";
import { Card, CardContent, CardMedia, Typography, Chip, Stack } from "@mui/material";
import dayjs from "dayjs";

export default function BookingCard({ booking }) {
  const hotel = booking.hotel || {};
  const pet = booking.pet || {};

const checkIn = dayjs(booking?.checkInDate);
const checkOut = dayjs(booking?.checkOutDate);

// Difference in days
const totalDays = checkOut.diff(checkIn, "day");

//Total Price
const totalPrice = totalDays * hotel?.price;

  return (
    <Card sx={{ display: "flex", flexDirection: "column", maxWidth: 400, boxShadow: 3, borderRadius: 2 }} style={{backgroundColor:"#2A2F4F",color:"#fff"}}>
      {/* Hotel Image */}
      {hotel?.image && (
        <CardMedia
          component="img"
          height="180"
          image={hotel.image}
          alt={hotel.name || "Hotel"}
        />
      )}

      <CardContent>
        {/* Hotel Info */}
        <Typography variant="h6" gutterBottom>
          {hotel?.name || "Hotel Name"}
        </Typography>
        <Typography variant="body2">
          Location: {hotel?.location || "N/A"}
        </Typography>
        <Typography variant="body2">
          Price Per Day: ₹{hotel?.price ?? "N/A"}
        </Typography>
        <Typography variant="body2">
          Pet Stay: {totalDays ?? "N/A"} {totalDays>1?"Days":"Day"}
        </Typography>
        <Typography variant="body2">
          Total Price: ₹{totalPrice ?? "N/A"}
        </Typography>

        {/* Pet Info */}
        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          Pet: {pet?.name || "N/A"} ({pet?.breed || "Unknown Breed"})
        </Typography>
        {pet?.image && (
          <CardMedia
            component="img"
            height="100"
            image={pet.image}
            alt={pet.name || "Pet"}
            sx={{ objectFit: "cover", mt: 1, borderRadius: 1 }}
          />
        )}

        {/* Booking Dates */}
        <Typography variant="body2" sx={{ mt: 2 }}>
          Check-in: {booking.checkInDate ? dayjs(booking.checkInDate).format("DD MMM YYYY") : "N/A"}
        </Typography>
        <Typography variant="body2">
          Check-out: {booking.checkOutDate ? dayjs(booking.checkOutDate).format("DD MMM YYYY") : "N/A"}
        </Typography>

        {/* Services */}
        <Stack direction="row" spacing={1} sx={{ mt: 2, flexWrap: "wrap" }}>
          {Array.isArray(booking.services) &&
            booking.services.map((service, index) => (
              <Chip key={index} label={service} color="primary" size="small" />
            ))}
        </Stack>

        {/* Status */}
        <Chip
          label={booking.status || "Pending"}
          color={booking.status === "Confirmed" ? "success" : "warning"}
          sx={{ mt: 2 }}
        />
      </CardContent>
    </Card>
  );
}
