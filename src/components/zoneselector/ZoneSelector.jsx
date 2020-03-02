import React, { Component } from "react";

import zoneJss from "./styling";
import SubHeader from "../subheader/SubHeader";

import { withStyles} from "@material-ui/core/";

import Select from "react-timezone-select";

import { timeOffset } from "../../data/date";
import clsx from "clsx";

class ZoneSelector extends Component {
    constructor(props) {
        super();
        this.changeZone = this.changeZone.bind(this);
        this.selectorChange = this.selectorChange.bind(this);
        this.state = {
            zone: props.zone,
            selector: true
        };
    }

    changeZone = zone => {
        this.setState({
            zone: zone.value,
            selector: !this.state.selector
        });
        this.props.onChange(zone.value);
    };

    selectorChange() {
        if (this.state.selector) {
            this.setState({
                selector: !this.state.selector
            });
        }
    }
    render() {
        const c = this.props.classes;
        return (
            <section className={c.ZoneSelector}>
                <SubHeader
                    onClick={this.selectorChange}
                    headline={"Select Timezone"}
                />
                <time
                    className={clsx(
                        c.ZoneSelector__inputList,
                        c.ZoneSelector___black
                    )}
                    onClick={this.selectorChange}
                >
                    {this.state.selector ? (
                        <section
                            className={clsx(
                                c.ZoneSelector__infoBox,
                                c.ZoneSelector___white
                            )}
                        >
                            <em
                                className={clsx(
                                    c.ZoneSelector__timeText,
                                    c.ZoneSelector___selectEffect
                                )}
                            >
                                {timeOffset(this.state.zone)}
                            </em>
                        </section>
                    ) : (
                        <Select
                            value={this.state.zone}
                            onChange={this.changeZone}
                        />
                    )}
                </time>
            </section>
        );
    }
}

export default withStyles(zoneJss)(ZoneSelector);
