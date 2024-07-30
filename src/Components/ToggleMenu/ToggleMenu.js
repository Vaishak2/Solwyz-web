import * as React from 'react';
import SegmentIcon from '@mui/icons-material/Segment';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import Apps from '@mui/icons-material/Apps';
import Dropdown from '@mui/joy/Dropdown';
import { Link } from 'react-router-dom';

export default function AppsMenu() {
  return (
    <div className=''>
    <Dropdown>
      <MenuButton
      
        slots={{ root: SegmentIcon }}
        slotProps={{ root: { variant: 'plain', color: 'neutral' } }}
        sx={{ position: 'fixed', '& .MuiSvgIcon-root': { backgroundColor: '#464646', color: 'white' },top: 40, right: 80, fontSize:40, color: 'black'}}
        // sx={{ borderRadius: 40}}
      >
        <Apps />
      </MenuButton>
      <Menu
        
        variant="solid"
        invertedColors
        aria-labelledby="apps-menu-demo"
        sx={{
          '--List-padding': '2rem',
          '--ListItemDecorator-size': '3rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(1, 100px)',
          gridAutoRows: '100px',
          gap: 1,
          width: '20%',
          height: '60%',
          backgroundColor: 'black', 
          opacity: '70%',
          '@media (max-width: 768px)': {
      width: '50%', // Full width on small screens
      height: 'auto', // Auto height on small screens
      gridTemplateColumns: '1fr', // Single column
      gridAutoRows: 'auto', // Auto rows
    }
          
        }}
      >
        <div className='grid grid-cols-1 gap-6 text-[18px] font-urbanist'>
          <div className='hover:text-cyan-500 hover:scale-150 hover:cursor-pointer transition-transform'><a href='#home'>Home</a></div>
          <div className='hover:text-cyan-500 hover:scale-150 hover:cursor-pointer transition-transform'><Link to='/aboutus'>About Us</Link></div>
          <div className='hover:text-cyan-500 hover:scale-150 hover:cursor-pointer transition-transform'><a href='#blogs'>Blogs</a></div>
          <div className='hover:text-cyan-500 hover:scale-150 hover:cursor-pointer transition-transform'><a href='#contactUs'>Contact Us</a></div>
          <div className='hover:text-cyan-500 hover:scale-150 hover:cursor-pointer transition-transform'><a href='#services'>Services</a></div>
        </div>

      </Menu>
    </Dropdown>
    </div>
  );
}