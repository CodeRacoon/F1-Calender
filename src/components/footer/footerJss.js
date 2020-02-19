const footerJss = theme => ({
    
    root: {
        //backgroundColor: "#e0192345",
        width: "100vw",
        height: "150px",
        position: "relative",
        bottom: "0px",
        //backgroundColor: theme.palette.background.paper,
        //boxShadow: "inset 1px 6px 9px -6px rgba(0,0,0,0.5)",
        marginTop: "50px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        
    },
    link: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    gitButton: {
        color: "#fff",
        boxShadow: "0.10rem 0.02rem 0px rgba(0,255,200,1), -0.10rem -0.02rem 0px rgba(255,0,100,1)",
    },

    
})

export default footerJss;