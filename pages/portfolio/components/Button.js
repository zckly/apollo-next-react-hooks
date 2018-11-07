import { useState } from "react";
import Circle from './Circle';

import useProgress from '../hooks/useProgress'
import posed from "react-pose";

const ButtonWrapper = posed.div({
  idle: { scale: 1 },
  hovered: { scale: 1.1 }
});

export default function Button(props) {
  let position = useProgress(props.start,props.end,props.duration)
  const [hovering, setHovering] = useState(false);
  const [opacity, setOpacity] = useState(1);
  let action = props.action;

  return (
    <ButtonWrapper
      className='button-container'
      style={{ opacity: `${position*.03}` }}
      pose={hovering ? "hovered" : "idle"}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onClick={action}
    >
      <div
        className='button'
        style={{ right: `${position}%` }}
      >
        <Circle {...props}/>
      </div>
      <style jsx global>{`
        .button-container {
          z-index: 10;
          position: relative;
          margin-top: -55px;
          cursor: pointer;
        }
        .button {
          position: absolute;
          top:-25px;
          right:-100px;
        }
      `}</style>
    </ButtonWrapper>
  )
}
