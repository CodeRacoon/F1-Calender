import React, { Component } from "react";

import styling from "./styling";

import { withStyles } from "@material-ui/core/";
import clsx from "clsx";

/**
 * @input headline={string}
 * @input onClick={func}, adds click animation when onClick is given
 */
class SubHeader extends Component {
    constructor(props) {
        super();
    }

    render() {
        const c = this.props.classes;

        return (
            <header onClick={this.props.onClick} className={c.SubHeader}>
                <h3
                    className={clsx({
                        [c.SubHeader__headLine]: true,
                        [c.SubHeader___default]: !this.props.onClick,
                        [c.SubHeader___clickAnimation]: this.props.onClick
                    })}
                >
                    {this.props.headline ? this.props.headline : ""}
                </h3>
            </header>
        );
    }
}

export default withStyles(styling)(SubHeader);
