import React from 'react';
import './index.css'
import Insertdata from './components/Insertform'
import { useState } from 'react';


function App() {
  const [popup, setPopup] = useState(false)
  return (
    <div className="fixed top-0 left-0 right-0 w-full p-4  md:inset-0 h-[calc(100%-1rem)] md:h-full bg-amber-300 flex items-center justify-center">
      <button onClick={()=> setPopup(true)} className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
        Insert Button
      </button>
      <Insertdata trigger={popup} setTrigger = {setPopup} />
    </div>
  );
}

export default App;