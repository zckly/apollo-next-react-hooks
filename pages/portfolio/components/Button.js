// html, body {
//   height: 100%;
// }
//
// body {
//   display: grid;
//   grid: 100px / 100px;
//   align-content: center;
//   margin: 0;
// }
//
// span {
//   border-radius: 50%;
//   background: turquoise;
//   will-change: transform;
// }

// const getProgress = ({elapsed, total}) =>
//   Math.min(elapsed / total, 1);
//
// const easeOut = progress =>
//   Math.pow(--progress, 5) + 1;
//
// const element = document.querySelector("span");
// const finalPosition = 600;
//
// const time = {
//   start: performance.now(),
//   total: 2000
// };
//
// const tick = now => {
//   time.elapsed = now - time.start;
//   const progress = getProgress(time);
//   const easing = easeOut(progress);
//   const position = easing * finalPosition;
//   element.style.transform = `translate(${position}px)`;
//   if (progress < 1) requestAnimationFrame(tick);
// };

// requestAnimationFrame(tick);

import { useState, useEffect } from "react";


let useProgress = (start,end,duration) => {
  let [progress, setProgress] = useState(start);

  useEffect(
    () => {
      const getProgress = ({elapsed, total}) => Math.min(elapsed / total, 1);
      const easeOut = progress => Math.pow(--progress, 5) + 1;
      const time = {
        start: performance.now(),
        total: duration
      };
      const finalPosition = 47.5;
      let rafId = null;

      const step = now => {
         time.elapsed = now - time.start;
         const progress = getProgress(time);
         const easing = easeOut(progress);
         const position = easing * finalPosition;
         //element.style.transform = `translate(${position}px)`;
      // let step = timestamp => {
      //   if (!start) start = timestamp;
      //   let progress = timestamp - start;
        setProgress(position*1000);
        if (progress < 1) {
          rafId = requestAnimationFrame(step);
        }
      };
      rafId = requestAnimationFrame(step);
      return () => cancelAnimationFrame(rafId);
    },
    [start,end,duration]
  );

  return Math.min(progress / duration, duration);
}

export default function Button () {
  let position = useProgress(0,50,1000);
  console.log(position)

  return (
    <div className='button-container' style={{ opacity: `${position*.03}` }}>
      <div className='button' style={{ right: `${position}%` }}>
        <div className='circle'>
          <div className='down-arrow'>&#709;</div>
        </div>
      </div>
      <style jsx global>{`
        .button-container {
          z-index: 10;
          position: relative;
          margin-top: -55px;
          cursor: pointer;
        }
        .remove-underline {
          text-decoration: none;
        }
        .button {
          position: absolute;
          top:-40px;
          right:-100px;
        }
        .circle {
          background: rgba(255,255,255,1);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          text-align: center;
        }
        .arrow {
          padding-top: 12px;
          color: rgba(20,20,20,1);
          font-size: 48px;
          transform:scale(1.25,1);
          font-family: helveitica;
        }
      `}</style>
    </div>
  )
}
