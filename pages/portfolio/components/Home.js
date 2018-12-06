import Rocket from './Rocket';

// <img className='cat' src='https://s3-us-west-2.amazonaws.com/beb-ui/kitten_green.png' />


export default function Home () {
  return (
    <section
      id='home'
      style={{ "height": "570px" }}
    >
      <div
        className='text'
        style={{ "top" : "171px"}}
      >
        <Rocket />
        <h1 className='headline'>
          Hi! I'm
          <span className='name'> Brian E. Bill</span>
        </h1>
        <h4 className='sub-headline'>Technophile •• Science Fiction Geek</h4>
      </div>
      <style jsx global>{`
        #home {
          position: fixed;
          text-align: center;
          z-index:0;
          background: rgba(20,20,20,1);
          color: rgba(255,255,255,.9);
          width: 100%;
        }
        .name {
          color: #6694BD;
          font-weight: 200;
        }
        .text {
          margin: auto;
          position: absolute;
          width: 100%;
        }
        .cat {
          width: 200px;
        }
        .headline {
          font-size: 26px;
          margin-top: 20px;
        }
        .sub-headline {
          color: #3271A7;
          font-size: 15.78px;
          margin-top: -17px;
        }
      `}</style>
    </section>
  )
}
