import * as React from "react";
import {Fragment} from "react";
import PropTypes from 'prop-types';

class Hidden extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		const {name, defaultValue, attributes} = this.props;

		return (
			<Fragment>
				<input type="hidden" name={name} defaultValue={defaultValue} {...attributes} />
			</Fragment>
		);
	}
}

Hidden.propTypes = {
	name: PropTypes.string,
	defaultValue: PropTypes.string,
	attributes: PropTypes.object
};

Hidden.defaultProps = {
	defaultValue: ''
};

export default Hidden;
