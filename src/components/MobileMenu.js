import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import React from "react";

class MobileMenu extends React.Component {
    constructor(props) {
        super(props);
    }

    websiteNavigation = (elementId, page) => {
        this.props.menuButtonClicked();
        if (page)
            this.props.changeToHomePage(elementId);
        else
            this.props.changeToCerts(elementId);
    }

    render(){
        const locationUrl = "https://www.google.com/maps/place/SPS+-+Peter+Skladan%C3%BD+plyn,+voda,+k%C3%BArenie/@48.5044866,17.9854988,15z/data=!4m5!3m4!1s0x0:0x3ecfa4a32a4a6f64!8m2!3d48.5044866!4d17.9854988";
        const myStyle = {
            padding: "14px",
            width: "100%",
        }

        return (
            <Grid item container direction={"column"} alignItems={"center"}>
                <Button style={myStyle} color={"inherit"} onClick={() => this.websiteNavigation("#top", true)}>Domov</Button>
                <Button style={myStyle} color={"inherit"} onClick={() => this.websiteNavigation("#onas", true)}>O nás</Button>
                <Button style={myStyle} color={"inherit"} onClick={() => this.websiteNavigation("#top", false)}>Certifikáty</Button>
                <Button style={myStyle} color={"inherit"} onClick={() => this.websiteNavigation("#kontakt", true)}>Kontakt</Button>
                <Button style={myStyle} color={"inherit"} onClick={() => window.open(locationUrl, "_self")}>Poloha</Button>
            </Grid>
        )
    }
}

export default MobileMenu;
