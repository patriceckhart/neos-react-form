import * as React from "react";
import {Fragment} from "react";
import PropTypes from 'prop-types';

class SelectOption extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		const {label, value, attributes} = this.props;

		return (
			<Fragment>
				<option value={value} {...attributes} >{label}</option>
			</Fragment>
		);
	}
}

SelectOption.propTypes = {
	label: PropTypes.string,
	value: PropTypes.string,
	attributes: PropTypes.object
};

export default SelectOption;
