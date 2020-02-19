import React, { Component } from "react";

import contentJss from "./styling";
import GpCard from "../gpcard/GpCard";

import { races } from "../../data/gp";

import {convertTime} from "../../data/date";
// import { nextRace } from "../../data/date";

import { withStyles, Typography } from "@material-ui/core/";

class Content extends Component {
    constructor(props) {
        super();

        this.cardClick = this.cardClick.bind(this);
        this.state = ({
            data: convertTime(races, props.zone),
        });
    }

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.zone !== prevProps.zone) {
            this.setState({
                data: convertTime(races, this.props.zone),
            });
        }
      }

    cardClick(n){

        
        let d = this.state.data;
        
        d[n-1].extended = !d[n-1].extended;
        
        this.setState({
            data: d,
        });
    }

    render() {
        const c = this.props.classes;

        return (
            <div className={c.root}>
                {/*<div className={c.nextDiv}>
                    <h3 className={c.headerText}>Next Race</h3>
                    <GpCard data={nextRace(this.state.data)} cardClick={this.cardClick}/>
                </div>*/}
                <div className={c.nextDiv}>

                    <Typography className={c.headerText} variant="h5" component="h5">
                        Upcoming Grand Prix
                    </Typography>

                    {this.state.data.map(i => (
                        <GpCard key={i.round} data={i} cardClick={this.cardClick} />
                    ))}
                </div>
            </div>
        );
    }
}

export default withStyles(contentJss)(Content);
