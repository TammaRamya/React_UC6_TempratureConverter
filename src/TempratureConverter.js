import React from 'react';
export default class TempratureConverter extends React.Component{
    constructor(props){
        super(props)
        this.state={
            temperature:'',
            tempratureType:' hi',
            result:''

        }
    }
    onChangeTemperature=(event)=>{
        this.setState({
            temperature:(event.target.value.replace(/\D/g, ''))
        })
    }
    onChangeTempratureTypeee=(event)=>{
        this.setState({
            tempratureType:(event.target.value)
        })
    }
    converter=(event)=>{
        if(this.state.tempratureType==="Foreignheat")
        {
           this.setState({
          result:((this.state.temperature-32)*5/9)+'C'
           })
          
         }
        else if(this.state.tempratureType==="celsius")
        {
            this.setState({
         result:((this.state.temperature*9/5)+32)+'f'
            })
        }
    }
    render(){
        return(
                <div>
                    <h1>TempratureConverter</h1>
                    <div><label>Degrees:{" "}</label><input value={this.state.temperature} onChange={this.onChangeTemperature} placeholder="Enter Only numbers"/></div>
                          &nbsp;
                          <div><label>Type:</label> 
                              <select id='select box' value={this.state.tempratureType} onChange={this.onChangeTempratureTypeee}>
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