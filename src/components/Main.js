import React from "react";
import Grid from "@material-ui/core/Grid";
import OnasArticle from "./OnasArticle";
import TreeCards from "./TreeCards";
import ImgAndTwoCards from "./ImgAndTwoCards";

const Main = (props) => {
    return (
        <Grid item container lg={10} md={12} style={{marginTop: "64px"}} justify={"space-around"} alignItems={"flex-start"}>
            {/* Functional component, ktory vyrenderuje jeden Grid item s jednym velkym obrazkom a dvomi malymi kartami */}
            <ImgAndTwoCards/>
            {/* Functional component, ktory vyrenderuje jeden Grid item s tromi malymi kartami */}
            <TreeCards/>
            {/* Functional component, ktory vyrenderuje jeden Grid item s nadpisom a textom, ktoreho marginRight sa meni podla screenWidth */}
            <OnasArticle screenWidth={props.screenWidth}/>
        </Grid>
    );
}

export default Main;
