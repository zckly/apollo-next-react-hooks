export default function One () {
  return (
    <div className='one'>
      <div className='one-container'>
        <div className='one-background'>
          Here
        </div>
      </div>
      <style jsx global>{`
        .one {
          margin-top: -25px;
        }
        .one-container {
          height: 600px;
        }
        .one-background {
          background-image: linear-gradient(to bottom right, rgba(53,133,156,1), rgba(123,189,212,1));
          height: 450px;
        }
      `}</style>
    </div>
  )
}
