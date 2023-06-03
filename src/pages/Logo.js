
import logo from './logo-branco2.png';

function Logo() {
    return (<div style={topStyle}><img src={logo} style={imageStyle} alt="logo" /></div>)
}

const imageStyle = {
    height: '50px',
  
  }

const topStyle = {
    backgroundColor: '#DC354B',
    height: '50px',
    paddingBottom:'5%',
    paddingTop:'5%'
  }

export default Logo