import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const BookingCard = ({petName,roomNumber,checkIn,checkOut}) => {
  return (
      <Card sx={{ width: 300 }} style={{backgroundColor:"var(--card-bg)"}} className='p-3 rounded'>
    {/* <CardMedia sx={{ height: 250 } }  image={imgUrl} 
        title="24/7 care"/> */}
        <CardContent>
            <Typography variant="h6" component="div" className='fw-bold' style={{color:"var(--text)"}}>
            Name :- {petName}
            </Typography>
             <Typography variant="body2" sx={{ color: 'text.secondary' }} style={{color:"var(--text)"}}>
         Room No. :- {roomNumber}
          </Typography>
             <Typography variant="body2" sx={{ color: 'text.secondary' }} style={{color:"var(--text)"}}>
         Check-In :- {checkIn}
          </Typography>
             <Typography variant="body2" sx={{ color: 'text.secondary' }} style={{color:"var(--text)"}}>
         Check-Out :- {checkOut}
          </Typography>
        </CardContent>
    </Card>
  )
}

export default BookingCard
