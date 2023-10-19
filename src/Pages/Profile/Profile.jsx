import * as React from 'react';
import Grid from '@mui/material/Grid';
import Sidebar from '../../components/Sidebar/Sidebar';
import proAv from './a.jpg'
import './Profile.css'
import SettingsIcon from '@mui/icons-material/Settings';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import GridOnOutlinedIcon from '@mui/icons-material/GridOnOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import PersonPinRoundedIcon from '@mui/icons-material/PersonPinRounded';
import Pic1 from './ExplorePics/explorePic1.avif'
import Pic2 from './ExplorePics/explorePic2.avif'
import Pic3 from './ExplorePics/explorePic3.avif'
import Pic4 from './ExplorePics/explorePic4.avif'
import Pic5 from './ExplorePics/explorePic5.avif'
import Pic6 from './ExplorePics/explorePic6.avif'
import Pic8 from './ExplorePics/explorePic8.avif'
import Pic10 from './ExplorePics/explorePic10.webp'
import Pic11 from './ExplorePics/explorePic11.webp'
import Pic12 from './ExplorePics/explorePic12.webp'
import Pic13 from './ExplorePics/explorePic13.webp'
import Pic14 from './ExplorePics/explorePic14.webp'
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}




function Profile() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Grid container spacing={10}>
      <Grid item xs={3}>
        <Sidebar/>
      </Grid>
      <Grid item xs={9}>
        <div className='prof'>
          <span className='im'>
            <img src={proAv} alt="hala"  className='profAv'/>
          </span>
          <div className='p'>
            <Grid container spacing={1}>
              <Grid item xs={3}>
                <h3>HalaFJ</h3>
              </Grid>
              <Grid item xs={3} >
                <div className='but'><h5>Edit Profile</h5></div>
              </Grid>
              <Grid item xs={3}>
                <div className='but'><h5> view action</h5></div>
              </Grid>
              <Grid item xs={1} >
                <div className='ic'>
                  <SettingsIcon></SettingsIcon></div>
                
              </Grid>
              <Grid item xs={4}>
                <p className='pg'> 9 posts</p>
              </Grid>
              <Grid item xs={4}>
              <p className='pg'> 200 followers</p>
              </Grid>
              <Grid item xs={4}>
              <p className='pg'> 265 following</p>
              </Grid>
            </Grid>
          </div>
        </div>
        <div className='tabs'>
      
      <Tabs value={value} onChange={handleChange} centered>
        <Tab icon={<GridOnOutlinedIcon/>} iconPosition="start" label="Posted" className='tab' {...a11yProps(0)}/>
        <Tab icon={<BookmarkBorderOutlinedIcon/>} iconPosition="start" label="Reels" className='tab' {...a11yProps(1)}/>
        <Tab icon={<PersonPinRoundedIcon/>} iconPosition="start" label=" Taged"  className='tab' {...a11yProps(2)}/>
        </Tabs>
        </div>
        <div className='tabscontent'>
         <CustomTabPanel value={value} index={0}>
         <ImageList sx={{ width:650, height: 450 }} cols={3} rowHeight={150} gap={5}  >
      {postData.map((item) => (
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
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>

      <ImageList sx={{ width:650, height: 450 }} cols={3} rowHeight={100} gap={5}  >
      {saveData.map((item) => (
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
    </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      <ImageList sx={{ width:650, height: 450 }} cols={3} rowHeight={100} gap={5}  >
      {tagData.map((item) => (
        <ImageListItem key={item.img}>
          <img className='img'
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&hidden=format`}
            alt={item.title}
            loading="lazy"/>
        </ImageListItem>
      ))}
    </ImageList>
     </CustomTabPanel>
        </div>
       </Grid>
    </Grid>
    </div>
  )
}


const tagData = [
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
  
  
];

const postData = [
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
  
  
  
];
const saveData = [
  
  {
    img: Pic8,
    title: 'Fern',
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


export default Profile