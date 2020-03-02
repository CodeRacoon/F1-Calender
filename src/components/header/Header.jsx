import React, { Component } from "react";

import styling from "./styling";

import { withStyles, Divider } from "@material-ui/core/";
import clsx from "clsx";

/**
 * @input headline={string}
 */
class Header extends Component {
    constructor(props) {
        super();
    }

    render() {
        const c = this.props.classes;

        return (
            <header className={c.Header}>
                <h1 className={clsx(c.Header__headLine, c.Header___default)}>
                    {this.props.headline ? this.props.headline : ""}
                    <Divider variant={"fullWidth"} orientation={"horizontal"} />
                </h1>
            </header>
        );
    }
}

export default withStyles(styling)(Header);
