import * as React from "react";
import {Fragment} from "react";
import PropTypes from 'prop-types';

class Submit extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		const {type, label, children, name, value, attributes} = this.props;

		return (
			<Fragment>
				<button type={type} name={name} value={value} {...attributes} >
					{children ? children : label}
				</button>
			</Fragment>
		);
	}
}

Submit.propTypes = {
	type: PropTypes.string,
	label: PropTypes.string,
	name: PropTypes.string,
	value: PropTypes.string,
	attributes: PropTypes.object
};

Submit.defaultProps = {
	type: 'submit',
	label: 'Button'
};

export default Submit;
