import * as React from "react";
import {Fragment} from "react";
import PropTypes from 'prop-types';

class Textarea extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		const {type, name, defaultValue, attributes} = this.props;

		return (
			<Fragment>
				<textarea name={name} defaultValue={defaultValue} {...attributes} />
			</Fragment>
		);
	}
}

Textarea.propTypes = {
	name: PropTypes.string,
	defaultValue: PropTypes.string,
	attributes: PropTypes.object
};

Textarea.defaultProps = {
	defaultValue: ''
};

export default Textarea;
