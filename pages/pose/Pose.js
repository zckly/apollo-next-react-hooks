import React, {
  useState,
  useReducer,
  useEffect,
  useRef
} from "react";
import posed from "react-pose";

const Box = posed.div({
  idle: { scale: 1 },
  hovered: { scale: 1.5 }
});

function Square() {
  const [hovering, setHovering] = useState(false);

  return (
    <Box
      className='box'
      pose={hovering ? "hovered" : "idle"}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <style jsx global>{`
        .box {
          width: 100px;
          height: 100px;
          background: red;
        }
      `}</style>
    </Box>
  )
}

export default function Pose() {
  return (
    <div>
      <Square />
    </div>
  )
}
