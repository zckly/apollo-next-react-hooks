import { useState, useEffect } from "react";


const SectionNav = function(props) {

  let [ verticalScroll ] = useState(0);

  useEffect(() => {

  });

  return (


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
        position='absolute'
        bottom='-25px'
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


    <div
      className='nav-container'
      style={{
        "opacity" : props.opacity,
      }}
    >
      <Button
        start={0}
        end={50}
        duration={1000}
        icon='&#706;'
        scaleH={1}
        scaleV={1.25}
        klass='left-arrow'
        bottom='124px'
        action={(() => {
          /*previous - subtract window width*/
            {setHorizontal(horizontal-width)}
          }
        )}
      />
      <Button
        start={0}
        end={50}
        duration={1000}
        icon='&#707;'
        scaleH={1}
        scaleV={1.25}
        klass='right-arrow'
        bottom='48px'
        action={(() => {
          /*next - subtract window width*/
            {setHorizontal(horizontal+width)}
          }
        )}
      />
    </div>
  )
}

export default SectionNav
