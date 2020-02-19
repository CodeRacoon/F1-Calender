import { logoFont } from "../../styling/defaults";

const headerJss = theme => ({
    
    root: {
        //backgroundColor: "rgba(0, 68, 167, 0.5)",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        borderRadius: "0px 0px 50px 50px",
        

        
    },
    headline: {
        color: theme.palette.text,
        //backgroundColor: theme.palette.background.default,
        ...logoFont,
        padding: "3rem",
        textShadow: "-0.03rem 0.03rem 0px rgba(0,0,0,1), 0.03rem -0.03rem 0px rgba(0,0,0,1),0.12rem 0.12rem 0px rgba(0,255,200,1), -0.10rem -0.02rem 0px rgba(255,0,100,1)",
        fontWeight: "bold"
                        
        
    }
    
})

export default headerJss;