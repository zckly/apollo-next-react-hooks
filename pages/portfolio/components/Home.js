export default function Home () {
  return (
    <div className='home'>
      <div className='cat-container'>
        <img className='cat' src='https://s3-us-west-2.amazonaws.com/beb-ui/kitten_green.png' />
      </div>
      <h1 className='headline'>
        Hi! I'm
        <span className='name'> Brian E. Bill</span>
      </h1>
      <h4 className='sub-headline'>Front End/UI Developer from San Diego</h4>
      <style jsx global>{`
        .home {
          text-align: center;
          z-index:-10;
          background: rgba(20,20,20,1);
          color: rgba(255,255,255,.9);
          height: 500px;
        }
        .name {
          color: rgba(123,189,212,1);
          font-weight: 200;
        }
        .cat-container {
          margin: auto;
          padding-top:80px;
        }
        .cat {
          width: 200px;
        }
        .headline {
          font-size: 26px;
          margin-top: 10px;
        }
        .sub-headline {
          color: rgba(255,255,255,0.8);
          font-size: 17px;
          margin-top: -10px;
        }
      `}</style>
    </div>
  )
}
