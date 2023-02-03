import * as React from "react";
import {Fragment} from "react";
import PropTypes from 'prop-types';

class Checkbox extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		const {name, defaultValue, attributes} = this.props;

		return (
			<Fragment>
				<input type="checkbox" name={name} defaultValue={defaultValue} {...attributes} />
			</Fragment>
		);
	}
}

Checkbox.propTypes = {
	name: PropTypes.string,
	defaultValue: PropTypes.string,
	attributes: PropTypes.object
};

Checkbox.defaultProps = {
	defaultValue: ''
};

export default Checkbox;
