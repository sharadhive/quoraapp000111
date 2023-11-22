import React, { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import './css/QuoraHeader.css';
import Modal from "react-responsive-modal"
import 'react-responsive-modal/styles.css'; // Correctly import the styles for react-responsive-modal
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function QuoraHeader() {
  const [isModalOpen, setisModalOpen] = useState(false);
  const [inputUrl, setInputUrl] = useState("") // Fixed the syntax error here
  const Close = <CloseIcon />;

  return (
    <div className='qHeader'>
      <div className='qHeader-content'>
        <div className='qHeader__logo'>
          <img
            src="https://download.logo.wine/logo/Quora/Quora-Logo.wine.png"
            alt="logo"
          />
        </div>
        <div className='qHeader__icons'>
          <div className='qHeader__icon'><HomeIcon /></div>
          <div className='qHeader__icon'><FeaturedPlayListIcon /></div>
          <div className='qHeader__icon'><AssignmentTurnedInIcon /></div>
          <div className='qHeader__icon'><PeopleAltIcon /></div>
          <div className='qHeader__icon'><NotificationsIcon /></div>
        </div>
        <div className='qHeader__input'>
          <SearchIcon />
          <input type="text" placeholder="Search here" />
        </div>
        <div className='qHeader__account'>
          <AccountCircleIcon />
          <Button onClick={() => setisModalOpen(true)} variant="contained" color="primary" style={{ marginLeft: '10px' }}>Add Question</Button>
          <Modal open={isModalOpen}
            closeIcon={Close} onClose={() => setisModalOpen(false)}
            closeOnEsc={true}
            center
            closeOnOverlayClick={false}
            styles={{
              overlay: {
                height: "auto"
              }
            }}
          >
            <div className='modal__title'>
              <h5>add question</h5>
              <h5>share link</h5>
            </div>
            <div className='modal__info'>
              <AccountCircleIcon className='avatar' />
              <div className='modal__scope'>
                <PeopleAltIcon />
                <p>Public</p>
                <ExpandMoreIcon />
              </div>
            </div>
            <div className='modal__Field'>
              <input type="text" placeholder='start your question with , what ,how , why , etc' />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <input value={inputUrl} onChange={(e) => setInputUrl(e.target.value)} type='text' style={{ margin: "5px 0", border: "1px solid lightgray", padding: "10px", outline: "2px solid #000" }} placeholder='optional paste a link that gives context  ' />
                {
                  inputUrl !== "" && <img  style={{height:"40vh", objectFit:"contain"}}src={inputUrl} alt='displayimage' />
                }

              </div>
            </div>
            <div className='modal__button'>
              <Button className='cancel' onClick={() => setisModalOpen(false)}>Cancel</Button>
              <Button type='submit' className='add' >add question</Button>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default QuoraHeader;
