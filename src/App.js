import React, { Component } from 'react';
import './App.css';
import DataProcessed from './Components/DataProcessed';

class App extends Component {
	constructor(props){
		super(props);
		this.state = { 	ordersRecieved : '', 
						totalAmountOfOrders: '', 
						singleOrderNames: [], 
						numbers1: '',
						numbers2: '', 
						numbers3: '', 
						numbers4: '',
						numbers5: ''
					};
		//this.onChange = this.onChange.bind(this)
	}
  onChange(e){
	var that = this;
    let files = e.target.files;
    let reader = new FileReader();
    reader.readAsText(files[0]);
    reader.onload = function (){
		const lines = reader.result.split('\n').map(function(line){
			return line.split(',')
		});

		let ordersRecieved = lines.length-1;
		lines.shift();
		
		let totalAmountOfOrders = lines.reduce(function(total, line){
			return total+Number(line[3]);
		},0)
		console.log(totalAmountOfOrders);
		
		let counterMap = new Map();
		lines.forEach(function(line){
			let x = line[1]
			
			if(counterMap.has(x)){
				counterMap.set(x, Number(counterMap.get(x))+1);	
			}
			else{
				counterMap.set(x,1);
			}
		});

		let numbers = [];
		counterMap.forEach(function(key, value){
			if(key===1){
				numbers.push(value);
			}
		});
		//console.log(numbers)
		
		let singleOrderNames=[];
		lines.forEach(function(line){
			let number = line[1];
			const found = numbers.find(element => element === number);
			if(found === number){
				singleOrderNames.push(line[2]);
			}

		});
		console.log(singleOrderNames);
		console.log(singleOrderNames.length);
		
		//2 times
		let numbers2 = [];
		counterMap.forEach(function(key,value){
			if(key===2){
				numbers2.push(value);
			}
		});
		console.log(numbers2.length);

		//3 times
		let numbers3 = [];
		counterMap.forEach(function(key,value){
			if(key===3){
				numbers3.push(value);
			}
		});
		console.log(numbers3.length);


		//4 times
		let numbers4 = [];
		counterMap.forEach(function(key,value){
			if(key===4){
				numbers4.push(value);
			}
		});
		console.log(numbers4.length);

		//5 or more times
		let numbers5 = [];
		counterMap.forEach(function(key,value){
			if(key>=5){
				numbers5.push(value);
			}
		});
		console.log(numbers5.length);

		that.setState({
				ordersRecieved : ordersRecieved,
				totalAmountOfOrders: totalAmountOfOrders,
				singleOrderNames : singleOrderNames,
				numbers1 : singleOrderNames.length,
				numbers2 : numbers2.length,
				numbers3 : numbers3.length,
				numbers4 : numbers4.length,
				numbers5 : numbers5.length,
		});
	}

  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
		  <h2>Please upload the file here</h2>
          <input type="file" onChange={(e) => this.onChange(e)}/>
		  <DataProcessed ordersRecieved={this.state.ordersRecieved} 
		   totalAmountOfOrders={this.state.totalAmountOfOrders}
		   singleOrderNames={this.state.singleOrderNames}
		   numbers1={this.state.numbers1}
		   numbers2={this.state.numbers2}
		   numbers3={this.state.numbers3}
		   numbers4={this.state.numbers4}
		   numbers5={this.state.numbers5}/>
          {/* <div><Link to="/DataProcessd">Data Processed</Link></div> */}
        </header>
      </div>
    );
  }
}

export default App;
