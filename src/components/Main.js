import React from "react";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from '@material-ui/core/styles';
import MyCard from "./MyCard";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
    plynImg: {
        width: "100%",
        height: "100%",
        borderRadius: "3px",
        boxShadow: '0px 1px 5px 1px black',
    },
    oNasStyle: {
        textAlign: "justify",
    },
    gridPadding: {
        padding: "10px",
    },
    mainGrid: { // separate AppBar from main content
        marginTop: "64px",
    },
    gridAboutUs: {
        padding: "10px",
        margin: "2%",
    },
    shadow: {
        margin: "10px",
    },
}));

const oNasArticleMargin = (width) => {
    if (width > 600)
        return {marginRight: "30%"};
}

const Main = (props) => {
    const classes = useStyles();

    return (
        <Grid item container lg={10} md={12} className={classes.mainGrid} justify={"space-around"} alignItems={"flex-start"}>
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
            <Grid item container md={12} className={classes.shadow}>
                <Grid item md={10} className={classes.oNasStyle} style={oNasArticleMargin(props.screenWidth)}>
                    <Typography className={classes.gridAboutUs} color={"primary"} variant={"h3"}>O nás</Typography>
                    <Typography className={classes.gridAboutUs} variant={"h5"}>Na Slovenskom trhu podnikáme už od roku 1995.
                        Zameriavame sa na <b>kompletnú montáž/servis plynu, vody, kúrenia, vetrania a solárnych systémov.</b>
                        V uvedených oblastiach sa pravidelne vzdelávame,
                        zúčastňujeme sa na aktualizačných - odborných školeniach ktoré sledujú najnovšie trendy a poznatky.
                        Sme dlhoroční partneri a odberateľia kvalitných a osvedčených značiek (nie len kotlov)
                        a preto vieme naším zákazníkom ponúknuť výhodné ceny nie len pri ich kúpe a inštalácií ale i v pozáručnom servise.
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Main;
