import * as React from "react";
import {Fragment} from "react";
import PropTypes from 'prop-types';

class Label extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		const {attributes, htmlFor, children} = this.props;

		return (
			<Fragment>
				<label {...attributes} htmlFor={htmlFor} >
					{children}
				</label>
			</Fragment>
		);
	}
}

Label.propTypes = {
	htmlFor: PropTypes.string,
	attributes: PropTypes.object
};

export default Label;
