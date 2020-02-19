import { createMuiTheme } from '@material-ui/core/styles';

import logoFont from "./defaults";



//Theme generated with
// https://material.io/inline-tools/color/
// https://themebuilder.telerik.com/kendo-react-ui
// https://in-your-saas.github.io/material-ui-theme-editor/
const darkTheme = createMuiTheme({
    name: "dark",
    palette:{
        common: {
            black:"rgba(0, 0, 0, 1)",
            white:"rgba(255, 255, 255, 1)"
        },
        background:{
            paper:"rgba(43, 43, 43, 1)",
            default:"rgba(17, 17, 17, 1)"},
        primary:{
            light:"rgba(54, 164, 251, 1)",
            main:"rgba(2, 117, 216, 1)",
            dark:"rgba(0, 68, 167, 1)",
            contrastText:"#fff"},
        secondary:{
            light:"rgba(119, 119, 119, 1)",
            main:"rgba(68, 68, 68, 1)",
            dark:"rgba(35, 35, 35, 1)",
            contrastText:"#fff"},
        error:{
            light:"rgba(225, 152, 151, 1)",
            main:"rgba(217, 84, 79, 1)",
            dark:"rgba(187, 52, 48, 1)",
            contrastText:"#fff"
        },
        text:{
            primary:"#f2f3f4",
            secondary:"rgba(238, 214, 214, 1)",
            disabled:"rgba(246, 228, 228, 0.38)",
            hint:"rgba(226, 213, 213, 0.38)"
        },
        divider: "rgba(255, 255, 255, 0.30)",
        grey: "rgba(78, 96, 112, 1)",
    }
})

darkTheme.overrides = {
    
    ...darkTheme.overrides,
    MuiTab: {
    },
    MuiTabs: {
        root: {
            //borderBottom: ("1px solid "+ darkTheme.palette.secondary.main)
        }
    }

    // general overrides for your material tab component here
    
      
}
export default darkTheme;
