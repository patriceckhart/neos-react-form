# Neos Flow compatible form components for use with react

## Installation

Run
```
yarn add neos-react-form
```

## Neos Flow Controller

````php
<?php
namespace Acme\Package\Controller\Api;

/*
 * This file is part of the Acme.Package package.
 */

use Neos\Flow\Annotations as Flow;
use Neos\Flow\Mvc\Controller\ActionController;
use Neos\Flow\Mvc\View\JsonView;
use Acme\Package\Domain\Model\Person;
use Neos\Flow\Property\TypeConverter\PersistentObjectConverter;
use Acme\Package\Domain\Repository\PersonRepository;

#[Flow\Scope("singleton")]
final class PersonController extends ActionController
{
    /**
     * @var string
     */
    protected $defaultViewObjectName = JsonView::class;

    #[Flow\Inject]
    protected PersonRepository $personRepository;

    /** 
     * initializeAction which later belongs in an abstract controller
    */
    protected function initializeAction() {
        $arguments = $this->request->getArguments();
        foreach ($arguments as $argumentIterator => $argument) {
            $propertyMappingConfiguration = $this->arguments[$argumentIterator]->getPropertyMappingConfiguration();
            $propertyMappingConfiguration->setTypeConverterOption(PersistentObjectConverter::class,
                PersistentObjectConverter::CONFIGURATION_CREATION_ALLOWED, true );
            $propertyMappingConfiguration->setTypeConverterOption(PersistentObjectConverter::class,
                PersistentObjectConverter::CONFIGURATION_MODIFICATION_ALLOWED, true );
            $propertyMappingConfiguration->allowAllProperties()->skipUnknownProperties();
        }
    }

    public function createAction(Person $person): void
    {
        $this->personRepository->add($person);
        $this->view->assign('value', ['response' => 'success', 'result' => $person]);
    }

    public function updateAction(Person $person): void
    {
        $this->personRepository->update($person);
        $this->view->assign('value', ['response' => 'success', 'result' => $person]);
    }

}

````

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
