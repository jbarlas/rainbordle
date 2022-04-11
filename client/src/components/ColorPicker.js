import React from 'react';
import IroColorPicker from './IroColorPicker';
import { Form, FormGroup, Label, Input, Col, Row, Progress, Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

export default function ColorPicker() {
	const [rgb, setRgb] = React.useState({
			b: Math.floor(Math.random() * 255),
			g: Math.floor(Math.random() * 255),
			r: Math.floor(Math.random() * 255),
		});

	const [hex, setHex] = React.useState(rgbToHex(rgb.r, rgb.g, rgb.b));

	const updateColor = (newColor) => {
		setHex(newColor.hexString);
		setRgb(newColor.rgb);
		console.log("rgb: ", rgb);
	}

	function rgbToHex(r, g, b) {
		return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
	}

	return (
		<div>
			<div>
				<div style={{backgroundColor: hex}}>
					<IroColorPicker
					hex={hex}
					color={ rgb }
					onColorChange={ (color) => { updateColor(color) } }
					/>
				</div>
			<Card>
				<CardBody>
				<CardTitle tag="h5">
					Red
				</CardTitle>
				<CardSubtitle
					className="mb-2 text-muted"
					tag="h6"
				>
					{rgb.r}
				</CardSubtitle>
				<Progress value={rgb.r*100/255} color='danger'/>
				</CardBody>
			</Card>
			<Card>
				<CardBody>
				<CardTitle tag="h5">
					Green
				</CardTitle>
				<CardSubtitle
					className="mb-2 text-muted"
					tag="h6"
				>
					{rgb.g}
				</CardSubtitle>
				<Progress value={rgb.g*100/255} color='success'/>
				</CardBody>
			</Card>
			<Card>
				<CardBody>
				<CardTitle tag="h5">
					Blue
				</CardTitle>
				<CardSubtitle
					className="mb-2 text-muted"
					tag="h6"
				>
					{rgb.b}
				</CardSubtitle>
				<Progress value={rgb.b*100/255} color='primary'/>
				</CardBody>
			</Card>
			</div>
		</div>
	);
}