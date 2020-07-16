import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    oNasStyle: {
        textAlign: "justify",
    },
    gridAboutUs: {
        padding: "10px",
        margin: "2%",
    },
    shadow: {
        margin: "10px",
    },
}));

// ak je sirky obrazovky vacsia ako 60px, tak sa celemu grid itemu zmeni marginRight
const oNasArticleMargin = (width) => {
    if (width > 600)
        return {marginRight: "30%"};
}

const OnasArticle = (props) => {
    const classes = useStyles();

    return (
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
    );
}

export default OnasArticle;
