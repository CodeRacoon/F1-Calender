import { logoFont } from "../../styling/defaults";

const styling = theme => ({
    Header: {
        textAlign: "center"
    },
    Header__headLine: {
        ...logoFont,
        fontSize: "3rem",
        padding: "2rem"
    },
    Header___default: {
        color: theme.palette.text,
        textShadow:
            "-0.03rem 0.03rem 0px rgba(0,0,0,1), 0.03rem -0.03rem 0px rgba(0,0,0,1),0.12rem 0.12rem 0px rgba(0,255,200,1), -0.08rem -0.02rem 0px rgba(255,0,100,1)"
    }
});

export default styling;
