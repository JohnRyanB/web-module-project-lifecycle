import React from "react";
import "./App.css";
import axios from "axios";
import Card from "./Components/Card";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			github: [],
			followers: [],
		};
	}

	componentDidMount() {
		axios
			.get("https://api.github.com/users/JohnRyanB")
			.then((res) =>
				this.setState({
					...this.state,
					github: res.data,
				})
			)
			.catch((err) => {
				console.log(err);
			});

		axios
			.get("https://api.github.com/users/JohnRyanB/followers")
			.then((res) =>
				this.setState({
					...this.state,
					followers: res.data,
				})
			)
			.catch((err) => {
				console.log(err);
			});
		console.log(this.state.followers);
	}

	render() {
		return (
			<div className="App">
				<h1 className="title">My Github Lifecycle Project</h1>
				<Card card={this.state.github} followers={this.state.followers} />
			</div>
		);
	}
}
export default App;
