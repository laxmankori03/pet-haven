import React from 'react'
import { Card, CardContent, Typography, Avatar, Box, Rating } from '@mui/material';
const CustomerReviewsCard = ({name, comment, date, rating}) => {
   
  return (
    <>
 <Card sx={{ maxWidth: 400, m: 2, boxShadow: 3 }} style={{backgroundColor:"#2A2F4F",color:"#fff"}}>
      <CardContent>
        <Box display="flex" alignItems="center" gap={2} mb={1}>
          {/* <Avatar alt={name} src={image} /> */}
          <Box>
            <Typography variant="subtitle1" fontWeight={600}>
              {name}
            </Typography>
            <Typography variant="caption" style={{color:"var(--text)"}}>
              {new Date(date).toLocaleDateString()}
            </Typography>
          </Box>
        </Box>
        <Rating value={rating} precision={0.5} readOnly />
        <Typography variant="body2" mt={1}>
          {comment}
        </Typography>
      </CardContent>
    </Card>
    </>
  )
}

export default CustomerReviewsCard
