import React from "react";
import Grid from "@material-ui/core/Grid";
import ATAGservis from "../certs/jpg/ATAGservis.jpg";
import ATTACKservis from "../certs/jpg/ATTACKservis.jpg";
import JUNKERSservis from "../certs/jpg/JUNKERSservis.jpg";
import QUANTUMservis from "../certs/jpg/QUANTUMservis.jpg";
import TechNickEUROGAS from "../certs/jpg/TechNickEUROGAS.jpg";
import VIEGA from "../certs/jpg/VIEGA.jpg";
import WOLFservis from "../certs/jpg/WOLFservis.jpg";
import WOLFvetranie from "../certs/jpg/WOLFvetranie.jpg";
import WOLFvykurovanie from "../certs/jpg/WOLFvykurovanie.jpg";

class Certs extends React.Component {
    createStyle = () => {
        return {
            width: "100%",
            height: "100%",
            borderRadius: "3px",
            boxShadow: '0px 1px 1px 0px black',
        }
    }

    render(){
        return (
            <Grid item container spacing={2} xs={12} md={10} style={{marginTop: "64px"}}>
                <Grid item xs={12} sm={6} md={4}>
                    <img src={WOLFservis} alt={"WOLF servis"} style={this.createStyle()}/>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <img src={WOLFvetranie} alt={"WOLF vetranie"} style={this.createStyle()}/>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <img src={WOLFvykurovanie} alt={"WOLF vykurovanie"} style={this.createStyle()}/>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <img src={ATAGservis} alt={"ATAG servis"} style={this.createStyle()}/>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <img src={ATTACKservis} alt={"ATTACK servis"} style={this.createStyle()}/>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <img src={JUNKERSservis} alt={"JUNKERS servis"} style={this.createStyle()}/>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <img src={QUANTUMservis} alt={"QUANTUM servis"} style={this.createStyle()}/>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <img src={TechNickEUROGAS} alt={"TechNickEUROGAS servis"} style={this.createStyle()}/>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <img src={VIEGA} alt={"VIEGA servis"} style={this.createStyle()}/>
                </Grid>
            </Grid>
        );
    }
}

export default Certs;
