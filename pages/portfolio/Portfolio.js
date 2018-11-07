import { useState, useEffect } from "react";
import useProgress from './hooks/useProgress'

import Button from './components/Button';
import Home from './components/Home';
import Sections from './components/Sections';
import SectionNav from './components/SectionNav';
import Contact from './components/Contact';

const Portfolio = function() {
  const [buttonOneOpacity, setButtonOneOpacity] = useState(0);
  const [sectionNavOpacity, setSectionNavOpacity] = useState(0);
  const [clickedButtonOne, setClickedButtonOne] = useState(false);

  useEffect(
    () => {
      clickedButtonOne ? setButtonOneOpacity(0) : setButtonOneOpacity(1)
    }, [clickedButtonOne]
  )

  return (
    <div className='portfolio'>
      <Home />
      <div className='button-container'>
        <Button
          opacity={buttonOneOpacity}
          id='button'
          start={0}
          end={50}
          duration={1000}
          icon='&#709;'
          scaleH={1.25}
          scaleV={1}
          klass='down-arrow'
          action={(() => {
              window.scrollTo({
                top: 385,
                left: 0,
                behavior: 'smooth'
              })
              setClicked(true)
            }
          )}
        />
        <style jsx global>{`
          .button-container {
            position: relative;
            z-index: 10;
          }
        `}</style>
      </div>
      <Sections>
        <SectionNav />
      </Sections>
      <Contact />
    </div>
  )
}

export default Portfolio
