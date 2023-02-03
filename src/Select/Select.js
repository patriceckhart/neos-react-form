import * as React from "react";
import {Fragment} from "react";
import PropTypes from 'prop-types';
import SelectOption from "./SelectOption";

class Select extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		const {name, defaultValue, attributes, placeholder, children} = this.props;

		return (
			<Fragment>
				<select name={name} defaultValue={defaultValue} {...attributes} >
					{placeholder &&
						<SelectOption attributes={{disabled: true}} label={placeholder} />
					}
					{children}
				</select>
			</Fragment>
		);
	}
}

Select.propTypes = {
	name: PropTypes.string,
	defaultValue: PropTypes.string,
	attributes: PropTypes.object,
	children: PropTypes.array
};

Select.defaultProps = {
	defaultValue: ''
};

export default Select;
