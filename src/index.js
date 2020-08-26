import React from "react";
import ReactDOM from "react-dom";
import Grid from "@material-ui/core/Grid";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Certs from "./components/Certs";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import {Breakpoints as breakpoints} from "@material-ui/core/styles/createBreakpoints";
import Slide from "@material-ui/core/Slide";

const defaultTheme = createMuiTheme();
const theme = createMuiTheme({
    breakpoints,
    overrides: {
        MuiTypography: {
            h3: {
                fontSize: "2.6rem",
                [defaultTheme.breakpoints.up("sm")]: {
                    fontSize: "3rem"
                }
            },
            h4: {
                fontSize: "1.7rem",
                [defaultTheme.breakpoints.up("sm")]: {
                    fontSize: "2.125rem"
                }
            },
            h5: {
                fontSize: "1.2rem",
                [defaultTheme.breakpoints.up("sm")]: {
                    fontSize: "1.5rem"
                }
            }
        }
    }
})

class App extends React.Component {
    state = {
        certs: false, // podla tohto viem, ci sa nachadzam na domovskej stranke alebo na stranke s certifikatmi
        elementId: null, // podla Id elementu sa meni zameriavania screenu
        screenWidth: window.innerWidth, // potrebne na responzivitu stranky
    }
    // vzdy ked sa updatne tento komponent, tak sa vykona tato funkcia
    // funkcia zameria obrazovku na id elementu, ktory je v this.state.elementId
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.elementId)
            window.location.href = this.state.elementId
    }
    // ked sa "rozpusti" komponent, tak sa mu odobere listener
    UNSAFE_componentWillMount(){
        window.removeEventListener("resize", this.resize.bind(this));
    }
    // ked sa vyrenderuje komponent, tak sa mu prida listener
    componentDidMount(){
        window.addEventListener("resize", this.resize.bind(this));
    }
    // zmena premenej elementId, ktora sa nachadza v state
    elementIdSet = (elId) => this.setState({elementId: elId});
    // zmena premenej screenWidth, vykona sa vzdy pri zmene sirky
    resize = () => this.setState({screenWidth: window.innerWidth});
    // prepne sa na stranku s certifikatmi, pricom prebehne aj zameranie obrazovky
    changeToCerts = (elId) => {
        this.elementIdSet(elId);
        this.setState({certs: true});
    }
    // prepne sa na homepage, pricom prebehne aj zameranie obrazovky
    changeToHomePage = (elId) => {
        this.elementIdSet(elId);
        this.setState({certs: false});
    }

    render(){
        return (
            <MuiThemeProvider theme={theme}> {/* V tejto theme su zmenene velkosti nadpisov podla breakpointov */}
            <Slide in={true} direction={"bottom"} timeout={1000}>
                <Grid container id={"#top"} direction={"column"} justify={"center"} alignItems={"center"}>
                    <Header
                        screenWidth={this.state.screenWidth}
                        changeToCerts={this.changeToCerts}
                        changeToHomePage={this.changeToHomePage}
                    />
                    {/* Ak chcem ist na stranku s certifikatmi, tka sa vyrenderuju certifikaty, v opacnom pripade sa vyrenderuje klasicky main pre homepage */}
                    {!this.state.certs ? <Main screenWidth={this.state.screenWidth}/>: <Certs/>}
                    {/* Ak som na homepage, tak sa vyrenderuje Footer, pre stranku s certifikatmi sa vyrenderuje nic */}
                    {!this.state.certs ? <Footer/> : null}
                </Grid>
            </Slide>
            </MuiThemeProvider>
        );
    }
}

ReactDOM.render(<App/> , document.getElementById("root"));
