import { useState, useEffect } from "react";
import Button from './Button'

const SectionNav = (props) => {
  let [ verticalScroll ] = useState(0);

  useEffect(
    () => {

    }
  );

  return (
    <div className='nav-container'>
      <Button
        start={0}
        end={50}
        duration={1000}
        icon='&#709;'
        action={(() => {
            window.scrollTo({
              top: 385,
              left: 0,
              behavior: 'smooth'
            })
          }
        )}
      />
      <style jsx global>{`
        .nav-container {
          float: right;
          margin-right: 50px;
          margin-top: 150px;
          height: 100px;
          width: 50px;
        }
      `}</style>
    </div>
  )
}


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

export default function Sections (props) {
  let [ index, setIndex ] = useState(0);
  let visible = _sections[index];
  let next = _sections[index]+1;
  let prev = _sections[index]-1;
  return (
    <div className='sections'>
      <div className='section-bg' style={{ backgroundImage: `${visible.bg}`}}>
        <SectionNav />
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
