import Grid from "@material-ui/core/Grid";
import MyCard from "./MyCard";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    plynImg: {
        width: "100%",
        height: "100%",
        borderRadius: "3px",
        boxShadow: '0px 1px 5px 1px black',
    },
    gridPadding: {
        padding: "10px",
    },
}));

const ImgAndTwoCards = () => {
    const classes = useStyles();

    return (
        <Grid item container md={12}>
            <Grid item md={8} className={classes.gridPadding} >
                <img className={classes.plynImg} src={require("../imgs/plyn.jpg")} alt={"Šporák"}/>
            </Grid>
            <Grid item container md={4}>
                <Grid item xs={6} sm={6} md={12} className={classes.gridPadding} >
                    <MyCard title={"Kúrenie"} path={require("../icons/radiator.jpg")}/>
                </Grid>
                <Grid item xs={6} sm={6} md={12} className={classes.gridPadding} >
                    <MyCard title={"Vetranie"} path={require("../icons/vetranie.jpg")}/>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default ImgAndTwoCards;
