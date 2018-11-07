export default function Circle(props) {
  return (
    <div className='circle'>
      <div className='down-arrow'>{props.icon}</div>
      <style jsx global>{`
        .circle {
          background: rgba(255,255,255,1);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          text-align: center;
          transition: box-shadow .3s;
          transition: opacity 0.5s;
        }
        .circle:hover {
          box-shadow: 0 5px 15px rgba(33,33,33,1);
        }
        .down-arrow {
          padding: 10px;
          color: rgba(20,20,20,1);
          font-size: 36px;
          transform:scale(1.25,1);
          font-family: helvetica;
        }
      `}</style>
    </div>
  )
}
