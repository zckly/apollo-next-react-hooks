import { useState, useEffect } from "react";
import Button from './Button';

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
]

const Sections = function(props) {
  let [ index, setIndex ] = useState(0);
  const [ direction, setDirection ] = useState('');
  let prev = _sections[index-1] || _sections[_sections.length-1];
  let current = _sections[index];
  let next = _sections[index+1];

  const [ width, setWidth ] = useState(0)
  useEffect(() => {
    setWidth(window.innerWidth)
  }, [width])

  const [ horizontal, setHorizontal ] = useState(width);
  useEffect(() => {
    let el = document.querySelector('div.sections');
    //set scroll to current selection
    el.scrollLeft = horizontal;
  });

  return (
    <div className='sections'
      style={{ "width" : width }}
    >
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
          action={(() => {
            /*previous - subtract window width*/
              {setHorizontal(horizontal-width)}
              {setDirection('prev')}
            }
          )}
        />
        <br/>
        <Button
          start={0}
          end={50}
          duration={1000}
          icon='&#707;'
          scaleH={1}
          scaleV={1.25}
          klass='right-arrow'
          action={(() => {
            /*next - subtract window width*/
              {setHorizontal(horizontal+width)}
              {setDirection('next')}
            }
          )}
        />
      </div>
      <div
        className='section sections-bg-prev'
        style={{
          "backgroundImage": `${prev.bg}`,
          "width" : width
        }}
      />
      <div
        className='section sections-bg-current'
        style={{
          "backgroundImage": `${current.bg}`,
          "width" : width
        }}
      >
        <div className='section-description'>
          <h2>This is the project description section</h2>
        </div>
        <div className='section-image-container'>
          <img className='section-image' src='https://images.unsplash.com/photo-1534521989089-2084a311b5be?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c4066a0e11e04fea188cf12f38dd68ee&auto=format&fit=crop&w=1509&q=80' />
        </div>
      </div>
      <div
        className='section sections-bg-next'
        style={{
          "backgroundImage": `${next.bg}`,
          "width" : width
        }}
      />
      <style jsx global>{`
        .sections {
          height: 650px;
          background: rgba(255,255,255,1);
          display: flex;
          overflow-x: auto;
          position: relative;
          z-index:5;
          scroll-behavior: smooth;
        }
        .section {
          height: 450px;
          flex-shrink: 0;
        }
        .nav-container {
          z-index: 5;
          position: fixed;
          right: 50px;
          top: 250px;
          height: 100px;
          width: 50px;
          transition: opacity 1.5s;
        }
        .section-description {
          width: 50%;
          display: inline-block;
          text-align:center;
          color: rgba(255,255,255,.65);
          vertical-align: top;
        }
        .section-image-container {
          width: 50%;
          display: inline-block;
        }
        .section-image {
          width: 80%;
        }
      `}</style>
    </div>
  )
}

export default Sections
