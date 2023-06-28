
import { Route, Routes } from 'react-router-dom';
import Home from './sections/Home'
import Signin from './sections/Signin';
import './styles.css'
import { StateProvider } from './StateProvider';
import reducer, { initalState } from './reducer';
import { useStateValue } from './StateProvider';

function App() {
  const [{user},dispatch] = useStateValue()
  console.log(user)
  return (
    <>
    {/* <StateProvider reducer={reducer} initalState={initalState}> */}
      {/* <Routes> */}
          {/* <Route path='/' element={<Signin/>}/>
          <Route path='home' element={<Home/>} /> */}
          { user ? <Home/>  : <Signin/>}
          
          
      {/* </Routes> */}
     {/* </StateProvider> */}
    </>

  );
}

export default App;
