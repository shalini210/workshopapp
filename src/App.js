import logo from './logo.svg';
import './App.css';
import boy1 from "./images/boy1.png"
import Menu from './components/Menu'
import First from './First';
import Footer from './components/Footer';
import User from './components/User';
function App() {
  return (
    <>
    <Menu></Menu>
    <div className='usercontainer'>
  <User uname="Ron" ipath = {boy1} ud="Software Developer" uc="634857388"></User>
  <User uname="John" ud="JR Software Developer" uc="74557388"></User>
  <User uname="Maria" ud="sr Software Developer" uc="8875488"></User>
  </div>
    
    <Footer></Footer>
    </>
  );
}

export default App;
