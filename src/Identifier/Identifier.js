import * as React from "react";
import {Fragment} from "react";
import PropTypes from 'prop-types';

class Identifier extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		const {name, defaultValue, attributes} = this.props;

		return (
			<Fragment>
				<input type="hidden" name={`${name}[__identity]`} defaultValue={defaultValue} {...attributes} />
			</Fragment>
		);
	}
}

Identifier.propTypes = {
	name: PropTypes.string,
	defaultValue: PropTypes.string,
	attributes: PropTypes.object
};

Identifier.defaultProps = {
	defaultValue: ''
};

export default Identifier;
