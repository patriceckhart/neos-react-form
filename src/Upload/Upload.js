import * as React from "react";
import {Fragment} from "react";
import PropTypes from 'prop-types';

class Upload extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		const {name, defaultValue, attributes} = this.props;

		return (
			<Fragment>
				<input type="file" name={`${name + `[originallySubmittedResource][__identity]`}`} defaultValue={defaultValue} {...attributes} />
			</Fragment>
		);
	}
}

Upload.propTypes = {
	name: PropTypes.string,
	defaultValue: PropTypes.string,
	attributes: PropTypes.object
};

Upload.defaultProps = {
	defaultValue: ''
};

export default Upload;
