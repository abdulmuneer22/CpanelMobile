import React,{addons} from 'react';

/****  material ui elements */
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


class Cataloge extends React.Component {
   constructor() {
    super();
    this.state = {value: 1};
  }
  
   //handleChange = (event, index, value) => this.setState({value});
   handleChange(event, index, value) { 
       this.setState({value});
    }

    _showProduct(){
        var index = this.state.value 
        alert("Test")
        switch(index){
            case '1':
                return <div>Show Water Cans</div>
            case 'Laundry':
                return <div>Laundry</div>
        }
    }

    showProduct(index){
        //alert(index)
        switch(index){
            case 1:
                return (<div></div>)
            case 2:
                return (
                    <div>
                    <MuiThemeProvider>
                    <SelectField 
                    value={0} 
                    //onChange={this.handleChange.bind(this)}
                    >
                    <MenuItem value={0} primaryText="Select A Product .." />
                    <MenuItem value={1} primaryText="SKU-1" />
                    <MenuItem value={2} primaryText="SKU-2" />
                    </SelectField>
                    </MuiThemeProvider>

                    </div>)
            case 3:
                return (<div>Show Laundry</div>)
                
        }
    }



getProducts(){

var CanRef = firebase.database().ref('urbanservices/products/watercan/')
CanRef.on('value',(can)=>{
  //alert(can.val())
  var items = []
  
  can.forEach((child)=>{
    items.push({
      title : child.val().productTitle,
      imageurl : child.val().imageurl,
      price : child.val().price,
      sku : child.val().sku,
      description : child.val().description


    })
  })

  console.log(items)
   
  
})

}

   render() {
      
      return (
         <div>
         <h2>{this.props.title}</h2>
         </div>)}

}


export default Cataloge;
