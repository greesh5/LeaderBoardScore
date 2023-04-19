
import 'materialize-css/dist/css/materialize.min.css';

export default function About(){  
      return(
        <>
      <div >
        <img src="https://ijclp.com/wp-content/uploads/2021/10/Sports.jpg" style={{width:"100%",height:"400px"}}></img>
      </div>
      <div style={{ display: "flex", flexDirection: "column", flex: "1" }}>
          <footer style={{ background: "#62CDFF", textAlign: "center" }}>
            <h4>OUR MEDIA</h4>
            <ul style={{ cursor: "pointer" }}>
              <li><p>youtube:   @bcciofficial</p></li>
              <li><p>Twitter:   @BCCI</p></li>
              <li><p>Facebook:   @IndianCricketTeam</p></li>
            </ul>
          </footer>
        </div>
        </>
      );
    };
