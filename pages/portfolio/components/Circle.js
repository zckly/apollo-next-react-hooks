export default function Circle(props) {
  let h = props.scaleH;
  let v = props.scaleV;
  return (
    <div className='circle'>
      <div className={props.klass} style={{"transform" : `scale(${h},${v})`}}>{props.icon}</div>
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
          box-shadow: 0 5px 5px rgba(33,33,33,1);
        }
        .down-arrow {
          padding: 10px;
          color: rgba(20,20,20,1);
          font-size: 36px;
          font-family: helvetica;
        }
        .right-arrow {
          padding: 9px 0 0 3px;
          color: rgba(20,20,20,1);
          font-size: 36px;
          font-family: helvetica;
          clear: both;
        }
        .left-arrow {
          padding: 9px 0 0 0;
          color: rgba(20,20,20,1);
          font-size: 36px;
          font-family: helvetica;
          clear: both;
        }
        .up-arrow {
          padding: 10px;
          color: rgba(20,20,20,1);
          font-size: 36px;
          font-family: helvetica;
        }
      `}</style>
    </div>
  )
}
