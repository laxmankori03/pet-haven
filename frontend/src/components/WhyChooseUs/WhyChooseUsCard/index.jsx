import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const WhyChooseUsCard = ({imgUrl,title,description}) => {
  return (
     <Card sx={{ width: 300 }} className='p-3 rounded text-white' style={{backgroundColor:"#2A2F4F"}}>
    <CardMedia sx={{ height: 250 }}  image={imgUrl} 
        title="24/7 care"/>
        <CardContent>
            <Typography variant="h6" component="div" className='fw-bold' style={{color:"var(--text)"}}>
                {title}
            </Typography>
             <Typography variant="body2" sx={{ color: 'text.secondary' }} style={{color:"var(--text)"}}>
         {description}
          </Typography>
        </CardContent>
    </Card>
  )
}

export default WhyChooseUsCard
