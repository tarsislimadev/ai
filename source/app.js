import React from 'react';
import { render, Text, useApp, useInput } from 'ink';

export default function App({ name = 'Stranger' }) {
	const { exit } = useApp();

	useInput((input) => {
		if (input === 'e') {
			exit(new Error('Something went wrong!')); // exit with error
		}
	});

	return <Text>Press "e" to simulate error exit</Text>;
};
