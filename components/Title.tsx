import React from 'react';
import { Text } from 'react-native';

type Props = {
	value: string;
};

export default function Title({ value }: Props) {
	return <Text>{value}</Text>;
}
