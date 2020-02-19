import { logoFont, gpFont } from "../../styling/defaults";

const gpCardJss = theme => ({
   
    
    '@keyframes rotateCyan': {
        "0%" : {boxShadow: "-0.15rem 0.15rem 0px rgba(0,255,200,0.6)"},
        "100%" : {boxShadow: "-0.15rem 0.15rem 0px rgba(0,255,200,0.6),0.15rem -0.15rem 0px rgba(0,255,200,0.6)"},
    },
    '@keyframes rotateRose': {
        "0%" : {boxShadow: "-0.15rem 0.15rem 0px rgba(255,0,100,0.6)"},
        "100%" : {boxShadow: "-0.15rem 0.15rem 0px rgba(255,0,100,0.6),0.15rem -0.15rem 0px rgba(255,0,100,0.6)"},
    },
    root: {
        animationName: '$fadein',
        animationDuration: '3s',
        animationTimingFunction: 'linear',
        animationIterationCount: 1,
        animationFillMode: "forwards",
        
        
    },
    diagCard: {
        background: "rgba(50,0,20,0)",
        boxShadow: "-0.09rem 0.09rem 0px rgba(0,255,200,0.6)",
        width: "50vw",
        minWidth: "500px",
        minHeight: "55px",
        borderRadius: "50px 5px 50px 5px",
        marginTop: "10px",
        "&:hover": {
            
            animationName: '$rotateCyan',
            animationDuration: '0.5s',
            animationTimingFunction: 'linear',
            animationIterationCount: "1",
            animationFillMode: "forwards",
            "& $diagTextName":{
                
                animationName: '$addShadow',
                animationDuration: '0.5s',
                animationTimingFunction: 'linear',
                animationIterationCount: 1,
                animationFillMode: "forwards",
            },
            "& $diagTextDate":{
                
                animationName: '$addShadowDate',
                animationDuration: '0.5s',
                animationTimingFunction: 'linear',
                animationIterationCount: 1,
                animationFillMode: "forwards",
            },
        },
    },
    color: {
        width: "50vw",
        minWidth: "500px",
        minHeight: "55px",
        borderRadius: "50px 5px 50px 5px",
        marginTop: "10px",
        //background: "rgba(30,40,40,0.7)",
        boxShadow: "-0.09rem 0.09rem 0px rgba(255,0,100,0.6)",
        background: "rgba(0,255,200,0.0)",
        "&:hover": {
            
            animationName: '$rotateRose',
            animationDuration: '0.5s',
            animationTimingFunction: 'linear',
            animationIterationCount: "1",
            animationFillMode: "forwards",
            "& $diagTextName":{
                
                animationName: '$addShadow',
                animationDuration: '0.5s',
                animationTimingFunction: 'linear',
                animationIterationCount: 1,
                animationFillMode: "forwards",
            },
            "& $diagTextDate":{
                
                animationName: '$addShadowDate',
                animationDuration: '0.5s',
                animationTimingFunction: 'linear',
                animationIterationCount: 1,
                animationFillMode: "forwards",
            },
        },
    },
    
    diagTextDate: {
        color: theme.palette.text,
        ...gpFont,
        fontSize: "1.1rem",
        marginRight: "50px",
        paddingTop: "10px",
        textShadow: "-0.00rem 0.09rem 0px rgba(0,0,0,1), 0.00rem -0.03rem 0px rgba(0,0,0,1),-0.00rem 0.09rem 0px rgba(50,50,50,1), -0.00rem 0.18rem 0px rgba(100,100,100,1)"
    },
    cardHead: {
        margin: "-1rem",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        
    },
    diagTextName: {
        color: theme.palette.text,
        ...gpFont,
        marginLeft: "50px",
        fontSize: "1.1rem",
        paddingTop: "10px",
        textShadow: "-0.00rem 0.09rem 0px rgba(0,0,0,1), 0.00rem -0.03rem 0px rgba(0,0,0,1),-0.00rem 0.09rem 0px rgba(50,50,50,1), -0.00rem 0.18rem 0px rgba(100,100,100,1)"

    },
    cardCont: {
        display: "flex",
        flexDirection: "row",
        flex: 1,
        justifyContent: "space-between"
    },
    cardCont2: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        
    },
    
    sessionText: {
        ...gpFont,
        fontSize: "15px",
    },


    '@keyframes fadein': {
        "0%" : {opacity: 0},
        "100%" : {opacity: 1},
    },
    '@keyframes addShadowDate': {
        "0%" : {opacity: 0, textShadow: "-0.0rem 0.03rem 0px rgba(0,0,0,1), 0.0rem -0.03rem 0px rgba(0,0,0,1),-0.0rem 0.09rem 0px rgba(50,50,50,1), -0.0rem 0.18rem 0px rgba(100,100,100,1)",},
        
        "100%" :{opacity: 1, textShadow: "-0.0rem 0.01rem 0px rgba(0,0,0,1), 0.0rem -0.04rem 0px rgba(0,0,0,1),-0.0rem 0.10rem 0px rgba(50,50,50,1) ,-0.0rem 0.15rem 0px rgba(255,0,100,1), -0.0rem 0.20rem 0px rgba(0,255,200,1)",},
    },
    '@keyframes addShadow': {
        "0%" : { textShadow: "-0.0rem 0.03rem 0px rgba(0,0,0,1), 0.0rem -0.03rem 0px rgba(0,0,0,1),-0.0rem 0.09rem 0px rgba(50,50,50,1), -0.0rem 0.18rem 0px rgba(100,100,100,1)",},
        
        "100%" :{ textShadow: "-0.0rem 0.01rem 0px rgba(0,0,0,1), 0.0rem -0.04rem 0px rgba(0,0,0,1),-0.0rem 0.10rem 0px rgba(50,50,50,1) ,-0.0rem 0.15rem 0px rgba(255,0,100,1), -0.0rem 0.20rem 0px rgba(0,255,200,1)",},
    },

})

export default gpCardJss;