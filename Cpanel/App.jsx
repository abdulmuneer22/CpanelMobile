import React,{addons} from 'react';

import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyDA2O-uRbNipOS3iKo5qRAg3Xd46u67Bg0",
  authDomain: "samplesserver.firebaseapp.com",
  databaseURL: "https://samplesserver.firebaseio.com",
  storageBucket: "samplesserver.appspot.com"
};
class App extends React.Component {
   constructor(){
       super();
       firebase.initializeApp(firebaseConfig)
       this.state={
           inputValue : '',
           refe : ''
       }
   }
   
  onChangeNavColor(event,ref){
    this.setState({
      inputValue : event.target.value,
    })
    //console.log(event.target.value)
    this.updateNavBarColor()
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
      R : this.state.inputValue

    })
  }

   render() {
      
      return (
         <div>
         <div>
            Hello {this.state.inputValue} {this.state.refe}
         </div>

         <div>Navigation Bar Color :</div>
         <input type="text" onChange={this.onChangeNavColor.bind(this)}/>
         


         
         </div>
         
      );
   }
}

export default App;