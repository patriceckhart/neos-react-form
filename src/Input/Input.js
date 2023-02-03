import * as React from "react";
import {Fragment} from "react";
import PropTypes from 'prop-types';

class Input extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		const {type, name, defaultValue, attributes} = this.props;

		return (
			<Fragment>
				<input type={type} name={name} defaultValue={defaultValue} {...attributes} />
			</Fragment>
		);
	}
}

Input.propTypes = {
	type: PropTypes.string,
	name: PropTypes.string,
	defaultValue: PropTypes.string,
	attributes: PropTypes.object
};

Input.defaultProps = {
	type: 'text',
	defaultValue: ''
};

export default Input;
