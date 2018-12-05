import React, {
  useState,
  useReducer,
  useEffect,
  useRef
} from "react";
// import useWindowScrollPosition from './hooks/useWindowScrollPosition'
import projects from "./data/projects";
import Button from './components/Button';
import Header from './components/Header';
import Home from './components/Home';
import Contact from './components/Contact';

function HomeSpacer(props) {
  return (
    <div
      id="home-spacer"
      style={{ "height" : "570px" }}
    >
      <style jsx global>{`
        #home-spacer {
          position: relative;
          overflow: hidden;
          z-index: 1;
          max-width: 1px;
        }
      `}</style>
    </div>
  )
}

const Project = function({
  isCurrent,
  img,
  bg,
  description,
  id
}) {
  if (isCurrent) {
    console.log(bg)
    return (
      <div
        className='holder'
        style={{
          "height" : "520px",
          "boxShadow" : "rgba(0,0,0,.24) 0px 2px 6px 0px",
          "zIndex": '-1',
          "marginTop": "-50px",
          "position": "relative",
          "background" : bg,
          "overflow": "visible"
        }}
      >
        <div
          className='project'
          id={id}
          style={{
            "width" : '100%',
            "top": 0,
            "left": 0,
            "position": "absolute",
            "zIndex": '0',
            "opacity" : isCurrent ? 1 : 0,
            "zIndex" : isCurrent ? 1 : -1
          }}
        >
          <div className='project-description'>
            <div className='project-description-text'>
              <h2>{description}</h2>
            </div>
          </div>
          <div className='project-image-container'>
            <img
              className='project-image'
              src={img}
              style={{ "height" : "100%" }}
            />
          </div>
        </div>

        <style jsx global>{`
          .project {
            height: 640px;
            overflow: hidden;
            transition: opacity 1s, z-index 1s, display 1s;
          }
          .project-description {
            width: 40%;
            height: 640px;
            color: rgba(255,255,255,.65);
            position: absolute;
            left: 0;
          }
          .project-description-text {
            top: 166px;
            padding-left: 20%;
            padding-right: 5%;
            position: absolute;
            width: 100%;
          }
          .project-image-container {
            width: 60%;
            position: absolute;
            left: 40%;
            height: 640px;
          }
          .project-image
            display: block;
            vertical-align: middle;
            border: 0;
          }
        `}</style>
      </div>
    )
  } else { return false }
}

const Portfolio = function() {
  let [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "NEXT":
          return {
            ...state,
            currentIndex: (state.currentIndex + 1 + projects.length) % projects.length,
            // isPlaying: false
          };
          case "PREV":
            return {
              ...state,
              currentIndex: (state.currentIndex - 1 + projects.length) % projects.length,
              // isPlaying: false
            };

        // case "PROGRESS":
        //   return {
        //     ...state,
        //     isPlaying: action.type === "PROGRESS",
        //     currentIndex: (state.currentIndex + 1) % slides.length
        //   };
        // case "PAUSE":
        //   return {
        //     ...state,
        //     isPlaying: false
        //   };
        // case "PLAY":
        //   return {
        //     ...state,
        //     isPlaying: true
        //   };

        // case "GOTO":
        //   return {
        //     ...state,
        //     takeFocus: true,
        //     currentIndex: action.index
        //   };
        // case "UNSET_FOCUS":
        //   return {
        //     ...state,
        //     takeFocus: false
        //   };
        default:
          return state;
      }
    },
    {
      currentIndex: 0,
      // isPlaying: false,
      // takeFocus: false

    }
  );

  // const [buttonOneOpacity, setButtonOneOpacity] = useState(1);
  // const [clickedButtonOne, setClickedButtonOne] = useState(false);
  // useEffect(() => {
  //     clickedButtonOne ? setButtonOneOpacity(0) : setButtonOneOpacity(1)
  //   }, [clickedButtonOne]
  // );
  //
  // const [projectsNavOpacity, setProjectsNavOpacity] = useState(0);
  // useEffect(
  //   () => {
  //     clickedButtonOne ? setProjectsNavOpacity(1) : setProjectsNavOpacity(0);
  //   }, []
  // );
  //
  // useEffect(
  //   () => {
  //     if (window.pageYOffset > 320 && window.pageYOffset < 600) {
  //       setProjectsNavOpacity(1)
  //
  //     } else {
  //       setProjectsNavOpacity(0)
  //
  //     }
  //   }, []
  // )

  useEffect(
    () => {
      console.log(state)
    }, []
  );

  return (
    <div id='app'>
      <Header/>
      <Home/>
      <HomeSpacer/>
      <section
        id='projects'
        style={{
          "height" : "640px",
          "zIndex": "0"
        }}
      >

        <Button
          opacity={1}
          id='button'
          start={0}
          end={50}
          duration={1000}
          icon='&#709;'
          scaleH={1.25}
          scaleV={1}
          klass='down-arrow'
          position='absolute'
          left='48.5%'
          zIndex={5}
          marginTop='-25px'
          action={(() => {
              window.scrollTo({
                top: 500,
                left: 0,
                behavior: 'smooth'
              })
            }
          )}
        />

        {projects.map((project, index) => (
          <Project
            key={index}
            id={`project-${index}`}
            bg={project.bg}
            img={project.img}
            description={project.description}
            isCurrent={index === state.currentIndex}
            ariaHidden={(index != state.currentIndex).toString()}
          />
        ))}

        <div
          className='nav-container'
          style={{
            "zIndex" : "5",
            "position": "absolute",
            "right": "75px",
            "top": "120px"
          }}
        >
          <Button
            opacity=".8"
            icon='&#706;'
            scaleH={1}
            scaleV={1.25}
            klass='left-arrow'
            top='100px'
            action={(() => {
                dispatch({ type: "PREV" });
                //get index
                //position previous project (index-1 unless index === 0) to left
                //transition position between current project and previous
                //transition bg color
              }
            )}
          />
          <Button
            opacity=".8"
            icon='&#707;'
            scaleH={1}
            scaleV={1.25}
            klass='right-arrow'
            top='25px'
            action={(() => {
                dispatch({ type: "NEXT" });
                //get index
                //position next project to right
                //transition position between current project and next
                //transition bg color
              }
            )}
          />
        </div>

      </section>
      <style jsx global>{`
        #app {
          position: absolute;
          overflow: hidden;
          width:100%;
        }
        #projects {
          background: rgba(255,255,255,1);
          z-index:6;
          position: relative;
          height: 512px;
        }
        .holder {
          height: 512px;
          position: relative;
          width: 100%;
        }
      `}</style>
    </div>
  )
}

export default Portfolio
