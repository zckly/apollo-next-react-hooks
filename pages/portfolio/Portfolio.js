import React, {
  useState,
  useReducer,
  useEffect,
  useRef
} from "react";

import Home from './components/Home';
import Button from './components/Button';
import Sections from './components/sections/Sections';
import Contact from './components/Contact';

export default function Portfolio() {

  return (
    <div>
      <Home />
      <Button start={100} end={50} time={200} />
      <Sections />
      <Contact />
    </div>
  )
}
