import React, { Component } from 'react';
import './Square.css';

export default class Square extends Component {
	constructor (props) {
		super (props);
		this.state = {
			digitSet: false,
		}
	}

/****************************************************
 React LifeCycle hook
 Attempts to stop un-necessary UI updates
 - the parent object will send down a boolean prop name:value
   with the name being 'redraw'
 ****************************************************/
	shouldComponentUpdate (nextProps, nextState) {
		// console.log ('this.props', this.props, 'nextProps', nextProps);
		if (this.props.redraw || nextProps.redraw)
			return true;

		return false;
	}

  render() {
		const { value, handleClick, selectedValue, bold } = this.props;
		let cName = 'square ';

		let setBoldRed = false;
		if (this.props.gameInit) {
			if (this.state.digitSet === false)
				this.state.digitSet = value ? value : false;
			else if (!value)
				this.state.digitSet = false;
		}

		if (this.state.digitSet)
			setBoldRed = true;

		console.log ('>> Square.render() >> state.digitSet', this.state.digitSet)

		if (bold || setBoldRed) {
			cName += 'bold ';
			if (setBoldRed)
				cName += 'color-red ';
		}

		if (selectedValue != null && selectedValue === value-1) {
			cName += ' shaded';
		} 

		return (
			<button className={cName} onClick={ handleClick } >
				{ value !== 0 ? value : '' }
			</button>
		);
  }
}

// export default function Square (props)  {
// }