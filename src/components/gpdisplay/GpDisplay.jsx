import React, { Component } from "react";

import styling from "./styling";
import GpCard from "../gpcard/GpCard";
import SubHeader from "../subheader/SubHeader";

import { races } from "../../data/gp";

import { convertTime } from "../../data/date";

import { withStyles } from "@material-ui/core/";

class GpDisplay extends Component {
    constructor(props) {
        super();

        this.cardClick = this.cardClick.bind(this);
        this.state = {
            data: convertTime(races, props.zone)
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.zone !== prevProps.zone) {
            this.setState({
                data: convertTime(races, this.props.zone)
            });
        }
    }

    // Extends/Retracts card when clicked
    cardClick(n) {
        let d = this.state.data;

        d[n - 1].extended = !d[n - 1].extended;

        this.setState({
            data: d
        });
    }

    render() {
        const c = this.props.classes;

        return (
            <main className={c.GpDisplay}>
                <section className={c.GpDisplay__list}>
                    <SubHeader headline="Grand Prix" />

                    {this.state.data.map((i, index) => (
                        <GpCard
                            key={index}
                            data={i}
                            cardClick={this.cardClick}
                        />
                    ))}
                </section>
            </main>
        );
    }
}

export default withStyles(styling)(GpDisplay);
