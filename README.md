# Neos Flow compatible form components for use with react

## Installation

Run
```
yarn add neos-react-form
```

## Usage

```javascript
import * as React from "react";
import {Submit, Input, Form, Hidden, Select, SelectOption, TextArea, Checkbox, Label, Radio, Upload, Identifier} from "neos-react-form";

class Component extends React.Component {


	render() {

		return (
			<Fragment>

				<Form name="createForm" attributes={{id: 'createForm'}} onSubmit={(p) => this.submitForm(p)} >

					{item &&
						<Identifier name="person" defaultValue={`${item ? item.identifier : ``}`} />
					}

					<Hidden name="person[foo1]" defaultValue="Bar" />

					<Input name="person[input]" attributes={{className: 'form-control', placeholder: 'Input'}} defaultValue={`${item ? item.input : ``}`} />

					<Select name="person[select]" attributes={{className: 'form-select'}} placeholder="Please select" >
						<SelectOption label="Foo" value="foo" />
						<SelectOption label="Bar" value="bar" />
						<SelectOption label="Bars" value="bars" />
					</Select>

					<TextArea name="person[textarea]" attributes={{className: 'form-control', placeholder: 'Textarea'}} />

					<div className="form-check">
						<Checkbox name="test[checkbox]" attributes={{className: 'form-check-input', id: 'checkbox'}} />
						<Label htmlFor="checkbox" attributes={{className: 'form-check-label'}} >
							Checkbox
						</Label>
					</div>

					<div className="form-check">
						<Radio name="test[radio]" attributes={{className: 'form-check-input', id: 'radio'}} />
						<Label htmlFor="radio" attributes={{className: 'form-check-label'}} >
							Radio
						</Label>
					</div>

					<div className="mb-3">
						<Upload name="test[image]" attributes={{className: 'form-control'}} />
					</div>

					<Submit attributes={{className: 'btn btn-secondary'}} >
						Submit form
					</Submit>

				</Form>

			</Fragment>
		);
	}
}

export default Component;

```

## Author

* E-Mail: mail@patriceckhart.com
* URL: http://www.patriceckhart.com
