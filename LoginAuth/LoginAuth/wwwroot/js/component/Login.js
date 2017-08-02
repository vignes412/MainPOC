import React from 'react';
import ReactDom from 'react-dom';
import {Button} from './common/FormText';
import axios from 'axios';
import RangeCalendar from 'rc-calendar/lib/RangeCalendar';
import DatePicker from 'rc-calendar/lib/Picker';
import 'rc-calendar/assets/index.css';
//import Calendar from 'uxcore-calendar';
export default class Login extends React.Component{

    constructor(props){
        super(props)
        this.state={
           userName:"",
           passWord:""
        }
        this.handleuserNameChange=this.handleuserNameChange.bind(this);
        this.handlepassWordChange=this.handlepassWordChange.bind(this);
        this.handleClick=this.handleClick.bind(this);
    }
  
     handleuserNameChange(event) {
        this.setState({userName: event.target.value});
    }
    handlepassWordChange(event){
         this.setState({passWord: event.target.value});
    }
    handleClick(){
        axios.post("http://localhost:50439/api/token","username="+this.state.userName+"&password="+this.state.passWord,
    {
        "Content-Type": "application/x-www-form-urlencoded","Access-Control-Allow-Origin": "*"

    }).then(data=>{
        console.log(data);
    })
        console.log(this.state);
    }
    render(){
        return (
            <div>
              
                  <input type='text' value={this.state.userName} onChange={this.handleuserNameChange} />
                   <input type='text' value={this.state.passWord} onChange={this.handlepassWordChange}  /> 
                   <Button Name="Submit" onclick={this.handleClick} />
                   <div>
                    <RangeCalendar/>
                   </div>
            </div>
        );
    }
}