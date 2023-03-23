import './App.css';
import NavBar from './Components/Navbar';
import InputCurrency from './Components/InputCurrency';
// import DarkMode,{mode} from './Components/DarkMode';

function App() {
  return (
    <>
    <NavBar title="Currency Converter" dropdownList="Options" link="Link" aboutUs="About Us" ></NavBar>
    <InputCurrency/>
    {/* <DarkMode></DarkMode> */}
    
    </>
  )
}

export default App;
