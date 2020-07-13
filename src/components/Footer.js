import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(() => ({
    footerGrid: {
        width: "100%",
        marginTop: "76px",
        textAlign: "center",
        backgroundColor: "white",
        boxShadow: '0 4px 5px 2px black',
    },
    typography: {
        margin: "2%",
    },
}));

const Footer = () => {
    const classes = useStyles();

    return (
        <Grid item id={"kontakt"} className={classes.footerGrid}>
            <Typography className={classes.typography} variant={"h3"} color={"primary"}>Kontakt</Typography>
            <Typography className={classes.typography} variant={"h4"}><b>Peter Skladaný</b></Typography>
            <Typography className={classes.typography} variant={"h5"}>+421 905 417 439</Typography>
            <Typography className={classes.typography} variant={"h5"}>038/539 28 22</Typography>
            <Typography className={classes.typography} variant={"h5"}>skladany.sps@gmail.com</Typography>
            <Typography className={classes.typography} variant={"h5"}><i>Topoľčianska 39/52,956 07 Veľké Ripňany</i></Typography>
            <Typography className={classes.typography} variant={"h5"}>© Copyright 2020 SPS-Skladaný - Všetky práva vyhradené</Typography>
        </Grid>
    );
}

export default Footer;
