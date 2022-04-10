import React from 'react';
import IroColorPicker from './IroColorPicker';
import { Form, FormGroup, Label, Input, Col, Row } from 'reactstrap';

export default class ColorPicker extends React.Component {
	state = {
		rgb: {
			b: Math.floor(Math.random() * 255),
			g: Math.floor(Math.random() * 255),
			r: Math.floor(Math.random() * 255),
		},
	}


	render() {
		const updateColor = (newColor) => {
			console.log("chosen color: ", this.state.rgb)
			this.state.color = newColor
		}
		return (
			<div>
				<div>
				<IroColorPicker
				color={ this.state.rgb }
				onColorChange={ (color) => { updateColor(color.rgb) } }
				/>
				<Form>
					<FormGroup row>
					<Label for="red-input">Red</Label>
					<Col sm={10}>
						<Input type="number" name="red" id="red-input" placeholder={this.state.rgb.r} />
					</Col>
					</FormGroup>
					<FormGroup row>
					<Label for="blue-input">Blue</Label>
					<Col sm={10}>
						<Input type="number" name="blue" id="blue-input" placeholder={this.state.rgb.b} />
					</Col>
					</FormGroup>
					<FormGroup row>
					<Label for="green-input">Green</Label>
					<Col sm={10}>
						<Input type="number" name="green" id="green-input" placeholder={this.state.rgb.g} />
					</Col>
					</FormGroup>
				</Form>
				</div>
			</div>
		);
	}
}