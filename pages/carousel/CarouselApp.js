import React, {
  useState,
  useReducer,
  useEffect,
  useRef
} from "react";

import {
  FaPlay,
  FaPause,
  FaForward,
  FaBackward
} from "react-icons/fa";

import slides from "./whatevs/slides";
import useProgress from "./useProgress";

let SLIDE_DURATION = 3000;

function Carousel(props) {
  if (typeof window == 'undefined') { return null }
  return (
    <section className="Carousel" {...props} />
  );
}

function Slides(props) {
  if (typeof window == 'undefined') { return null }
  return (
    <div>
      <ul {...props} />
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          padding: 0;
          font-family: sans-serif;
          background: #ddd;
        }

        a {
          color: blue;
        }

        [aria-current="page"] {
          color: red;
        }

        .Carousel {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
        }
        .SlideNav {
          position: absolute;
          bottom: 36px;
          left: 20px;
          display: flex;
          padding: 0;
          justify-content: center;
          list-style-type: none;
        }
        .Controls {
          position: absolute;
          right: 20px;
          bottom: 50px;
          display: flex;
          justify-content: center;
        }
      `}</style>
    </div>
  )
}

function Slide({
    isCurrent,
    takeFocus,
    image,
    id,
    title,
    children
  }) {
  if (typeof window == 'undefined') { return null }
  let ref = useRef();

  useEffect(
    () => {
      if (isCurrent && takeFocus) {
        ref.current.focus();
      }
    },
    [isCurrent, takeFocus]
  );

  return (
    <li
      ref={ref}
      aria-hidden={!isCurrent}
      tabIndex="-1"
      aria-labelledby={id}
      className="Slide"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="SlideContent">
        <h2 id={id}>{title}</h2>
        {children}
      </div>
      <style jsx global>{`
        .Slide {
          opacity: 1;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          list-style-type: none;
          transition: opacity 200ms ease;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center center;
        }

        .Slide[aria-hidden="true"] {
          opacity: 0;
          transition-delay: 200ms;
          z-index: -1;
        }

        .SlideContent {
          background: hsla(0, 0%, 0%, 0.5);
          font-weight: 100;
          text-shadow: 0px 0px 5px hsla(0, 0%, 0%, 1);
          color: white;
          max-width: 500px;
          padding: 20px;
          margin-left: 20px;
          margin-top: 20px;
        }
      `}</style>
    </li>
  );
}

function SlideNav(props) {
  if (typeof window == 'undefined') { return null }
  return <ul className="SlideNav" {...props} />;
}

function SlideNavItem({ isCurrent, ...props }) {
  if (typeof window == 'undefined') { return null }
  return (
    <li className="SlideNavItem">
      <button {...props} aria-current={isCurrent}>
        <span />
      </button>
      <style jsx global>{`
          .SlideNavItem > button {
            all: unset;
            cursor: pointer;
            border-radius: 50%;
            height: 2em;
            width: 2rem;
            margin: 5px;
            outline: none;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: transparent;
          }

          .SlideNavItem > button:focus-visible {
            background-color: hsla(0, 100%, 100%, 0.33);
          }

          .SlideNavItem > button > span {
            background: hsla(0, 100%, 100%, 0.25);
            display: inline-block;
            border-radius: 50%;
            height: 1rem;
            width: 1rem;
          }

          .SlideNavItem > button[aria-current="true"] > span {
            background: hsla(0, 100%, 100%, 0.75);
          }
      `}</style>
    </li>
  );
}

function Controls(props) {
  if (typeof window == 'undefined') { return null }
  return (
    <div className="Controls" {...props} />
  )
}

function IconButton(props) {
  if (typeof window == 'undefined') { return null }
  return (
    <div>
      <button {...props} className="IconButton" />
      <style jsx global>{`
        .IconButton {
          border: none;
          background: none;
          display: inline-block;
          padding: 0;
          width: 3rem;
          height: 3rem;
          line-height: 1.8rem;
          font-size: 2rem;
          text-align: center;
          background-color: transparent;
          color: hsla(0, 100%, 100%, 0.5);
          outline: none;
        }

        button:active {
          position: relative;
          top: 1px;
          left: 1px;
        }

        .IconButton:focus-visible {
          color: hsla(0, 100%, 100%, 0.75);
          background-color: hsla(0, 100%, 100%, 0.33);
        }
      `}</style>
    </div>
  );
}

function ProgressBar({ animate, time }) {
  if (typeof window == 'undefined') { return null }
  let progress = useProgress(animate, time);

  return (
    <div className="ProgressBar">
      <div
        style={{ width: `${progress * 100}%` }}
      />
      <style jsx global>{`
        .ProgressBar {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
        }

        .ProgressBar > div {
          background-color: hsla(0, 100%, 100%, 0.25);
          height: 20px;
        }

      `}</style>
    </div>
  );
}

export default function CarouselApp() {
  if (typeof window == 'undefined') { return null }
  let [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "NEXT":
        case "PROGRESS":
          return {
            ...state,
            isPlaying: action.type === "PROGRESS",
            currentIndex:
              (state.currentIndex + 1) %
              slides.length
          };
        case "PAUSE":
          return {
            ...state,
            isPlaying: false
          };
        case "PLAY":
          return {
            ...state,
            isPlaying: true
          };
        case "PREV":
          return {
            ...state,
            currentIndex:
              (state.currentIndex -
                1 +
                slides.length) %
              slides.length,
            isPlaying: false
          };
        case "GOTO":
          return {
            ...state,
            takeFocus: true,
            currentIndex: action.index
          };
        case "UNSET_FOCUS":
          return {
            ...state,
            takeFocus: false
          };
        default:
          return state;
      }
    },
    {
      currentIndex: 0,
      isPlaying: false,
      takeFocus: false
    }
  );

  useEffect(
    () => {
      if (state.isPlaying) {
        let timeout = setTimeout(() => {
          dispatch({ type: "PROGRESS" });
        }, SLIDE_DURATION);
        return () => clearTimeout(timeout);
      }
    },
    [state.currentIndex, state.isPlaying]
  );

  useEffect(
    () => {
      if (state.takeFocus) {
        dispatch({ type: "UNSET_FOCUS" });
      }
    },
    [state.takeFocus]
  );

  return (
    <Carousel aria-label="Images from Space">
      <Slides>
        {slides.map((image, index) => (
          <Slide
            key={index}
            id={`image-${index}`}
            image={image.img}
            title={image.title}
            isCurrent={index === state.currentIndex}
            takeFocus={state.takeFocus}
            children={image.content}
          />
        ))}
      </Slides>

      <SlideNav>
        {slides.map((slide, index) => (
          <SlideNavItem
            key={index}
            isCurrent={index === state.currentIndex}
            aria-label={`Slide ${index + 1}`}
            onClick={() => {
              dispatch({ type: "GOTO", index });
            }}
          />
        ))}
      </SlideNav>

      <Controls>
        {state.isPlaying ? (
          <IconButton
            aria-label="Pause"
            onClick={() => {
              dispatch({ type: "PAUSE" });
            }}
            children={<FaPause />}
          />
        ) : (
          <IconButton
            aria-label="Play"
            onClick={() => {
              dispatch({ type: "PLAY" });
            }}
            children={<FaPlay />}
          />
        )}
        <IconButton
          aria-label="Previous Slide"
          onClick={() => {
            dispatch({ type: "PREV" });
          }}
          children={<FaBackward />}
        />
        <IconButton
          aria-label="Next Slide"
          onClick={() => {
            dispatch({ type: "NEXT" });
          }}
          children={<FaForward />}
        />
      </Controls>

      <ProgressBar
        key={state.currentIndex + state.isPlaying}
        time={SLIDE_DURATION}
        animate={state.isPlaying}
      />

    </Carousel>
  );
}
