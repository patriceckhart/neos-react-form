import * as React from "react";
import {Fragment} from "react";
import PropTypes from 'prop-types';

class Form extends React.Component {

	constructor(props) {
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(form) {
		form.preventDefault();
		const {onSubmit} = this.props;
		if(onSubmit) {
			onSubmit(form);
		}
	}

	render() {

		const {action, method, name, encType, attributes, children} = this.props;

		return (
			<Fragment>
				<form action={action} method={method} name={name} encType={encType} {...attributes} onSubmit={(p) => this.onSubmit(p)} >
					{children}
				</form>
			</Fragment>
		);
	}
}

Form.propTypes = {
	action: PropTypes.string.isRequired,
	name: PropTypes.string,
	encType: PropTypes.string,
	attributes: PropTypes.object
};

Form.defaultProps = {
	type: 'text',
	method: 'POST',
	encType: 'multipart/form-data'
};

export default Form;
