import { gpFont } from "../../styling/defaults";

const contentJss = theme => ({
    
    root: {
        
        width: "100vw",
        alignItems: "center",
        display: "flex",
        flexDirection: "column"
    },
    nextDiv: {
        marginBottom: "40px",
        alignItems: "center",
        display: "flex",
        flexDirection: "column"
    },
    headerText: {
        ...gpFont,
        padding: "2rem",
        textShadow: "-0.03rem 0.03rem 0px rgba(0,0,0,1), 0.03rem -0.03rem 0px rgba(0,0,0,1), -0.09rem 0.09rem 0px rgba(255,0,100,1), -0.18rem 0.18rem 0px rgba(0,255,200,1), -0.27rem 0.27rem 0px rgba(0,255,200,1)",
        fontWeight: "bold",
        stroke: "black"

    }
})

export default contentJss;