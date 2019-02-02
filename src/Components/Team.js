import React from "react";
import kathleen from "./kathleen.jpg";
import paloma from "./paloma.png";
import marco from "./marco.jpg";
import will from "./will.jpg"
import Grid from '@material-ui/core/Grid';
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

class Team extends React.Component {
    render() {
        const styles = {
            borderRadius: "50%",
            height: "150px",
            marginBottom: "10px"
        };

        const pstyle = {
            textAlign: "center",
            fontSize: '17px',
        };

        return <div>
            <h1> Meet the Team </h1>
            <Grid container spacing={24}>
                <Grid item xs={6}>
                    <p style={pstyle}> Will </p>
                    <img src={will} style={styles} />
                    <br />
                    <p style={pstyle}> AR Developer
                    </p>
                    <a style={{ color: "white" }} href="https://www.linkedin.com/in/williamx98/">
                        <FontAwesomeIcon style={{ marginRight: "10px", color: "black"  }} icon={["fab", "linkedin"]} />
                    </a>
                    <a style={{ color: "white" }} href="https://github.com/williamx98">
                        <FontAwesomeIcon icon={["fab", "github"]} style={{ color: "black" }}/>
                    </a>
                </Grid>
                <Grid item xs={6}>
                    <p style={pstyle}> Kathleen </p>
                    <img src={kathleen} style={styles} />
                    <br />
                    <p style={pstyle}>
                        Website Developer
                    </p>
                    <a style={{ color: "white" }} href="https://www.linkedin.com/in/kathleen-doviken/">
                        <FontAwesomeIcon style={{ marginRight: "10px", color: "black"}} icon={["fab", "linkedin"]}/>
                    </a>
                    <a style={{ color: "white" }} href="https://github.com/kathdovi">
                        <FontAwesomeIcon icon={["fab", "github"]} style={{ color: "black" }}/>
                    </a>
                </Grid>
                <Grid item xs={6}>
                    <p style={pstyle}> Marco </p>
                    <img src={marco} style={styles} />
                    <br />
                    <p style={pstyle}> UX/UI & Graphics Designer </p>
                    <a style={{ color: "white" }} href="https://www.linkedin.com/in/marco-guajardo/?fbclid=IwAR0tJofsMB-C-BD9TTLXzvbqqj_ZlSa76jO9BJFIfFizhC7agQV7wEWMu3o">
                        <FontAwesomeIcon style={{ color: "black" }} icon={["fab", "linkedin"]}/>
                    </a>
                </Grid>
                <Grid item xs={6}>
                    <p style={pstyle}> Paloma </p>
                    <img src={paloma} style={styles} />
                    <br />
                    <p style={pstyle}> Content Developer </p>
                    <a style={{ color: "white" }} href="https://www.linkedin.com/in/paloma-june-085317124/">
                        <FontAwesomeIcon style={{ color: "black" }} icon={["fab", "linkedin"]}/>
                    </a>
                </Grid>
            </Grid>
        </div>;
    }
};

export default (Team);