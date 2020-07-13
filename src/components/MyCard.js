import React from "react";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    root: {
        width: "100%",
        height: "100%",
        display: 'flex',
        boxShadow: '0px 0px 1px 0px black',
    },
    details: {
        width: "50%",
        display: 'flex',
        textAlign: "center",
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    coverDiv: {
        padding: "16px",
        width: "50%",
    },
    cover: {
        width: "100%",
        height: "100%",
        display: "block",
    },
}));


const MyCard = (props) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                        {props.title}
                    </Typography>
                </CardContent>
            </div>
            <div className={classes.coverDiv}>
                <img className={classes.cover} src={props.path} alt={props.title}/>
            </div>
        </Card>
    );
}

export default MyCard;
