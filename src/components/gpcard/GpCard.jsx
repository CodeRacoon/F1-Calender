import React, { Component } from "react";


import gpCardJss from "./gpCardJss";
import {gpCardHeader, formatToDisplay, countdown} from "../../data/date";

import 'react-awesome-slider/dist/styles.css';

import {
    withStyles,
    Card,
    Collapse,
    CardContent,
    Divider
} from "@material-ui/core/";



class GpCard extends Component {

    constructor(props){
        super()

        this.onEnter = this.onEnter.bind(this);
        this.onExit = this.onExit.bind(this);
        this.state = ({
            disabled: false,
        });
    }

    onExpand(n){
        this.props.cardClick(n)
    }

    onEnter(){
        this.setState({ disabled: true})
    }
    onExit(){
        this.setState({ disabled: false})
    }


    render() {
        const c = this.props.classes;
        const d = this.props.data;

        return(
             <main className={c.root}>
                <Card elevation={2} className={d.round % 2 === 0 ? c.color : c.diagCard} onClick={() => this.onExpand(d.round)} onMouseEnter={this.onEnter} onMouseLeave={this.onExit}>
                    <CardContent className={c.cardHead } >
                        {
                            d.raceName === "Chinese Grand Prix" ? 
                            <h1 className={c.diagTextName}>{d.raceName.slice(0, -10) + "GP, TBD"}</h1> :
                            <h1 className={c.diagTextName}>{d.raceName.slice(0, -10) + "GP"}</h1>

                        }

                        
                        {
                            this.state.disabled ? 
                            <h1 className={c.diagTextDate}> {countdown(d.sessions)} </h1> :
                            <h1 className={c.diagTextDate}>{gpCardHeader(d.sessions)}</h1>
                        }
                        
                        
                    </CardContent>
                    <Collapse  timeout={100} in={d.extended} unmountOnExit>
                        <Divider/>
                        <CardContent className={c.cardCont}>

                            <CardContent  className={c.cardCont2}>

                                <h4 className={c.sessionText}>Practice 1: </h4>
                                <h4 className={c.sessionText}>Practice 2: </h4>
                                <h4 className={c.sessionText}>Practice 3: </h4>
                                <h4 className={c.sessionText}>Qualification: </h4>
                                <h4 className={c.sessionText}>Race: </h4>
                            </CardContent>
                            <CardContent  className={c.cardCont2}>
                                <h4 className={c.sessionText}>{formatToDisplay(d.sessions.p1)}</h4>
                                <h4 className={c.sessionText}>{formatToDisplay(d.sessions.p2)}</h4>
                                <h4 className={c.sessionText}>{formatToDisplay(d.sessions.p3)}</h4>
                                <h4 className={c.sessionText}>{formatToDisplay(d.sessions.qualy)}</h4>
                                <h4 className={c.sessionText}>{formatToDisplay(d.sessions.race)}</h4>
                            </CardContent>
                            <CardContent className={c.cardCont2}>
                            </CardContent>
                            <CardContent className={c.cardCont2}>
                                
                                    <h4 className={c.sessionText}>Winners:</h4>
                                {d.winners.map(i => (
                                    <h4 className={c.sessionText}>{i}</h4>
                                ))}
                            </CardContent>
                        </CardContent>
                    </Collapse>
                </Card>
            </main>
        );
    }
}

export default withStyles(gpCardJss)(GpCard);