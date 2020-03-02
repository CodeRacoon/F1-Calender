import { gpFont } from "../../styling/defaults";

const zoneJss = theme => ({
    ZoneSelector: {
        alignItems: "center",
        display: "flex",
        flexDirection: "column"
    },
    ZoneSelector__inputList: {
        minWidth: "20rem",
        height: "2rem",
        marginBottom: "2rem"
    },
    ZoneSelector___white: {
        color: "#fff"
    },
    ZoneSelector___black: {
        color: "#000"
    },

    ZoneSelector__infoBox: {
        display: "flex",
        justifyContent: "center"
    },
    ZoneSelector__timeText: {
        ...gpFont,
        fontSize: "1.2em"
    },
    ZoneSelector___selectEffect: {
        animationName: "$zoneTextEntry",
        animationDuration: "0.8s",
        animationTimingFunction: "linear",
        animationIterationCount: 1,
        animationFillMode: "forwards"
    },
    "@keyframes zoneTextEntry": {
        "0%": { boxShadow: "-0.1rem 0.1rem 0px rgba(255,0,100,0.6)" },
        "33%": { boxShadow: "-0.1rem 0.1rem 0px rgba(255,0,100,0.6)" },
        "66%": { boxShadow: "0.1rem -0.1rem 0px rgba(0,255,200,1)" },
        "100%": { boxShadow: "0.1rem -0.1rem 0px rgba(255,0,100,0.0)" }
    }
});

export default zoneJss;
