
import { Dialog, Typography, makeStyles, List, ListItem, withStyles, Box, Input, InputLabel,Button,Menu,MenuItem } from '@material-ui/core';
import NotificationsOffIcon from '@material-ui/icons/NotificationsOff';
import SearchIcon from '@material-ui/icons/Search';
import dp from "../../../src/dp.jpg"
import { useState } from 'react';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulletedOutlined';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { GoogleLogout } from 'react-google-login';
import { useContext } from 'react';
import { AccountContext } from '../../contextapi/accountprovider';

import { display } from '@material-ui/system';

// import {SearchIcon} from '@material-ui/icons/Search';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

const usestyle = makeStyles(
    {
        parentbox:
        {
            width: "500px",
            height: "1000px"
            // border: "1px solid grey"
        },
   
        childbox:
        {
            widht: 400,
            height: 100,
            border: "1px solid grey",
            borderRadius: "8px",
            display: "flex",
            gap: "12px",
            backgroundColor: "	#white"



        },
        Typography:
        {
            marginTop: 25,
            fontSize: "20px"
        },
        childbox1:
        {
            widht: 400,
            height: 100,
            border: "1px solid grey",
            display: "flex",
            gap: "20px"

        },
        icon:
        {
            margin: "35px 0 0 auto",
            display: "flex",
            gap: "20px"
        },
        childbox2:
        {
            widht: 400,
            height: 100,
            border: "1px solid grey",
            background: "#9de1fe",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            flexDirection: "column",
            padding: "10px 0 0 10px"

        },
        
        childboxofbox2:
        {
            display: "flex"
            // width: "390",
            // // flexWrap:"wrap"
            // // justifyContent: "spacebetween"
            // gap:"60px"


        },

        childbox3:
        {
            widht: 200,
            height: 70,
            border: "1px solid grey",
            display: "flex",
            //  textAlign:"center",
            alignItems: "center",
            justifyContent: "center",
            // backgroundColor: "#D3D3D3"
        },
        input:
        {
            width:"400px",
            borderRadius:"10px",
            height:"30px",
            border: "2px solid grey",
            padding:"10px"
        },
        inputbox:
        {
            height: "35px",
            width: "224px",
            // border:"2px solid blue",
            borderRadius: "10px",
            display: "flex"


        },

        image:
        {
            width: 50,
            height: 50,
            borderRadius: "30px",
            marginTop: "24px",
            marginLeft: "5px"
        },
        send:
        {
// float:"left"
// display:"inline-block",
width:"100px"

        },
        recieve:

        {
float:"right",
display:"inline-block",
width:"100vw"


        }

    }
)
const style = {
    paper3:
    {
        height: "90vh",

        width: "200%",
        maxWidth: "90%",
        marginTop: 110,
        maxHeight: "100%",

        overflow: "hidden"

    }
}
const ChatBox = ({ classes }) => {
    const clas = usestyle();
    const [open, setOpen] = useState(false);
    const {Account,setAccount} =useContext(AccountContext)
    const handleClose = ()=>
    {
setOpen(false)

    }
    const handleclick= (event)=>
    {
setOpen(event.currentTarget)
    }
    const OnLogoutSuccess = () =>
    {
alert("you have been logged out");
console.clear();
setAccount('');
console.log(Account)

    }
    const clientId='322083813041-b5feb2v35m2u5cohjkbo84ub72sdl378.apps.googleusercontent.com'

    return (



        <Dialog open={true} classes={{ paper: classes.paper3 }}>
            <Box style={{ display:"flex"}} >
                <Box className={clas.parentbox}>
             
                <Box className={clas.childbox1}>
        
        <Box className={clas.icon}>
        <img style={{marginRight:"295px",marginTop:"-4px"}} className={clas.image} src={dp} alt="" />
            <DonutLargeIcon />
    
            <ChatBubbleOutlineOutlinedIcon />
            <MoreVertIcon onClick={handleclick} style={{cursor:"pointer"}} />
            <Menu
  
  anchorEl={open}
  keepMounted
  open={Boolean(open)}
  onClose={handleClose}
  getContentAnchorEl={null}
  anchorOrigin={
      {
          vertical:'bottom',
          horizontal:'center'
      }}
  transformOrigin={
      {
          vertical:'top',
          horizontal:'right'
      }
  }


>
  <MenuItem onClick={handleClose}>Profile</MenuItem>
  <MenuItem onClick={handleClose}>
<GoogleLogout
clientId={clientId}
buttonText="logout"

onLogoutSuccess={OnLogoutSuccess}>


</GoogleLogout>

  </MenuItem>
  
</Menu>
        </Box>

    </Box>

                    <Box className={clas.childbox2}>

                        <Box className={clas.childboxofbox2}>
                            <NotificationsOffIcon />


                            <Typography style={{ fontSize: 22 }} >Get notified when new messag arrives</Typography>

                        </Box>
                        <Typography style={{ fontSize: 18 }} >Turn on desktop notification ></Typography>
                    </Box>


                    <Box className={clas.childbox3}>
                        <Box className={clas.inputbox}>
                            <InputLabel htmlFor="my-input"> <SearchIcon style={{ marginTop: "6px" }} /> </InputLabel>
                            <Input disableUnderline={true} className={clas.input} id="my-input" placeholder="search or start new chat" />
                        </Box>
                    </Box>
                    <Box className={clas.childbox}>

                        <img className={clas.image} src={dp} alt="" />
                        <Box>
                            <Typography className={clas.Typography} >Ranjeet W</Typography>
                            <Typography>Photo</Typography>
                        </Box>
                        <Typography style={{ margin: "35px 0 0 280px" }}>12:04</Typography>
                    </Box>
                    <Box className={clas.childbox}>

                        <img className={clas.image} src={dp} alt="" />
                        <Box>
                            <Typography className={clas.Typography} >Ranjeet W</Typography>
                            <Typography>Photo</Typography>
                        </Box>
                        <Typography style={{ margin: "35px 0 0 280px" }}>12:04</Typography>
                    </Box>

                    <Box className={clas.childbox}>

                        <img className={clas.image} src={dp} alt="" />
                        <Box>
                            <Typography className={clas.Typography} >Ranjeet W</Typography>
                            <Typography>Photo</Typography>
                        </Box>
                        <Typography style={{ margin: "35px 0 0 280px" }}>12:04</Typography>
                    </Box>
                    <Box className={clas.childbox}>

                        <img className={clas.image} src={dp} alt="" />
                        <Box>
                            <Typography className={clas.Typography} >Ranjeet W</Typography>
                            <Typography>Photo</Typography>
                        </Box>
                        <Typography style={{ margin: "35px 0 0 280px" }}>12:04</Typography>
                    </Box>





                </Box>

                <Box >
                    <Box style={{ display: "flex", justifyContent: "space-between",postion:"fixed" }}>
                        <Box style={{ display: "flex", gap: "20px",height:"30px" }} >
                            <img className={clas.image} src={dp} alt="" />
                            <Typography style={{ marginTop: "23px", fontSize: "25px" }}>Ranjeet W</Typography>
                        </Box>
                        <Box style={{ display: "flex", gap: "20px" }} >
                            <SearchIcon style={{ marginTop: "15px" }} />
                            <MoreVertIcon style={{ marginTop: "15px" }} />
                        </Box>
                    </Box >
                    <Box style={{height:"540px",backgroundColor:"grey",marginTop:"62px" ,maxHeight:"1000px",overflow:"scroll"}} >
 <Box  style={{display:"flex",flexDirection:"column"}}>
 <Box style={{display:"flex",marginLeft:10,border:"1px solid grey",backgroundColor:"green",width:"100px",height:"30px",justifyContent:"center",alignItems:"center",borderRadius:"10px",marginTop:"4px"}}  >
     <Typography style={{color:"white"}}> Hii</Typography>
     </Box>
     <Box style={{ display:"flex",flexDirection:"row-reverse"}}>
         <Box style={{display:"flex",marginRight:"10px",backgroundColor:"blue",height:"30px",width:"100px",justifyContent:"center",alignItems:"center",borderRadius:"10px",marginTop:"4px"}}>
     <Typography style={{color:"white"}}>Hello</Typography>
     </Box>
     </Box>
 </Box>




                    </Box> 
                    <Box style={{ display: "flex", alignItems: "end", gap:"6px",postion:"fixed" }} >
                        <InsertEmoticonIcon style={{marginTop:"4px",cursor:"pointer"}} />
                        <Input disableUnderline={true} style={{textDecoration:"none"}} id="my-input" placeholder="Type a message" />
                        <Button variant="contained" color="primary" style={{marginLeft:"550px",marginTop:"2px"}} >Send</Button>
                    </Box>
                </Box>
            </Box>
        </Dialog>
    )
}
export default (withStyles)(style)(ChatBox)