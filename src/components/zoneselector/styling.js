import {  gpFont } from "../../styling/defaults";

const zoneJss = theme => ({
    
    root: {
        //minWidth: "500px",
        alignItems: "center",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        //justifyContent: "center",
        //alignContent: "center"
        
        
    },
    selector: {
        minWidth: "20rem",
        height: "2rem",
        color: "#000"
    },
    selectorOff: {
        minWidth: "20rem",
        height: "2rem",
        backgroundColor: "rgba(0,0,0,0)",
        alignItems: "center",

        display: "flex",
        flexDirection: "row",
        justifyContent: "center"


    },
    '@keyframes retractShadow': {
        "0%" : {textShadow: "-0.03rem 0.03rem 0px rgba(0,0,0,1), 0.03rem -0.03rem 0px rgba(0,0,0,1),-0.09rem 0.09rem 0px rgba(255,0,100,1), -0.18rem 0.18rem 0px rgba(0,255,200,1), -0.27rem 0.27rem 0px rgba(0,255,200,1)",},
        "50% " :{textShadow: "-0.03rem 0.03rem 0px rgba(0,0,0,1), 0.03rem -0.03rem 0px rgba(0,0,0,1),-0.09rem 0.09rem 0px rgba(255,0,100,1), -0.18rem 0.18rem 0px rgba(0,255,200,1)",},
        "100%" : {textShadow: "-0.03rem 0.03rem 0px rgba(0,0,0,1), 0.03rem -0.03rem 0px rgba(0,0,0,1),-0.09rem 0.09rem 0px rgba(255,0,100,1)",},
    },
    '@keyframes retractShadow2': {
        "0%" : {textShadow: "-0.03rem 0.03rem 0px rgba(0,0,0,1), 0.03rem -0.03rem 0px rgba(0,0,0,1),-0.09rem 0.09rem 0px rgba(255,0,100,1)",},
        "50%" : {textShadow: "-0.03rem 0.03rem 0px rgba(0,0,0,1), 0.03rem -0.03rem 0px rgba(0,0,0,1),-0.09rem 0.09rem 0px rgba(255,0,100,1), -0.18rem 0.18rem 0px rgba(0,255,200,1),",},
        "100%" :{textShadow: "-0.03rem 0.03rem 0px rgba(0,0,0,1), 0.03rem -0.03rem 0px rgba(0,0,0,1),-0.09rem 0.09rem 0px rgba(255,0,100,1), -0.18rem 0.18rem 0px rgba(0,255,200,1), -0.27rem 0.27rem 0px rgba(0,255,200,1)",},
    },
    zoneHeader: {
        ...gpFont,
        //padding: "2rem",
        marginBottom: "1rem",
        textShadow: "-0.03rem 0.03rem 0px rgba(0,0,0,1), 0.03rem -0.03rem 0px rgba(0,0,0,1), -0.09rem 0.09rem 0px rgba(255,0,100,1), -0.18rem 0.18rem 0px rgba(0,255,200,1), -0.27rem 0.27rem 0px rgba(0,255,200,1)",
        fontWeight: "bold",
        animationName: '$retractShadow2',
        animationDuration: '0.5s',
        animationTimingFunction: 'linear',
        animationIterationCount: 1,
        animationFillMode: "forwards",
        
        "&:hover": {
            
            
            animationName: '$retractShadow',
            animationDuration: '1s',
            animationTimingFunction: 'linear',
            animationIterationCount: 1,
            animationFillMode: "forwards",
        },
    },

    '@keyframes zoneTextEntry': {
        "0%" : {boxShadow: "-0.1rem 0.1rem 0px rgba(255,0,100,0.6)"},
        "33%" : {boxShadow: "-0.1rem 0.1rem 0px rgba(255,0,100,0.6)"},
        "66%" : {boxShadow: "0.1rem -0.1rem 0px rgba(0,255,200,1)"},
        "100%" : {boxShadow: "0.1rem -0.1rem 0px rgba(255,0,100,0.0)"},
    },
    zoneText: {
        ...gpFont,
        fontSize: "1.2em",
        animationName: '$zoneTextEntry',
        animationDuration: '0.8s',
        animationTimingFunction: 'linear',
        animationIterationCount: 1,
        animationFillMode: "forwards",
        //fontSize: "1rem"
    }
    
})

export default zoneJss;