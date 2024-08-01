import React, { useState, useEffect } from 'react';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import { X } from '@mui/icons-material';
import ChatIcon from '@mui/icons-material/Chat';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const actions = [
  { icon: <WhatsAppIcon />, name: 'WhatsApp', url: 'https://wa.me/' },
  { icon: <LinkedInIcon />, name: 'LinkedIn', url: 'https://www.linkedin.com/company/104707476/admin/dashboard/' },
  { icon: <FacebookIcon />, name: 'Facebook', url: 'https://www.facebook.com/people/Solwyz-Technologies/61559030405055/' },
  { icon: <X />, name: 'X', url: 'https://twitter.com/your-profile' }
];

const SpeedDialComponent = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleActionClick = (url) => {
    window.open(url, '_blank');
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <SpeedDial
        ariaLabel="SpeedDial example"
        sx={{
          position: 'fixed', '& .MuiFab-primary': {
            backgroundColor: '#F6F6F6', color: 'white' , '&:hover': {
              backgroundColor: 'lightgrey', // Change this to the desired hover color
            }
          }, bottom: 100, right: 25 , zIndex: 40
        }}
        icon={<ChatIcon
        sx={{
          color:'#2b2e2c'
        }} />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => handleActionClick(action.url)}
          />
        ))}
      </SpeedDial>

      {showBackToTop && (
        <div style={{ position: 'fixed', bottom: 40, right: 25, backgroundColor: '#F6F6F6', borderRadius: '60%', padding: '13px', cursor: 'pointer', boxShadow:"0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"  }} onClick={scrollToTop}>
          <ArrowUpwardIcon />
        </div>
      )}
    </>
  );
};

export default SpeedDialComponent;
