import React, {
  useState,
  useReducer,
  useEffect,
  useRef
} from "react";

import Button from './components/Button';

import Home from './components/Home';
import Sections from './components/Sections';
import Contact from './components/Contact';

export default function Portfolio() {

  return (
    <div className='portfolio'>
      <Home />
      <Button
        start={0}
        end={50}
        duration={1000}
        icon='&#709;'
        action={(() => {
            window.scrollTo({
              top: 385,
              left: 0,
              behavior: 'smooth'
            })
          }
        )}
      />
      <Sections />
      <Contact />
    </div>
  )
}
