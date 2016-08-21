import React,{addons} from 'react';
/**************import Components */
import Cataloge from './Cataloge.jsx';


/****  material ui elements */
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyDA2O-uRbNipOS3iKo5qRAg3Xd46u67Bg0",
  authDomain: "samplesserver.firebaseapp.com",
  databaseURL: "https://samplesserver.firebaseio.com",
  storageBucket: "samplesserver.appspot.com"
};

const Color = "red"
class App extends React.Component {
   constructor(){
       super();
       firebase.initializeApp(firebaseConfig)
       this.state={
           navBarColor : '',
           refe : ''
       }
   }
   
  onChangeNavColor(event){
    this.setState({
      navBarColor : event.target.value,
    })
    //console.log(event.target.value)
    //this.updateNavBarColor()
  }

  getNavBarColor(){
    firebase.database().ref('AppProps/navBarColor').
    on('value',(snap)=>{
      console.log(snap.val())
    })
  }

  updateNavBarColor(){

    // try manually putting the value
    firebase.database().ref('AppProps/navBarColor').update({
      //navBarColor : this.state.inputValue
      //R:"11,243,18"
      R : this.state.navBarColor

    })
  }

  handleSubmitNavBarBG(){
    //alert(this.state.navBarColor)
    firebase.database().ref('AppProps/navBarColor').update({
      R : this.state.navBarColor

    })
  }

  _componentDidMount(){
    alert(window.innerWidth*0.5)
  }
   render() {
      
      return (
         <div>
         
         

          <MuiThemeProvider>
          <AppBar
          title="Cpanel Mobile {beta}"
          iconElementLeft={<IconButton><NavigationClose /></IconButton>}
          />
          </MuiThemeProvider>

          <div style={mainWrapper}>

          <div style={leftWrapper}>

          <h2>Navigation Bar</h2>

          <h3>Background Color</h3>
          <MuiThemeProvider>
          <TextField
          hintText="Enter RGB Value - ex : 199,10,10"
          onChange={this.onChangeNavColor.bind(this)}
          />
          </MuiThemeProvider>
          <br/>
          <MuiThemeProvider>

          <RaisedButton 
          label="Submit" 
          primary={true}
          onClick={this.handleSubmitNavBarBG.bind(this)}
          
          />
          </MuiThemeProvider>


          <h3>{this.state.navBarColor}</h3>
          <MuiThemeProvider>
          <TextField
          hintText="ex : My Awesome App"
          />
          </MuiThemeProvider>
          <br/>
          <MuiThemeProvider>

          <RaisedButton label="Submit" primary={true}  />
          </MuiThemeProvider>
          
          
          <Cataloge title="Catalogue"/>
          
          </div>








            <div style={RightWrapper}>Simulator Preview Goes Here --</div>
            
            
          </div>
        
         </div>
        
      );
   }
}

export default App;


var mainWrapper = {
 //backgroundColor : 'red',
 display : 'flex',
 //height : 150,
 //marginTop : 450,
 width : 920,
 margin : 'auto'
}

var leftWrapper = {
width : window.innerWidth*0.4,
//height : 200,
margin : 'auto',
//backgroundColor : 'green',
flexDirection : 'column',
}

var RightWrapper = {
width : window.innerWidth*0.4,
height : 200,
marginTop : 100,
backgroundColor : 'yellow'
}