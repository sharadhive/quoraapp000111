import React from 'react'
import './Components/css/SidebarOption.css'
import AddIcon from '@mui/icons-material/Add';
function SidbarOptions() {
  return (
    <div className='sidebarOptions'>
      <div className='sidebarOption'>
        <img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/c8fcab6d-bfd2-464b-895c-b0731ff3ee9e/ddew82u-19bc3c11-950c-42d8-812b-91ca019fffcd.png' alt='his img' style={{ "width": "50px" }} />
        <p>history</p>
      </div>
      <div className='sidebarOption'>
        <img src='https://cdn-icons-png.flaticon.com/128/3135/3135727.png' alt='his img' style={{ "width": "50px" }} />
        <p>Business</p>
      </div>
      <div className='sidebarOption'>
        <img src='https://icons.iconarchive.com/icons/atyourservice/service-categories/512/Cooking-icon.png' alt='his img' style={{ "width": "50px" }} />
        <p>Cooking</p>
      </div>
      <div className='sidebarOption'>
        <img src='https://cdn3.iconfinder.com/data/icons/fladoline-01-medicine-healthcare-part-1/64/medicine-icons-I-17-1024.png' alt='his img' style={{ "width": "50px" }} />
        <p>Phyciology</p>
      </div>
      <div className='sidebarOption'>
        <img src='https://icon-library.com/images/music-icon/music-icon-15.jpg' alt='his img' style={{ "width": "50px" }} />
        <p>Music</p>
      </div>
      <div className='sidebarOption'>
        <img src='https://www.pinclipart.com/picdir/big/67-677027_film-clipart-news-camera-circle-of-film-icon.png' alt='his img' style={{ "width": "50px" }} />
        <p>Movie</p>
      </div>
      <div className='sidebarOption'>
        <img src='https://png.pngtree.com/png-clipart/20190921/original/pngtree-tech-icon-decoration-illustration-png-image_4726369.jpg' alt='his img' style={{ "width": "50px" }} />
        <p>Technology</p>
      </div>
      <div className='sidebarOption'>
        <img src='https://www.pinclipart.com/picdir/middle/532-5323885_education-logo-clipart.png' alt='his img' style={{ "width": "50px" }} />
        <p>Education</p>

      </div>
      <div className='sidebarOption'>
        <AddIcon style={{ "width": "50px" }} />
        <p>Discover Spaces</p>

      </div>
    </div>
  )
}

export default SidbarOptions