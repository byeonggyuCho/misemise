import React, { Component } from 'react';
import './Side.css';
import TreeView from'../treeView/TreeView'
let data = [{
  id:1,
  label:"Depth11",
  icon:"dept1",
  expanded:true,
  children:[{
      id:3,
      label:"Depth1_1",
      value:"/two",
      selected: true,
      icon:"dept2"
      },{
        id:3,
        label:"Depth1_2",
        value:"/three",
        selected: true,
        icon:"dept2"
        }
  ]
},
{
  id:1,
  label:"Depth2",
  icon:"dept1",
  expanded:true,
  children:[{
      id:3,
      label:"Depth2_1",
      value:"/two",
      selected: true,
      icon:"dept2"
      },{
        id:3,
        label:"Depth2_2",
        value:"/three",
        selected: true,
        icon:"dept2"
        }
  ]
}];

class SideBox extends Component {

  
  onSelect = (e,a)=>{
    debugger;
    console.log(123);
    return alert(12);
  }

  render() {
    return (
      <>
        <div className = "side">
          <div className = "sidebox">
           <div className = "contents">
              <div className="menu">
              <TreeView   
                data={data} 
              />
              </div>
           </div>
          </div>
        </div>
      </>
    );
  }
}

export default SideBox;
