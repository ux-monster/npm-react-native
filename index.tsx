import React from 'react';
import { View } from 'react-native';
import Title from './components/Title';

type Props = {};

export default function index({}: Props) {
	return (
		<View>
			<Title value="My Component refresh" />
		</View>
	);
}
