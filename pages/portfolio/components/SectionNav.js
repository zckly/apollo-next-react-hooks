import { useState, useEffect } from "react";
import Button from './Button'

export default function SectionNav () {
  let [ verticalScroll ] = useState(0);

  useEffect(
    () => {

    }
  );

  return (
    <div className='nav-container'>
      <Button />
      <Button />
      <style jsx global>{`
        .nav-container {
          float: right;
          margin-right: 50px;
          margin-top: 150px;
          height: 100px;
          width: 50px;
        }
      `}</style>
    </div>
  )
}
