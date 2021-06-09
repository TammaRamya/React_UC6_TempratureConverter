import React from 'react';
export default class TempratureConverter extends React.Component{
    constructor(props){
        super(props)
        this.state={
            Temp:'',
            Type:'',
            result:''

        }
    }
    Tempera=(event)=>{
        this.setState({
            Temp:Number(event.target.value)
        })
    }
    Typeee=(event)=>{
        this.setState({
            Type:(event.target.value)
        })
    }
    converter=(event)=>{
        if(isNaN(this.state.Temp))
        {
          alert("please enter valid no");
        }
       else
       {
        if(this.state.Type==="Foreignheat")
        {
           this.setState({
          result:((this.state.Temp-32)*5/9)+'C'
           })
          
         }
        else if(this.state.Type==="celsius")
        {
            this.setState({
         result:((this.state.Temp*9/5)+32)+'f'
            })
        }
       }
    }
    render(){
        return(
                <div>
                    <h1>TempratureConverter</h1>
                    <div><label>Degrees:{" "}</label><input value={this.state.Temp} onChange={this.Tempera} placeholder="Enter any number"/></div>
                          &nbsp;
                          <div><label>Type:</label> 
                              <select id='select box' value={this.state.Type} onChange={this.Typeee}>
                              <option value="celsius">celsius</option>
                              <option value="Foreignheat">Foreignheat</option>
                                  </select>  
                          </div>
                          &nbsp;
                          &nbsp;
                          <div><button  onClick={this.converter}>Convert</button></div>
                          &nbsp;
                            <div>
                          <h4>Result:{this.state.result}</h4>
                          &nbsp; &nbsp; &nbsp;
                           </div>
                </div>
        )
    }
} 