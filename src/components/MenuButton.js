import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import React from "react";
import Grid from "@material-ui/core/Grid";

class MenuButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Grid item>
                {/* Ked kliknem na ikonu s menu, tak sa zobrazi alebo zavrie MobileMenu */}
                <IconButton color={"inherit"} onClick={this.props.menuButtonClicked}>
                    <MenuIcon fontSize={"large"}/>
                </IconButton>
            </Grid>
        );
    }
}

export default MenuButton;
