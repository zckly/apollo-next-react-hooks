import useProgress from '../hooks/useProgress'
import {useState } from "react";
import posed from "react-pose";

const Button = posed.div({
  idle: { scale: 1 },
  hovered: { scale: 1.1 }
});

const Circle = function() {
  const [hovering, setHovering] = useState(false);
  const [opacity, setOpacity] = useState(1);
  return (
    <Button
      className='circle'
      style={{ opacity: `${opacity}` }}
      pose={hovering ? "hovered" : "idle"}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onClick={() => {
        window.scrollTo({
          top: 385,
          left: 0,
          behavior: 'smooth'
        })
        setOpacity(0)
        }
      }
    >
      <div className='down-arrow'>&#709;</div>
      <style jsx global>{`

        .circle {
          background: rgba(255,255,255,1);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          text-align: center;
          transition: box-shadow .3s;
          transition: opacity 0.5s;
        }
        .circle:hover {
          box-shadow: 0 5px 15px rgba(33,33,33,1);
        }
        .down-arrow {
          padding: 10px;
          color: rgba(20,20,20,1);
          font-size: 36px;
          transform:scale(1.25,1);
          font-family: helvetica;
        }
      `}</style>
    </Button>
  )
}


export default function ButtonContainer () {
  let position = useProgress(0,50,1000);

  return (
    <div>
        <div className='button-container' style={{ opacity: `${position*.03}` }}>
          <div className='button' style={{ right: `${position}%` }}>
            <Circle />
          </div>
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
    </div>
  )
}
