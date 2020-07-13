import React from "react";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import MobileMenu from "./MobileMenu";
import NavbarMenu from "./NavbarMenu";
import MenuButton from "./MenuButton";
import ReactCSSTransitionGroup from 'react-transition-group';

class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            toolbar: false,
        }
    }

    menuButtonClicked = () => {
        this.setState(prevState => {
            return {
                toolbar: !prevState.toolbar
            }
        });
    }

    render(){
        return (
            <Grid item container id={"#top"} alignItems={"center"} justify={"center"}>
                <AppBar>
                    <Grid item container justify={"space-around"} alignItems={"center"}>
                        <Grid item>
                            <Avatar src={require("../imgs/Logoplamienok.png")} alt={"Logo"}/>
                        </Grid>
                        <Grid item>
                            <Typography style={{color: "white"}} color={"inherit"} variant={"h5"}>Skladaný-SPS</Typography>
                        </Grid>
                        {this.props.screenWidth < 960 ?
                            <MenuButton
                                menuButtonClicked={this.menuButtonClicked}
                            /> :
                            <NavbarMenu
                                changeToCerts={this.props.changeToCerts}
                                changeToHomePage={this.props.changeToHomePage}
                            />}
                        {this.state.toolbar ?
                            <MobileMenu
                                menuButtonClicked={this.menuButtonClicked}
                                changeToCerts={this.props.changeToCerts}
                                changeToHomePage={this.props.changeToHomePage}
                            /> : null}    {/* Ked pouzivatel klikne na menu ikonku, tak sa zobrazi menu */}
                    </Grid>
                </AppBar>
            </Grid>
        );
    }
}

export default Header;
