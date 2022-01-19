import {Box,Typography} from "@material-ui/core"
import {makeStyles} from "@material-ui/core"
import Login  from "./login.js";
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import React from 'react'
import {Scrollbars} from 'react-custom-scrollbars';
import { useContext } from "react";
import { AccountContext } from "../../contextapi/accountprovider.jsx";
import ChatBox from "../chat/chatbox"



const useStyles = makeStyles({
    banner: {
        background:"#1ebea5",
        width: '100%',
        height: '25vh',
        backgroundPosition: 'left 0px top -100px',
    

    },
    typography:{
      fontSize:25,
      fontFamily: 'Raleway',
      fontStyle: 'normal',
      // fontDisplay: 'swap',
      fontWeight: 400,
      // padding:"10px",
      // paddingLeft:120,
      color:"white",
      // fontWeight:"bold "
      
    },
    icon:
    {
      marginRight:6,
      marginTop:6,
      width:30,
      color:"white",
      fontSize:30

    },
    childbox:
    {
      display:"flex",
      marginLeft:50,
      padding:35
      
    }
   
  })
   
    const Manage =()=>
    {

      const {Account}=useContext(AccountContext)
    const classes=useStyles();
    return(
      

<>
  <Box className={classes.banner}>
    <Box className={classes.childbox}>
    <WhatsAppIcon className={classes.icon}>

    </WhatsAppIcon>
    <Typography className={classes.typography}>
      WHATSAPP WEB
    </Typography>
    </Box>
  </Box>
{Account ?  <ChatBox/> : <Login/> }


</>




    )
}
export default Manage;
 