import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import "./HomePage.css"
import av1 from './StoriesAvatars/driver.png'
import av2 from './StoriesAvatars/farmer-avatar.png'
import av3 from './StoriesAvatars/female-chef.png'
import av4 from './StoriesAvatars/flight-attendant.png'
import av5 from './StoriesAvatars/graduated-student.png'
import av6 from './StoriesAvatars/saleswoman.png'
import av7 from './Avatars/boy.png'
import av8 from './Avatars/cock-man.png'
import av9 from './Avatars/nurse.png'
import av11 from './Avatars/shop-assistant.png'
import av12 from './Avatars/singer.png'
import Pic1 from '../Explore/ExplorePics/explorePic1.avif'
import Pic2 from '../Explore/ExplorePics/explorePic2.avif'
import Pic3 from '../Explore/ExplorePics/explorePic3.avif'
import Pic4 from '../Explore/ExplorePics/explorePic4.avif'
import Pic5 from '../Explore/ExplorePics/explorePic5.avif'
import Pic6 from '../Explore/ExplorePics/explorePic6.avif'
import Pic8 from '../Explore/ExplorePics/explorePic8.avif'
import Pic10 from '../Explore/ExplorePics/explorePic10.webp'
import Pic11 from '../Explore/ExplorePics/explorePic11.webp'
import myav from './Avatars/a.jpg'
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Post from '../../components/Post/Post'
import {postContext} from './postContext'


function HomePage() {
  const postsList=posts.map((post)=>(
    <li key={post.id}>
      <postContext.Provider value={post}>
        <Post post={post} />
      </postContext.Provider>
    </li>
  )
  );
  return (
    <div className='homepage'>
      <Grid container spacing={8}>
        <Grid item xs={2}><Sidebar/></Grid>
        <Grid item xs={7}>
          <div className='home'>
             <div className='stories'>
          <Stack direction="row" spacing={1}>
      <Avatar alt="a" src={av1} className='av'/>
      <Avatar alt="b" src={av2}className='av'/>
      <Avatar alt="c" src={av3} className='av'/>
      <Avatar alt="d" src={av4} className='av' />
      <Avatar alt="e" src={av5} className='av'/>
      <Avatar alt="f" src={av6}className='av'/>
      <Avatar alt="g" src={av7} className='av'/>
      <Avatar alt="h " src={av8} className='av'/>
      <Avatar alt="i" src={av9} className='av'/>
      <Avatar alt="a" src={av1} className='av'/>
    
     
    </Stack>
          </div >
      
          <div className='posts'>
            <ul>
              {postsList}
            </ul>

        

          </div>
          
          </div>
         
        </Grid>
        <Grid item xs={3}>
          <div className='sugg'>
            <div>
              <MenuList>
                <MenuItem className='item'>
                <span><img src={myav} alt="hala" className='myimg'/></span>
                <span>
                  <h5>HalaFJ <br/> <span className='op'>Hala Fuad</span> </h5>
                </span>
                <span>
                <Box component="span" sx={{ p: 1, border: '1px  grey' }} className='btn' >
                  <Button >Switch</Button>
                </Box>
                </span>
                </MenuItem>
                <MenuItem className='item'>
                <span>
                  <p className='op'>Suggestions for you</p></span>
                  <span>
                <Box component="span" sx={{ p: 1, border: '1px  grey' }} className='btn'>
                  <Button>
                    <span id="more">See More</span>
                    </Button>
                </Box>
                </span>
                </MenuItem>
                <MenuItem className='item'>
                <span><img src={av1} alt="hala" className='otherimg'/></span>
                <span>
                  <h5>Yazeed <br/> <span className='op'>new to instagrem</span> </h5>
                </span>
                <span>
                <Box component="span" sx={{ p: 1, border: '1px  grey' }} className='btn' >
                  <Button >Follow</Button>
                </Box>
                </span>
                </MenuItem>
                <MenuItem className='item'>
                <span><img src={av11} alt="hala" className='otherimg'/></span>
                <span>
                  <h5>Yara95 <br/> <span className='op'>Followed by hamza</span> </h5>
                </span>
                <span>
                <Box component="span" sx={{ p: 1, border: '1px  grey' }} className='btn' >
                  <Button >Follow</Button>
                </Box>
                </span>
                </MenuItem>
                <MenuItem className='item'>
                <span><img src={av12} alt="hala" className='otherimg'/></span>
                <span>
                  <h5>Maisj <br/> <span className='op'>Followed by mavi5</span> </h5>
                </span>
                <span>
                <Box component="span" sx={{ p: 1, border: '1px  grey' }} className='btn' >
                  <Button >Follow</Button>
                </Box>
                </span>
                </MenuItem>
                <MenuItem className='item'>
                <span><img src={av1} alt="hala" className='otherimg'/></span>
                <span>
                  <h5>Mhmad  <br/> <span className='op'>New to instagram</span> </h5>
                </span>
                <span>
                <Box component="span" sx={{ p: 1, border: '1px  grey' }} className='btn' >
                  <Button >Follow</Button>
                </Box>
                </span>
                </MenuItem>
                <MenuItem className='item'>
                <span><img src={av8} alt="hala" className='otherimg'/></span>
                <span>
                  <h5>Suhaib abu yahia <br/> <span className='op'>New to instagram</span> </h5>
                </span>
                <span>
                <Box component="span" sx={{ p: 1, border: '1px  grey' }} className='btn' >
                  <Button >Follow</Button>
                </Box>
                </span>
                </MenuItem>
              </MenuList>
                
            </div>
          </div>
        </Grid>
      </Grid>
        
    </div>
  )
}

const posts=[
  {
    id:0,
    avatar :av1,
    name :'Mhmad7',
    time: '.4m',
    imag: Pic1,
    likes:'654',
    describtion:'no caption...',
  },
  {
    id:1,
    avatar :av2,
    name :'Yazeed',
    time: '.35s',
    imag: Pic2,
    likes:'48',
    describtion:'no caption...',
  },
  {
    id:2,
    avatar :av3,
    name :'HalaFJ',
    time: '.2h',
    imag: Pic3,
    likes:'259',
    describtion:'no caption...',
  },
  {
    id:3,
    avatar :av4,
    name :'Meso',
    time: '.1h',
    imag: Pic4,
    likes:'9853',
    describtion:'no caption...',
  },
  {
    id:4,
    avatar :av5,
    name :'Suhaib',
    time: '.54s',
    imag: Pic5,
    likes:'41',
    describtion:'no caption...',
  },
  {
    id:5,
    avatar :av6,
    name :'Yaraa',
    time: '.23m',
    imag: Pic6,
    likes:'8',
    describtion:'no caption...',
  },
  {
    id:6,
    avatar :av7,
    name :'Hamzah',
    time: '.5h',
    imag: Pic10,
    likes:'65',
    describtion:'no caption...',
  },
  {
    id:7,
    avatar :av8,
    name :'FuadJ',
    time: '.1d',
    imag: Pic8,
    likes:'78',
    describtion:'no caption...',
  },
  {
    id:8,
    avatar :av9,
    name :'Sumaia74',
    time: '.48m',
    imag: Pic11,
    likes:'25',
    describtion:'no caption...',
  },
]


export default HomePage