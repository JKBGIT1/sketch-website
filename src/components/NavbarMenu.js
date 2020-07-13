import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import React from "react";

class NavbarMenu extends React.Component {
    constructor(props) {
        super(props);
    }

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
                    onClick={() => this.navButtonClicked("#top", true)}>
                    Domov
                </Button>
                <Button style={{padding: "14px"}} color={"inherit"} onClick={() => this.navButtonClicked("#onas", true)}>O nás</Button>
                <Button style={{padding: "14px"}} color={"inherit"} onClick={() => this.navButtonClicked("#top", false)}>Certifikáty</Button>
                <Button style={{padding: "14px"}} color={"inherit"} onClick={() => this.navButtonClicked("#kontakt", true)}>Kontakt</Button>
                <Button style={{padding: "14px"}} color={"inherit"} onClick={() => window.open(locationUrl, "_self")}>Poloha</Button>
            </Grid>
        );
    }
}

export default NavbarMenu;
