import React, { Component } from "react";

import footerJss from "./footerJss";

import {
    withStyles, IconButton 
} from "@material-ui/core/";

import GitHubIcon from '@material-ui/icons/GitHub';



class Footer extends Component {

    constructor(props){
        super();
    }
    
    render() {
        const {classes} = this.props;

        return(
             <footer className={classes.root}>
                 <footer className={classes.link}>
                 
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={"https://github.com/CodeRacoon"}
                    >
                        <IconButton className={classes.gitButton} aria-label="link">
                            <GitHubIcon />
                        </IconButton>
                    </a>
                    <h6>Formula One, Formula 1, F1 & Grand Prix are trademarks of Formula One Licensing BV.</h6>
                 </footer>
                 
            </footer>
        );
    }
}

export default withStyles(footerJss)(Footer);