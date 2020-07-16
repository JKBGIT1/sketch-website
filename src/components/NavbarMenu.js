import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import React from "react";

class NavbarMenu extends React.Component {
    constructor(props) {
        super(props);
    }
    // ak je hodnota page true, tak sa zobrazi domovska stranka
    // inak sa zobrazi stranka s certifikatmi
    // podla elementId sa zameria obrazovka na konretny element na stranke
    navButtonClicked = (elementId, page) => {
        if (page)
            this.props.changeToHomePage(elementId);
        else
            this.props.changeToCerts(elementId);
    }

    render(){
        const locationUrl = "https://www.google.com/maps/place/SPS+-+Peter+Skladan%C3%BD+plyn,+voda,+k%C3%BArenie/@48.5044866,17.9854988,15z/data=!4m5!3m4!1s0x0:0x3ecfa4a32a4a6f64!8m2!3d48.5044866!4d17.9854988";
        return (
            <Grid item>
                <Button
                    color={"inherit"}
                    style={{padding: "14px"}}
                    onClick={() => this.navButtonClicked("#top", true)}> {/* page=true, prepne sa na domovsku stranku, a zameria sa na element s id="top" */}
                    Domov
                </Button>
                <Button
                    color={"inherit"}
                    style={{padding: "14px"}}
                    onClick={() => this.navButtonClicked("#onas", true)}> {/* page=true, prepne sa na domovsku stranku, a zameria sa na element s id="onas" */}
                    O nás
                </Button>
                <Button
                    color={"inherit"}
                    style={{padding: "14px"}}
                    onClick={() => this.navButtonClicked("#top", false)}> {/* page=false, prepne sa na stranku s certifikatmi, a zameria sa na element s id="top" */}
                    Certifikáty
                </Button>
                <Button
                    color={"inherit"}
                    style={{padding: "14px"}}
                    onClick={() => this.navButtonClicked("#kontakt", true)}> {/* page=true, prepne sa na domovsku stranku, a zameria sa na element s id="kontakt" */}
                    Kontakt
                </Button>
                <Button
                    color={"inherit"}
                    style={{padding: "14px"}}
                    onClick={() => window.open(locationUrl, "_self")}> {/* Stranka sa zmeni na google maps s polohou firmy */}
                    Poloha
                </Button>
            </Grid>
        );
    }
}

export default NavbarMenu;
