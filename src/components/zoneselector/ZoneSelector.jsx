import React, {Component, useState} from "react";
import moment from "moment-timezone";


import zoneJss from "./styling";

import {
    withStyles,
    Paper,
    Typography
} from "@material-ui/core/";

import Select from 'react-timezone-select'

import {timeOffset} from "../../data/date"


class ZoneSelector extends Component {

    constructor(props){
        super();
        this.changeZone = this.changeZone.bind(this);
        this.selectorChange = this.selectorChange.bind(this);
        this.state = {
            zone: props.zone,
            selector: true,
          }
    }

    changeZone = zone => {
        this.setState({ 
            zone: zone.value,
            selector: !this.state.selector 
        });
        
        this.props.onChange(zone.value);
        
        
        
    }

    selectorChange(){
        if(this.state.selector){
            this.setState({
                selector: !this.state.selector,
            });
        }
        
    }

    render(){

        const c = this.props.classes;
        return(             
            
            <time className={c.root}
                
            >
                <header 
                    //onMouseOver={() => console.log("test")}
                    //onMouseOut={() => console.log("test2")}
                >
                    <Typography onClick={this.selectorChange} className={c.zoneHeader} variant="h5" component="h5">
                        Select Timezone
                    </Typography>
                </header>
                
                <time
                
                className={c.selector}
                onClick={this.selectorChange}       >

                    {
                        this.state.selector ? 
                        <Paper
                            elevation={0}
                            className={c.selectorOff}
                        >
                        <Typography 
                        className={c.zoneText} 
                        variant="subtitle1" 
                        component="h6"
                        >
                            {timeOffset(this.state.zone) + " | " + this.state.zone}
                        </Typography>
                            
                        </Paper> : 
                        <Select 
                            value={this.state.zone} 
                            onChange={this.changeZone}
                        />
                    }
                    
                </time>
                
                
            </time>
        );
    }

}

export default withStyles(zoneJss)(ZoneSelector);