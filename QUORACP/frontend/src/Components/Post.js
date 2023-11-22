import { useState } from 'react';
import './css/Post.css'; // Assuming this is your CSS file
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import RepeatIcon from '@mui/icons-material/Repeat';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ShareIcon from '@mui/icons-material/Share';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import CloseIcon from '@mui/icons-material/Close';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function Post() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const Close = <CloseIcon />;

  return (
    <div className='post'>
      <div className='post__info'>
        <AccountCircleIcon />
        <h4 className='name'>Username</h4>
        <small>Timestamp</small>
      </div>
      <div className='post__body'>
        <div className='post__question'>
          <p>This is the test content.</p>
          <button onClick={() => setIsModalOpen(true)} className='post__btnAnswer'>
            Answer
          </button>
          <Modal
            open={isModalOpen}
            closeIcon={Close}
            onClose={() => setIsModalOpen(false)}
            closeOnEsc={true}
            center
            classNames={{
              modal: 'custom-modal',
              closeButton: 'custom-closeButton',
              overlay: 'custom-overlay',
            }}
          >
            <div className='modal__content'>
              <div className='modal__question'>
                <h1>this is test question</h1>
                <p>
                  asked by <span className='name'>Username</span> on <span>Timestamp</span>
                </p>
              </div>
              <div className='modal__answer'>
                <ReactQuill placeholder='Enter your answer' className='quill' />
              </div>
              <div className='modal__buttons'>
                <button className='cancel' onClick={() => setIsModalOpen(false)}>
                  Cancel
                </button>
                <button type='submit' className='add'>
                  Add Question
                </button>
              </div>
            </div>
          </Modal>
        </div>
      </div>
      <div className='post__footer'>
        <div className='post__footerAction'>
          <ArrowUpwardIcon />
          <ArrowDownwardIcon />
          <RepeatIcon />
          <ChatBubbleIcon />
        </div>
        <div className='post__footerLeft'>
          <ShareIcon />
          <MoreHorizIcon />
        </div>
      </div>
      <p className='answer-count'>1 answer</p>
      <div className='post__answer'>
        <div className='post__answer-container'>
          <div className='post__answered'>

            <AccountCircleIcon />
            <img src='https://wallup.net/wp-content/uploads/2014/10/14/funny/Funny_Dog_Cartoon.jpg' alt='his img' style={{ "width": "500px" }} />
            <div className='post__info'>
              <p>Answered by <span className='name'>Username</span></p>
              <span>Answer Timestamp</span>
            </div>
          </div>
          <div className='post__answer-text'>
            This is the test answer.
          </div>
        </div>
      </div>
    </div>



    ///////////////////////////////////////////////////////////////////////////////////////////////////////////

  );
}

export default Post;



