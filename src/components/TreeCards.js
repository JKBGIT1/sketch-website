import Grid from "@material-ui/core/Grid";
import MyCard from "./MyCard";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    gridPadding: {
        padding: "10px",
    },
}));

const TreeCards = () => {
    const classes = useStyles();

    return (
        <Grid item container md={12} justify={"center"} alignItems={"center"}>
            <Grid item xs={6} sm={6} md={4} className={classes.gridPadding} >
                <MyCard title={"Plyn"} path={require("../icons/plyn.jpg")}/>
            </Grid>
            <Grid item xs={6} sm={6} md={4} className={classes.gridPadding} >
                <MyCard title={"Voda"} path={require("../icons/voda.jpg")}/>
            </Grid>
            <Grid item xs={6} sm={6} md={4} id={"onas"} className={classes.gridPadding} >
                <MyCard title={"Solárne panely"} path={require("../icons/panel.png")}/>
            </Grid>
        </Grid>
    );
}

export default TreeCards;
