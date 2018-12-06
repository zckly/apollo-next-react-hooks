export default function Contact () {
  return (
    <div
      id='contact'
      style={{
        "zIndex" : 3,
        "backgroundColor": "rgba(0,0,0,1)",
        "position": "relative",
        "marginTop": "-20px",
        "paddingTop": "170px",
        "textAlign" : "center"
      }}
    >
      <h2>Contact Brian</h2>
      <p>310-490-2250</p>
      <p>brianeebill@gmail.com</p>
      <a href="#">Download resumé</a>
      <style jsx global>{`
        #contact {
          height: 500px;
          width: 100%;
          color: rgba(255,255,255,1);
        }
      `}</style>
    </div>
  )
}
