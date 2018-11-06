import React, {
  useState,
  useReducer,
  useEffect,
  useRef
} from "react";
import posed from "react-pose";

const Button = posed.div({
  idle: { scale: 1 },
  hovered: { scale: 1.5 }
});


export default function ButtonContainer() {
  const [hovering, setHovering] = useState(false);
  return (
    <div>
      <Button
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
      </Button>
    </div>
  )
}
