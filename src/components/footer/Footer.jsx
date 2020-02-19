import React, { Component } from "react";

import footerJss from "./footerJss";

import {
    withStyles,
} from "@material-ui/core/";

class Footer extends Component {

    constructor(props){
        super();
    }
    
    render() {
        const {classes} = this.props;

        return(
             <div className={classes.root}>
                
            </div>
        );
    }
}

export default withStyles(footerJss)(Footer);