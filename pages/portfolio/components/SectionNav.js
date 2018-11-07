const SectionNav = function(props) {
  let [ verticalScroll ] = useState(0);

  useEffect(
    () => {

    }
  );

  return (
    <div className='nav-container'>
      <Button
        start={0}
        end={50}
        duration={1000}
        icon='&#707;'
        scaleH={1}
        scaleV={1.25}
        klass='right-arrow'
        action={(() => {
            window.scrollTo({
              top: 385,
              left: 0,
              behavior: 'smooth'
            })
          }
        )}
      />
      <style jsx global>{`
        .nav-container {
          z-index: 5;
          position: relative;
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

export default SectionNav
