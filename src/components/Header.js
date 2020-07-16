import React from "react";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import MobileMenu from "./MobileMenu";
import NavbarMenu from "./NavbarMenu";
import MenuButton from "./MenuButton";

class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            mobileMenu: false, // na zaciatku sa nikdy nezobrazi MobileMenu, preto je inicializovana hodnota na false
        }
    }

    // funckia zabezpecuje zobrazovanie a zatvaranie MobileMenu pre mensie zariadenie po kliknuti na menu ikonu
    menuButtonClicked = () => {
        // hodnota mobileMenu v this.state sa meni vzdy na opacnu po kliknuti na ikonu, co zabezpecuje zobrazovanie a zatvaranie
        this.setState(prevState => {
            return {
                mobileMenu: !prevState.mobileMenu
            }
        });
    }

    render(){
        // funkcia vrati AppBar, ktorom sa nachadza Grid containere s Grid itemami pre Logo, Nazov firmy a navbar menu/menu ikonou
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
                        {/* Ak je sirka obrazovky mensia ako 960px, tak sa zobrazi menu ikona namiesto navbar menu */}
                        {this.props.screenWidth < 960 ?
                            <MenuButton
                                menuButtonClicked={this.menuButtonClicked}
                            /> :
                            <NavbarMenu
                                changeToCerts={this.props.changeToCerts}
                                changeToHomePage={this.props.changeToHomePage}
                            />}
                        {/* Ak je hodnota mobileMenu true, tak sa zobrazi menu pre mensie zariadenia v opacnom pripade sa nezobrazi nic */}
                        {/* Ovlada sa to pomocou klikania na menu ikonu */}
                        {this.state.mobileMenu ?
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
