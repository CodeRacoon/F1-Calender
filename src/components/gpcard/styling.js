import { gpFont } from "../../styling/defaults";

const styling = theme => ({
    GpCard: {},
    GpCard___fadeIn: {
        animationName: "$fadein",
        animationDuration: "3s",
        animationTimingFunction: "linear",
        animationIterationCount: 1,
        animationFillMode: "forwards"
    },

    GpCard__card: {
        width: "50vw",
        borderRadius: "50px 5px 50px 5px",
        marginTop: "0.5rem"
    },

    GpCard___even: {
        background: "rgba(50,0,20,0)",
        boxShadow: "-0.09rem 0.09rem 0px rgba(0,255,200,0.3)"
    },
    GpCard___odd: {
        boxShadow: "-0.09rem 0.09rem 0px rgba(255,0,100,0.3)",
        background: "rgba(0,255,200,0.0)"
    },

    GpCard___textAnimation: {
        "&:hover": {
            animationName: "$rotateRose",
            animationDuration: "0.5s",
            animationTimingFunction: "linear",
            animationIterationCount: "1",
            animationFillMode: "forwards",
            "& $GpCard__headerName": {
                animationName: "$addShadow",
                animationDuration: "0.5s",
                animationTimingFunction: "linear",
                animationIterationCount: 1,
                animationFillMode: "forwards"
            },
            "& $GpCard__headerDate": {
                animationName: "$addShadowDate",
                animationDuration: "0.5s",
                animationTimingFunction: "linear",
                animationIterationCount: 1,
                animationFillMode: "forwards"
            }
        }
    },

    GpCard__cardContent: {
        display: "flex",
        flexDirection: "row",
        flex: 1,
        justifyContent: "center",
        whiteSpace: "pre-wrap"
    },
    GpCard__headerName: {
        ...gpFont,
        marginLeft: "50px",
        paddingTop: "10px"
    },
    GpCard__headerDate: {
        ...gpFont,
        marginRight: "50px",
        paddingTop: "10px"
    },
    GpCard__header: {
        margin: "-1rem",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    GpCard__sessionText: {
        ...gpFont,
        fontWeight: "400",
        fontSize: "0.8rem"
    },
    GpCard___headerDefault: {
        color: theme.palette.text,
        textShadow:
            "-0.00rem 0.09rem 0px rgba(0,0,0,1), 0.00rem -0.03rem 0px rgba(0,0,0,1),-0.00rem 0.09rem 0px rgba(50,50,50,1), -0.00rem 0.18rem 0px rgba(100,100,100,1)"
    },

    "@keyframes fadein": {
        "0%": { opacity: 0 },
        "100%": { opacity: 1 }
    },
    "@keyframes addShadowDate": {
        "0%": {
            opacity: 0,
            textShadow:
                "-0.0rem 0.03rem 0px rgba(0,0,0,1), 0.0rem -0.03rem 0px rgba(0,0,0,1),-0.0rem 0.09rem 0px rgba(50,50,50,1), -0.0rem 0.18rem 0px rgba(100,100,100,1)"
        },

        "100%": {
            opacity: 1,
            textShadow:
                "-0.0rem 0.01rem 0px rgba(0,0,0,1), 0.0rem -0.04rem 0px rgba(0,0,0,1),-0.0rem 0.10rem 0px rgba(50,50,50,1) ,-0.0rem 0.15rem 0px rgba(255,0,100,1), -0.0rem 0.20rem 0px rgba(0,255,200,1)"
        }
    },
    "@keyframes addShadow": {
        "0%": {
            textShadow:
                "-0.0rem 0.03rem 0px rgba(0,0,0,1), 0.0rem -0.03rem 0px rgba(0,0,0,1),-0.0rem 0.09rem 0px rgba(50,50,50,1), -0.0rem 0.18rem 0px rgba(100,100,100,1)"
        },

        "100%": {
            textShadow:
                "-0.0rem 0.01rem 0px rgba(0,0,0,1), 0.0rem -0.04rem 0px rgba(0,0,0,1),-0.0rem 0.10rem 0px rgba(50,50,50,1) ,-0.0rem 0.15rem 0px rgba(255,0,100,1), -0.0rem 0.20rem 0px rgba(0,255,200,1)"
        }
    },
    "@keyframes rotateCyan": {
        "0%": { boxShadow: "-0.09rem 0.09rem 0px rgba(0,255,200,0.3)" },
        "100%": {
            boxShadow:
                "-0.15rem 0.15rem 0px rgba(0,255,200,0.6),0.15rem -0.15rem 0px rgba(0,255,200,0.6)"
        }
    },
    "@keyframes rotateRose": {
        "0%": { boxShadow: "-0.09rem 0.09rem 0px rgba(255,0,100,0.3)" },
        "100%": {
            boxShadow:
                "-0.15rem 0.15rem 0px rgba(255,0,100,0.6),0.15rem -0.15rem 0px rgba(255,0,100,0.6)"
        }
    }
});

export default styling;
