import { useState, useEffect } from "react";
import Circle from './Circle';
import useProgress from '../hooks/useProgress'
import posed from "react-pose";

const ButtonWrapper = posed.div({
  idle: { scale: 1 },
  hovered: { scale: 1.1 },
  pressable: true,
  init: { scale: 1 },
  press: { scale: 0.8 }
});

 const Button = function(props) {
  // let position = useProgress(props.start,props.end,props.duration)
  const [hovering, setHovering] = useState(false);

  return (
    <ButtonWrapper
      className='button-wrapper'
      style={{
        "opacity": props.opacity,
      }}
      pose={hovering ? "hovered" : "idle"}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onClick={props.action}
    >
      <div
        className='button'
        style={{
          opacity: props.opacity,
          zIndex: props.zIndex,
          position: 'absolute',
          display: 'block',
          marginTop: props.marginTop,
          left: props.left,
          top: props.top
        }}
      >
        <Circle {...props}/>
      </div>
      <style jsx global>{`
        .button-wrapper {
          cursor: pointer;
          transition: opacity .5s;
        }
      `}</style>
    </ButtonWrapper>
  )
}

export default Button
