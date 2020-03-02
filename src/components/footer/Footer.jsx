import React, { Component } from "react";
import clsx from "clsx";

import styling from "./styling";

import {
    withStyles, IconButton 
} from "@material-ui/core/";

import GitHubIcon from '@material-ui/icons/GitHub';



class Footer extends Component {

    constructor(props){
        super();
    }
    
    render() {
        const c = this.props.classes;

        return(
             <footer className={c.Footer}>
                 <footer className={clsx(c.Footer__link, c.Footer__contents)}>
                 
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={"https://github.com/CodeRacoon"}
                    >
                        <IconButton className={c.Footer___rgbShadow} aria-label="link">
                            <GitHubIcon />
                        </IconButton>
                    </a>
                    <h6>{"Formula One, Formula 1, F1 & Grand Prix are trademarks of Formula One Licensing BV."}</h6>
                 </footer>
            </footer>
        );
    }
}

export default withStyles(styling)(Footer);