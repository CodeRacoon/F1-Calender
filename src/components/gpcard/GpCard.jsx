import React, { Component } from "react";

import styling from "./styling";
import { gpCardHeader, formatToDisplay, countdown } from "../../data/date";


import {
    withStyles,
    Card,
    Collapse,
    CardContent,
    Divider
} from "@material-ui/core/";
import clsx from "clsx";


// TODO: Add Circuit map and flag to card
class GpCard extends Component {
    constructor(props) {
        super();

        this.onEnter = this.onEnter.bind(this);
        this.onExit = this.onExit.bind(this);
        this.state = {
            disabled: false
        };
    }

    onExpand(n) {
        
        this.props.cardClick(n);
        
        
    }

    onEnter() {
        this.setState({ disabled: true });
    }
    onExit() {
        this.setState({ disabled: false });
    }

    listText = (text, c, divider=true) => {

        return (
            <React.Fragment>
                <h5 className={c.GpCard__sessionText}>{text}</h5>
                {divider ? 
                <Divider variant="fullWidth"/>:
                null}
            </React.Fragment>
        );
    }

    render() {
        const c = this.props.classes;
        const d = this.props.data;

        return (
            <section className={clsx(c.GpCard, c.GpCard___fadeIn)}>
                <Card
                    className={clsx({
                        [c.GpCard___even]: d.round % 2,
                        [c.GpCard___odd]: d.round % 2 ? false : true,
                        [c.GpCard__card]: true,
                        [c.GpCard___textAnimation] : true
                    })}
                    onClick={() => this.onExpand(d.round)}
                    onMouseEnter={this.onEnter}
                    onMouseLeave={this.onExit}
                >
                    <CardContent className={c.GpCard__header}>
                            <h3 className={clsx(c.GpCard__headerName, c.GpCard___headerDefault)}>
                                {d.nameShort}
                            </h3>

                        {this.state.disabled ? (
                            <h3 className={clsx(c.GpCard__headerDate, c.GpCard___headerDefault)}>
                                {countdown(d.sessions)}
                            </h3>
                        ) : (
                            <h3 className={clsx(c.GpCard__headerDate, c.GpCard___headerDefault)}>
                                {gpCardHeader(d.sessions)}
                            </h3>
                        )}
                    </CardContent>
                    <Collapse timeout={100} in={d.extended} unmountOnExit>
                        <Divider />
                        <CardContent className={c.GpCard__cardContent}>
                            <CardContent >
                                {this.listText("Practice 1:             " +  formatToDisplay(d.sessions.p1), c)}
                                {this.listText("Practice 2:             " +  formatToDisplay(d.sessions.p2), c)}
                                {this.listText("Practice 3:             " +  formatToDisplay(d.sessions.p3), c)}
                                {this.listText("Qualy:                      " +  formatToDisplay(d.sessions.qualy), c)}
                                {this.listText("Race:                         " +  formatToDisplay(d.sessions.race), c, false)}
                            </CardContent>
                            
                        </CardContent>
                    </Collapse>
                </Card>
            </section>
        );
    }
}

export default withStyles(styling)(GpCard);
