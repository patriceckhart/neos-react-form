import * as React from "react";
import {Fragment} from "react";
import PropTypes from 'prop-types';

class Radio extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		const {name, defaultValue, attributes} = this.props;

		return (
			<Fragment>
				<input type="radio" name={name} defaultValue={defaultValue} {...attributes} />
			</Fragment>
		);
	}
}

Radio.propTypes = {
	name: PropTypes.string,
	defaultValue: PropTypes.string,
	attributes: PropTypes.object
};

Radio.defaultProps = {
	defaultValue: ''
};

export default Radio;
