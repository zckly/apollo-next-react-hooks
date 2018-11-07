import { useState, useEffect } from "react";

let _sections = [
  {
    'order': 0,
    'bg': 'linear-gradient(to bottom right, rgba(53,133,156,1), rgba(123,189,212,1))'
  },
  {
    'order': 1,
    'bg': 'linear-gradient(to bottom right, #000428, #004e92)'
  },
  {
    'order': 2,
    'bg': 'linear-gradient(to bottom right, rgba(86,171,47,1), rgba(168,224,99,1))'
  },
  {
    'order': 3,
    'bg': ''
  },
]

const Sections = function(props) {
  let [ index, setIndex ] = useState(0);
  let visible = _sections[index];
  let next = _sections[index]+1;
  let prev = _sections[index]-1;
  return (
    <div className='sections'>
      <div className='section-bg' style={{ backgroundImage: `${visible.bg}`}}>

      </div>
      <style jsx global>{`
        .sections {
          height: 600px;
          width: 100%;
          margin-top: -18px;
          z-index: 5;
          position: relative;
        }
        .section-bg {
          height: 450px;
        }
      `}</style>
    </div>
  )
}

export default Sections
