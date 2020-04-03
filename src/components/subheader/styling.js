import { gpFont } from "../../styling/defaults";

const styling = theme => ({
    SubHeader: {
        textAlign: "center"
    },
    SubHeader__headLine: {
        ...gpFont,
        fontSize: "1.5rem",
        marginBottom: "1rem"
    },
    SubHeader___default: {
        color: theme.palette.text,
        textShadow:
            "-0.03rem 0.03rem 0px rgba(0,0,0,0.9), 0.03rem -0.03rem 0px rgba(0,0,0,1), -0.09rem 0.09rem 0px rgba(255,0,100,1), -0.18rem 0.18rem 0px rgba(0,255,200,1), -0.27rem 0.27rem 0px rgba(0,255,200,1)"
    },
    SubHeader___clickAnimation: {
        textShadow:
            "-0.03rem 0.03rem 0px rgba(0,0,0,0.9), 0.03rem -0.03rem 0px rgba(0,0,0,1), -0.09rem 0.09rem 0px rgba(255,0,100,1), -0.18rem 0.18rem 0px rgba(0,255,200,1), -0.27rem 0.27rem 0px rgba(0,255,200,1)",
        animationName: "$retractShadow2",
        animationDuration: "0.5s",
        animationTimingFunction: "linear",
        animationIterationCount: 1,
        animationFillMode: "forwards",

        "&:hover": {
            animationName: "$clickEffect",
            animationDuration: "0.5s",
            animationTimingFunction: "ease",
            animationIterationCount: 2,
            animationFillMode: "forwards"
        }
    },
    "@keyframes retractShadow2": {
        "0%": {
            textShadow:
                "-0.03rem 0.03rem 0px rgba(0,0,0,1), 0.03rem -0.03rem 0px rgba(0,0,0,1),-0.09rem 0.09rem 0px rgba(255,0,100,1)"
        },
        "50%": {
            textShadow:
                "-0.03rem 0.03rem 0px rgba(0,0,0,1), 0.03rem -0.03rem 0px rgba(0,0,0,1),-0.09rem 0.09rem 0px rgba(255,0,100,1), -0.18rem 0.18rem 0px rgba(0,255,200,1),"
        },
        "100%": {
            textShadow:
                "-0.03rem 0.03rem 0px rgba(0,0,0,1), 0.03rem -0.03rem 0px rgba(0,0,0,1),-0.09rem 0.09rem 0px rgba(255,0,100,1), -0.18rem 0.18rem 0px rgba(0,255,200,1), -0.27rem 0.27rem 0px rgba(0,255,200,1)"
        }
    },

    "@keyframes clickEffect": {
        "0%": {
            textShadow:
                "-0.03rem 0.03rem 0px rgba(0,0,0,1), 0.03rem -0.03rem 0px rgba(0,0,0,1),-0.09rem 0.09rem 0px rgba(255,0,100,1), -0.18rem 0.18rem 0px rgba(0,255,200,1), -0.27rem 0.27rem 0px rgba(0,255,200,1)"
        },
        "25%": {
            color: "rgba(0,0,0,0)",
            textShadow:
                "-0.03rem 0.03rem 0px rgba(255,255,255,1), 0.03rem -0.03rem 0px rgba(255,255,255,1),-0.09rem 0.09rem 0px rgba(255,0,100,1), -0.18rem 0.18rem 0px rgba(0,255,200,1), -0.27rem 0.27rem 0px rgba(0,255,200,1)"
        },
        "50%": {
            color: "rgba(0,0,0,0)",
            textShadow:
                "-0.03rem 0.03rem 0px rgba(0,0,0,0), 0.03rem -0.03rem 0px rgba(0,0,0,0),-0.09rem 0.09rem 0px rgba(255,255,255,1), -0.18rem 0.18rem 0px rgba(0,255,200,1), -0.27rem 0.27rem 0px rgba(0,255,200,1)"
        },
        "75%": {
            color: "rgba(0,0,0,0)",
            textShadow:
                "-0.03rem 0.03rem 0px rgba(0,0,0,0), 0.03rem -0.03rem 0px rgba(0,0,0,0),-0.09rem 0.09rem 0px rgba(255,0,100,0), -0.18rem 0.18rem 0px rgba(255,255,255,1), -0.27rem 0.27rem 0px rgba(0,255,200,1)"
        },
        "100%": {
            color: "rgba(0,0,0,0)",
            textShadow:
                "-0.03rem 0.03rem 0px rgba(0,0,0,0), 0.03rem -0.03rem 0px rgba(0,0,0,0),-0.09rem 0.09rem 0px rgba(255,0,100,0), -0.18rem 0.18rem 0px rgba(0,255,200,0), -0.27rem 0.27rem 0px rgba(255,255,255,1)"
        }
    }
});

export default styling;
