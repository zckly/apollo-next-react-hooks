import Github from './links/Github';
import LinkedIn from './links/LinkedIn';

export default function Header () {
  return (
    <nav
      id='nav'
      style={{
        "top": "0px",
        "box-shadow" : "rgba(0,0,0,.24) 0px 2px 6px 0px"
      }}
    >
    <a id="logo" href="#home">
      <img
        src="https://s3-us-west-2.amazonaws.com/beb-ui/helmet.gif"
        style={{
          "width" : "100%",
          "height" : "100%"
        }}
      />
    </a>
    <div className='links'>
      <a href="https://www.github.com"><Github /></a>
      <a href="https://www.linkedin.com"><LinkedIn /></a>
    </div>
      <style jsx global>{`
        #nav {
          display: block;
          position: fixed;
          height: 70px;
          z-index: 7;
          width: 100%;
          clear: both;
          background: #212121;
        }
        #logo {
          height: 40px;
          width: 40px;
          display: block;
          position: absolute;
          left: 20px;
          padding: 15px;
        }
        .links {
          float: right;
          padding-right: 40px;
          padding-top: 10px;
          height: 35px;
          width: 250px;
        }
      `}</style>
    </nav>
  )
}
