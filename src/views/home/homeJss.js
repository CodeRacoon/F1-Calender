
// import bg from "../../styling/assets/binding_dark.png";
import bg from "../../styling/assets/ep_naturalblack.png";

const homeJss = theme => ({
    
    root: {
        
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",

        backgroundImage: `url(${bg})`,
        

    },
    topDiv: {
        background: 'rgba(20,30,30,0.7)',
        height: "250px",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        top: "0",
        bottom: "0",
        right: "0",
        left: "0",
        //backgroundImage: "linear-gradient(135deg,rgba(10,20,20,0.7), rgba(30,40,40,0.7))",
        clipPath: "polygon(0 0,100% 0,100% 100%,0 50%)",
        borderRadius: "0px 0px 0px 0px",
        // transform: 'skewY(-3deg)',
        transformOrigin: 'top left',
    },
    topDiv2: {
        background: 'rgba(10,20,20,0.7)',
        height: "250px",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        top: "-125px",
        bottom: "0",
        right: "0",
        left: "0",
        //backgroundImage: "rgba(10,20,20,0.7)",
        clipPath: "polygon(0 0,100% 50%,100% 100%,0 100%)",
        
        borderRadius: "0px 0px 0px 0px",
        // transform: 'skewY(-3deg)',
        transformOrigin: 'top left',
    }
    
})

export default homeJss;