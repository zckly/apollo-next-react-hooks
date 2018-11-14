import { useState, useEffect } from "react";
import useProgress from './hooks/useProgress'
import useWindowScrollPosition from './hooks/useWindowScrollPosition'
import Button from './components/Button';
import Home from './components/Home';
import Sections from './components/Sections';
import Contact from './components/Contact';

const Portfolio = function() {

  const [buttonOneOpacity, setButtonOneOpacity] = useState(0);
  const [clickedButtonOne, setClickedButtonOne] = useState(false);
  useEffect(() => {
      clickedButtonOne ? setButtonOneOpacity(0) : setButtonOneOpacity(1)
    }, [clickedButtonOne]
  );

  const [sectionNavOpacity, setSectionNavOpacity] = useState(0);
  useEffect(
    () => {
      clickedButtonOne ? setSectionNavOpacity(1) : setSectionNavOpacity(0);
    }, [clickedButtonOne]
  );

  useEffect(
    () => {
      if (window.pageYOffset > 380 && window.pageYOffset < 600) {
        setSectionNavOpacity(1)
        setButtonOneOpacity(0)
      } else {
        setSectionNavOpacity(0)
        setButtonOneOpacity(1)
      }
    }
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
              setTimeout(() => {setClickedButtonOne(true)}, 500)
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
      <Sections
        opacity={sectionNavOpacity}
      />
      <Contact />
    </div>
  )
}

export default Portfolio
