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
    this.state = {
        categoryIndex: 0,
        productIndex : 0
    };
  }
  
   //handleChange = (event, index, value) => this.setState({value});
   handleChange(event, index, value) { 
       this.setState({categoryIndex : index});
    }

    
    
    categorySelector(index){
        switch(index){
            case 1:
                return (
                <div>
                <div>
                    <MuiThemeProvider>
                    <SelectField 
                    value={this.state.productIndex} 
                    onChange={this.showProduct.bind(this)}
                    >
                    <MenuItem value={0} primaryText="Select A Product .." />
                    <MenuItem value={1} primaryText="SKU-1" />
                    <MenuItem value={2} primaryText="SKU-2" />
                    </SelectField>
                    </MuiThemeProvider>

                </div>
                <div>products</div>
                </div>
                )
            case 2:
                return (<div>Show Laundry</div>)
            
    }
}
    
  showProduct(event, index, value) { 
      //alert(value)
      this.setState({productIndex : index});
      
    }

displayProdDetails(){
    return(
        <div>Product Details</div>
    )
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

        <div>
                <MuiThemeProvider>
                <SelectField 
                value={this.state.categoryIndex} 
                onChange={this.handleChange.bind(this)}
                >
                <MenuItem value={0} primaryText="Select A Category  .." />
                <MenuItem value={1} primaryText="Water Can" />
                <MenuItem value={2} primaryText="Laundry" />
                </SelectField>
                </MuiThemeProvider>

        </div>

        <div>
        {
            // Show option to select products from Selected cat
            this.categorySelector(this.state.categoryIndex)
        }
        </div>
        
         </div>)
        
    
}

}


export default Cataloge;
