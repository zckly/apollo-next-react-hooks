export default function Three () {
  return (
    <div className='three'>
      <div className='three-container'>
        <div className='three-background'>

        </div>
      </div>
      <style jsx global>{`
        .three-container {
          height: 600px;
        }
        .three-background {
          background-image: linear-gradient(to bottom right, rgba(86,171,47,1), rgba(168,224,99,1));
          height: 450px;
        }

      `}</style>
    </div>
  )
}
