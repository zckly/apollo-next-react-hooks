import One from './One'
import Two from './Two'
import Three from './Three'

export default function Sections () {
  return (
    <div id='sections' className='sections'>
      <One />
      <Two />
      <Three />
      <style jsx global>{`
        .sections {
          height: 500px;
          width: 100%;
          margin-top: -18px;
          z-index: 5;
          position: relative;
        }
      `}</style>
    </div>
  )
}
