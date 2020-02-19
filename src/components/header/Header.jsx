import React, { Component } from "react";

import headerJss from "./styling";

import { withStyles, 
    Typography, 
    Divider } from "@material-ui/core/";

class Header extends Component {
    constructor(props) {
        super();
    }

    render() {
        const c = this.props.classes;

        return (
            <header className={c.root}>
                <Typography className={c.headline} variant="h3" component="h3">
                    {this.props.headline}
                    <Divider variant={"fullWidth"} orientation={"horizontal"}/>
                </Typography>
                
            </header>
        );
    }
}

export default withStyles(headerJss)(Header);
