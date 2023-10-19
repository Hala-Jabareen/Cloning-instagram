import React from 'react'
import Grid from '@mui/material/Grid';
// import Sidebar from './Sidebar';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Sidebar from '../../components/Sidebar/Sidebar';
import Pic1 from './ExplorePics/explorePic1.avif'
import Pic2 from './ExplorePics/explorePic2.avif'
import Pic3 from './ExplorePics/explorePic3.avif'
import Pic4 from './ExplorePics/explorePic4.avif'
import Pic5 from './ExplorePics/explorePic5.avif'
import Pic6 from './ExplorePics/explorePic6.avif'
import Pic7 from './ExplorePics/explorePic7.avif'
import Pic8 from './ExplorePics/explorePic8.avif'
import Pic9 from './ExplorePics/explorePic9.avif'
import Pic10 from './ExplorePics/explorePic10.webp'
import Pic11 from './ExplorePics/explorePic11.webp'
import Pic12 from './ExplorePics/explorePic12.webp'
import Pic13 from './ExplorePics/explorePic13.webp'
import Pic14 from './ExplorePics/explorePic14.webp'
import "./Explore.css"



function Explore() {
  return (
    <div>
       <Grid container spacing={15}>
      <Grid item xs={3}>
        <Sidebar/>
      </Grid>
      <Grid item xs={9}>
         <ImageList sx={{ width:750, height: 1400 }} cols={3} rowHeight={200} gap={10}  >
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img className='img'
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&hidden=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
       </Grid>
    </Grid>
       
        
    </div>
  )
}

const itemData = [
  {
    img: Pic1,
    title: 'Breakfast',
  },
  {
    img: Pic2,
    title: 'Burger',
  },
  {
    img: Pic3,
    title: 'Camera',
  },
  {
    img: Pic4,
    title: 'Coffee',
  },
  {
    img: Pic5,
    title: 'Hats',
  },
  {
    img: Pic6,
    title: 'Honey',
  },
  {
    img: Pic7,
    title: 'Basketball',
  },
  {
    img: Pic8,
    title: 'Fern',
  },
  {
    img: Pic1,
    title: 'Mushrooms',
  },
  {
    img: Pic9,
    title: 'Tomato basil',
  },
  {
    img: Pic10,
    title: 'Sea star',
  },
  {
    img: Pic11,
    title: 'Bike',
  },
  {
    img: Pic12,
    title: 'Tomato basil',
  },
  {
    img: Pic13,
    title: 'Sea star',
  },
  {
    img: Pic14,
    title: 'Bike',
  },
  
  
  
];

export default Explore