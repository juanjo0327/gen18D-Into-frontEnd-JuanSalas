// import React, {useState}  from 'react';



// const Card = ({peliculas}) => {

//   let backdrop_path = peliculas.backdrop_path;
//   let imgMovie = `https://image.tmdb.org/t/p/w500${backdrop_path}`;



//   console.log(peliculas)
//   return (
//     <> 
//         <div className="card">
//             <div>
//               <p>{peliculas.id}</p>
//               <p>{peliculas.title}</p>
//               <img src={imgMovie} width="200px"></img>
//             </div>
//         </div>
        
//     </>
//   )
// }



// export default Card

import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import '../estilosInicio.css';

export default function MediaControlCard(peliculas) {
  const theme = useTheme();
  let backdrop_path = peliculas.peliculas.backdrop_path;
  let imgMovie = `https://image.tmdb.org/t/p/w500${backdrop_path}`;
  console.log(peliculas.peliculas);

  return (
    <Card className="CardStyle" sx={{ display: 'flex'}}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {peliculas.peliculas.id}
          </Typography>
          <Typography variant="subtitle1" color="text.primary" component="div">
          {peliculas.peliculas.title}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          {/* <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton> */}
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 100, height: 100}}
        image={imgMovie}
      />
    </Card>
  );
}