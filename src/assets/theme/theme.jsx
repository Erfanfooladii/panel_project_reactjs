import * as React from 'react';
import { CssBaseline , createTheme } from "@mui/material";
import { ThemeProvider } from '@emotion/react';
import { ContextColormode } from '../../story/Contexts/Contextmode';
import Page_main from '../../views/MainPage/main_page';//Import main component

const getDesignTokens = (mode) => ({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            // palette values for light mode
            primary: {
                main:'#616161'
            },
            divider: {
                main:'#D8D9DA'
            },
            background: {
                default: "#616161",
                menu:'#e1e1ff',
                btnGlobal:'#868787',
                //This is mode for items in the Activity component
                item_green:'#78df1c',
                item_cr_green:'#c6e1c3',
                item_blue:'#72b7ff',
                item_cr_blue:'#dcf5ff75',
                item_red:'#ff5353',
                item_cr_red:'#d97c7c75',
                //This is mode for items in the Schedule component
                item_cr:'#ebebeb',
                setting_section:'#9f9f9fbd'//This is mode for Setting_section component
            },
            text:{
              primary: '#424242',
              sub:'#fff'
            },
            border:{
                primary:'#445069'
            },
            //Boxitem mode
            boxItem:{
                text:'#000',
                background:'#ffff95'
            }
          }
        : {
            // palette values for dark mode
            primary: {
                main:'#fafafa'
            },
            divider: {
                main:'#272829'
            },
            background: {
              default: "#424242",
              menu:'#37373b',
              btnGlobal:'#a7a75b',
              //This is mode for items in the Activity component
              item_green:'#59c56c',
              item_cr_green:'#85af8a',
              item_blue:'#7b9cbf',
              item_cr_blue:'#5f808d75',
              item_red:'#b14242',
              item_cr_red:'#d97c7c75',
              //This is mode for items in the Schedule component
              item_cr:'#acafaf',
              setting_section:'#6d6d6d8a'//This is mode for Setting_section component
            },
            text: {
              primary: '#fff',
              sub:'#a7a7a7'
            },
            border:{
                primary:'#BEADFA'
            },
            //Boxitem mode
            boxItem:{
                text:'#fff',
                background:'#696e73'
            }
          }),
    },
  });
  
// This is theme mode in project
export default function Main_Theme() {
    const [dark,setDark]=React.useState(false)
    const darkModeTheme = createTheme(getDesignTokens(dark ? 'dark' : 'light'));
    const handelmode={
        toggelColor:()=>{setDark(!dark)}
    }
    return(
        <>
            <ContextColormode.Provider value={handelmode}>
                <ThemeProvider theme={darkModeTheme}>
                    <CssBaseline/>
                    <Page_main/>
                </ThemeProvider>
            </ContextColormode.Provider>
        </>
    )
}