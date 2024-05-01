import Contact from './components/contact.jsx';
import Details from './components/details.jsx';
import { useState } from 'react';
import './App.css';

function App() {
  const [visible, setVisible] = useState(true);

  const toggleDetails = () => {
    setVisible(!visible);
  };


  return (
    <>
      {visible ? (
        <Contact toggleDetails={toggleDetails} />
      ) : (
        <Details toggleDetails={toggleDetails} />
      )}
    </>
  );
}

export default App;
