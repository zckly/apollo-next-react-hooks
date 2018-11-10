import { useState, useEffect } from "react";
import Circle from './Circle';
import useProgress from '../hooks/useProgress'
import posed from "react-pose";

const ButtonWrapper = posed.div({
  idle: { scale: 1 },
  hovered: { scale: 1.1 }
});

 const Button = function(props) {
  let position = useProgress(props.start,props.end,props.duration)
  const [hovering, setHovering] = useState(false);

  return (
    <ButtonWrapper
      className='button-wrapper'
      style={{ opacity: props.opacity }}
      pose={hovering ? "hovered" : "idle"}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onClick={props.action}
    >
      <div
        className='button'
        style={{ right: `${position}%` }}
      >
        <Circle {...props}/>
      </div>
      <style jsx global>{`
        .button-wrapper {
          z-index: 10;
          position: relative;
          margin-top: -55px;
          cursor: pointer;
          transition: opacity .5s;
        }
        .button {
          z-index: 10;
          position: absolute;
          top:-25px;
          right:-100px;
        }
      `}</style>
    </ButtonWrapper>
  )
}

export default Button
