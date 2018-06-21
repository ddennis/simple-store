/**
 * Created by @author @ddennis - ddennis.dk aka fantastisk.dk/works aka meresukker.dk on 20-06-2018.
 */


import React, { Component } from 'react'

const Context = React.createContext();

export class Denux extends Component {

	static Consumer = Context.Consumer;

	state = {
		...this.props.state, dispatch:(action) =>{
			this.setState(
				state => this.props.reducer(state, action)
			);
		}
	};

/*	state = {
		items:["DENUX ONE", "DENUX TWO", "DENUX THREE"],
		dispatch: ( action )=> {
			this.setState(
				state => this.props.reducer(state, action)
			);
		}
	};*/


	render() {
		return <Context.Provider value={this.state}>{this.props.children}</Context.Provider>;
	}

}


