import logo from './logo.svg';
import './App.css';
import ViewPort from './comp/viewPort';

import { useControls } from 'leva'

function MyComponent() {
  const { name, aNumber,frontImage } = useControls({ 
    name: 'World', 
    aNumber: 0, 
    frontImage:  { image: 'image.jpg' },
    backImage:   { image: 'image.jpg' },
    rightImage:  { image: 'image.jpg' }, 
    leftImage:   { image: 'image.jpg' }, 
    topImage:    { image: 'image.jpg' }, 
    bottomImage: { image: 'image.jpg' },
 
  })

  return (
    <div>
    </div>
  )
}


function App() {
  return (
    <div className="App">
      <MyComponent/>
      <ViewPort/>
    </div>
  );
}

export default App;
