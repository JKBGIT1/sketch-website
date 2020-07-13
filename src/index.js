import React from "react";
import ReactDOM from "react-dom";
import Grid from "@material-ui/core/Grid";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Certs from "./components/Certs";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import {Breakpoints as breakpoints} from "@material-ui/core/styles/createBreakpoints";

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
        certs: false,
        elementId: null,
        screenWidth: window.innerWidth,
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.elementId)
            window.location.href = this.state.elementId
    }

    UNSAFE_componentWillMount(){
        window.removeEventListener("resize", this.resize.bind(this));
    }

    componentDidMount(){
        window.addEventListener("resize", this.resize.bind(this));
    }

    elementIdSet = (elId) => this.setState({elementId: elId});

    resize = () => this.setState({screenWidth: window.innerWidth});

    changeToCerts = (elId) => {
        this.elementIdSet(elId);
        this.setState({certs: true});
    }

    changeToHomePage = (elId) => {
        this.elementIdSet(elId);
        this.setState({certs: false});
    }

    render(){
        return (
            <MuiThemeProvider theme={theme}>
                <Grid container id={"#top"} direction={"column"} justify={"center"} alignItems={"center"}>
                    <Header
                        screenWidth={this.state.screenWidth}
                        changeToCerts={this.changeToCerts}
                        changeToHomePage={this.changeToHomePage}
                    />
                    {!this.state.certs ? <Main screenWidth={this.state.screenWidth}/>: <Certs/>}
                    {!this.state.certs ? <Footer/> : null}
                </Grid>
            </MuiThemeProvider>
        );
    }
}

ReactDOM.render(<App/> , document.getElementById("root"));
