import React ,{Component}  from 'react';
import CardList from './cardList';
import robots from './robots';
import Searchbox from './Searchbox';


class App extends Component{
	constructor(){
		super();
		this.state={
			robots:robots,
			searchfield:''
			}
	}
	onSearchChange=(event)=>{
		this.setState({searchfield:event.target.value});
		// console.log(Filterrobots);
	}
	render(){
		const Filterrobots=this.state.robots.filter(robots=>{
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		return (
		<div className="tc">
		<h1>ROBOFRIENDS</h1>
		<Searchbox searchChange={this.onSearchChange}/>
		<CardList robots={Filterrobots}/>
		</div>
		);
	}
}
export default App;