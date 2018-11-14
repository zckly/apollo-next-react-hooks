import { useState, useEffect } from "react";
import Button from './Button';
import _projects from "./data/projects";

const Projects = function(props) {
  let [ index, setIndex ] = useState(0);
  let zero = _projects[index-1] || _projects[_projects.length-1];
  let one = _projects[index];
  let two = _projects[index+1];

  const [ width, setWidth ] = useState(0)
  useEffect(() => {
    setWidth(window.innerWidth)
  }, [width])

  const [ projectLeft, setProjectLeft ] = useState('-100%');
  useEffect(() => {
    console.log(this)
  }, [projectLeft])

  const [ horizontal, setHorizontal ] = useState(width);
  useEffect(() => {
    let el = document.querySelector('div.projects');
    //set scroll to current selection
    el.scrollTo({
      top: 385,
      left: horizontal,
      behavior: 'smooth'
    })
  });

  return (
    <div className='projects'
      style={{ "height" : "640px" }}
    >
      <div
        className='holder'
        style={{
          "box-shadow" : "rgba(0,0,0,.24) 0px 2px 6px 0px",
          "background-color" : "rgb(231,24,64)"
        }}
      >
        <div
          className='project'
          style={{
            "width" : '100%',
            "left": 0,
            "display": "block"
          }}
        >
          <div className='project-description'>
            <h2>{zero.description}</h2>
          </div>
          <div className='project-image-container'>
            <img className='project-image' src={zero.img} />
          </div>
        </div>

        <div
          className='project'
          style={{
            "width" : '100%',
            "left" : "-100%",
            "display" : "block"
          }}
        >
          <div className='project-description'>
            <h2>{one.description}</h2>
          </div>
          <div className='project-image-container'>
            <img className='project-image' src={one.img} />
          </div>
        </div>

        <div
          className='project'
          style={{
            "left": -width,
            "width" : '100%',
            "display": 'block'
          }}
        >
          <div className='project-description'>
            <h2>{two.description}</h2>
          </div>
          <div className='project-image-container'>
            <img className='project-image' src={two.img} />
          </div>
        </div>
      </div>
      <style jsx global>{`
        .projects {
          background: rgba(255,255,255,1);
          z-index:6;
        }
        .holder {
          height: 512px;
          position: relative;
          width: 100%;
        }
        .project {
          height: 640px;
          overflow: hidden;
        }
        .nav-container {
          z-index: 5;
          float:right;
          right: 50px;
          bottom: 50px;
          height: 200px;
          width: 50px;
          transition: opacity 1s;
        }
        .project-description {
          width: 50%;
          height: 640px;
          display: inline-block;
          text-align:center;
          color: rgba(255,255,255,.65);
          vertical-align: top;
        }
        .project-image-container {
          width: 50%;
          display: inline-block;
          height: 640px;
        }
        .project-image {
          width: 80%;
          height: 100%
        }
      `}</style>
    </div>
  )
}

export default Projects
