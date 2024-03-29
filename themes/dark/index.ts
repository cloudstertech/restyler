import colors from "./colors";
import spacing from "../common/spacing";
import breakpoints from "../common/breakpoints";
import borderRadius from "../common/borderRadii";
import buttons from "../../components/Button/styles";
import typography from "../../components/Text/styles";
import { createTheme } from "@shopify/restyle";

const theme = createTheme({

    name: "Dark theme",
    themeKey: "light",

    // core theme
    spacing: {
        ...spacing
    },        
    colors: {
        ...colors
    },
    textVariants: {
        ...typography      
    },
    breakpoints: {
        ...breakpoints
     },    
     borderRadii: {
         ...borderRadius
     },

    // components
    buttonVariants: {
        ...buttons
    }
    
});

export type Theme = typeof theme;
export default theme;