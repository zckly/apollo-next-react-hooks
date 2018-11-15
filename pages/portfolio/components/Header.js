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
        src="https://s3-us-west-2.amazonaws.com/beb-ui/danger-cat.gif"
        style={{ "width" : "70px", "height" : "70px" }}
      />
    </a>
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
          height: 70px;
          width: 70px;
          display: block;
          position: absolute;
          left: 50%;
          margin-left: -35px;
        }
      `}</style>
    </nav>
  )
}
