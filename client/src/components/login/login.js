import SettingsIcon from '@material-ui/icons/Settings';
import {Dialog,Typography,makeStyles,List,ListItem,withStyles,Box,Link,Checkbox} from '@material-ui/core';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import image from "../../../src/qr.png"
import ReactPlayer from 'react-player'
import {GoogleLogin} from 'react-google-login';
import { useContext } from 'react';
import { AccountContext } from '../../contextapi/accountprovider';
const usestyle=makeStyles(
    {
        heading:
        {
            fontSize:28
        },
        dialog:
        {
            width:"90%"
        },
        image:
        {
            width:200,
            height:200,
            float:"right",
            marginTop:"-200px"
        },
        // div:
        // {
        //     display: 'block', maxWidth: 300, marginLeft: 20, overflow: 'auto',height:"1000px", overflowY: "auto" 
        // }
   
    }
)
const style={
    paper2:
    {
        height:"90vh",
        
        width:"200%",
        maxWidth:"60%",
        marginTop:110,
        
        
    }
}
const Login =({classes})=>
{
    const OnLoginSuccess= (res)=>
    {
        console.log(res.profileObj)
        setAccount(res.profileObj)
        console.log("login successfull")
    }
    const OnLoginFailure= (res)=>
    { 
        console.log("login unsuccessfull")
    }
    const {setAccount}=useContext(AccountContext)
    
    
    
    const clientId='322083813041-b5feb2v35m2u5cohjkbo84ub72sdl378.apps.googleusercontent.com'
    const clas=usestyle();
    // const class= style();
return(
    
//    <div class={classes.div} >
 <Dialog open={true} classes={{paper:classes.paper2}} >
<Box style={{margin:"30px 0 0 30px"}}>
<Typography className={clas.heading} >To use whatup on Your computer</Typography>
<List>
    <ListItem> 1. Open whasup on your phone</ListItem>
    <ListItem> 2. Tap Menu  <FormatListBulletedIcon></FormatListBulletedIcon>  or setting <SettingsIcon></SettingsIcon>  and select Linked Device </ListItem>
    <ListItem> 3. click on google symbol in qr code to login</ListItem>
</List>
<Link><Typography style={{marginLeft:"15px"}}>Need help to get started</Typography></Link>

</Box>


<Box >
    
<img  className={clas.image} src={image} alt="" />
<Box style={{position:"absolute",left:"87%" ,top:"16%"}}>
<GoogleLogin
clientId={clientId}
buttonText=""
isSignedIn={true}
onSuccess={OnLoginSuccess}
onFailure={OnLoginFailure}


/>
</Box>
</Box>
<Box style={{marginLeft:"760px"}}>
<Box style={{display:"flex" }}>
<Checkbox 

value="checkedA"
inputProps={{ 'aria-label': 'Checkbox A' }}
/>
<Typography style={{marginTop:"8px"}} >keep me signed in</Typography>
</Box>
</Box>

<ReactPlayer style={{margin:"auto"}}url='https://www.youtube.com/watch?v=OigeuQ0TXxg&ab_channel=BalajiG' />

</Dialog> 
// </div>

)



}
export default (withStyles)(style)(Login)

