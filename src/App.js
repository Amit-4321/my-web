
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';

import TextForm from './components/TextForm';


function App() {
  return (
    <>
    {/* props type:----this is a string then navbar we give string value*/}
  <Navbar/>{/* title="Utils2" about="AboutAmit" */}
  <div className='container my-3'>
    <TextForm heading="Enter the text to analyze"/>
    <About/>
  </div> 
   
  </>
  );
}

export default App;
