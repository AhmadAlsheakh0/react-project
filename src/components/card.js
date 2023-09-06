import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './card.css';

const MediaCard = (props) => {
  return (
    <>
    <div className='cardContainer'>
    {props.details.map((value)=>(
        <div className='card-info'>
            <Card>
                <CardMedia
                    sx={{ height: 250}}
                    image={value.url}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div" sx={{fontFamily: "Montserrat", fontSize: 14}}>
                         {value.title}
                    </Typography>
                </CardContent>
            </Card>
        </div>
       )
       )};
       </div>
    </>
  );
}

export default MediaCard;