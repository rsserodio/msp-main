import React from 'react'
import { PrimaryNav, MenuLink, Circle} from './NavElement'
import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { Col, Row } from 'react-grid-system';
const Navbar = () => {
  return (
    <>
    <Circle />
      <PrimaryNav>
          <MenuLink to="/leaderboard" activestyle>
            <EmojiEventsIcon fontSize="large"/>
          </MenuLink>
          <MenuLink to="/allclassesuser" activestyle>
            <CalendarMonthIcon fontSize="large"/>
          </MenuLink>
          <MenuLink to="/home" activestyle>
              <FitnessCenterOutlinedIcon sx={{ fontSize: 50 }} style={{marginBottom: '15px'}}/>
          </MenuLink>
          <MenuLink to="/products" activestyle>
           <BarChartOutlinedIcon fontSize="large"/>
          </MenuLink>
          <MenuLink to="/blog" activestyle>
            <PersonIcon fontSize="large"/>
          </MenuLink>
      </PrimaryNav>
    </>
  )
}
export default Navbar