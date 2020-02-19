import React, { Component } from "react";
import moment from "moment-timezone";


import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";
import ZoneSelector from "../../components/zoneselector/ZoneSelector.jsx";
import Content from "../../components/content/Content"

import homeJss from "./homeJss";

import { 
    withStyles,
    Divider,
 } from "@material-ui/core/";
import { render } from "@testing-library/react";

import { races } from "../../data/gp";

 
class Home extends Component {
    
    constructor(props) {
        super();

        this.updateTimezone = this.updateTimezone.bind(this);
        this.state = ({
            data: races,
            timezone: localStorage.getItem("timezone") ? localStorage.getItem("timezone") : moment.tz.guess(true),
        });
    }

    updateTimezone(e){
       this.setState({
           timezone: e
       });

       localStorage.setItem("timezone", e)
    }
    
    

    render() {

        const { classes } = this.props;
        return (
            <div>
                <div className={classes.root}>
                
                    <Header headline={"Formula 1 calendar 2020"}/>
                        
                    
                    {/*<div className={classes.topDiv2} >
                        <
                    </div>*/}
                    
                    <ZoneSelector onChange={this.updateTimezone} zone={this.state.timezone}/>
                    
                    <Content data={this.state.data} zone={this.state.timezone} />
                    
                    <Footer />
                </div>
                
            </div>
        );
    }
}

export default withStyles(homeJss)(Home);
