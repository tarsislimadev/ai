import React from 'react';
import { Text, Box, Spacer } from 'ink';

export default function App({ name = 'Stranger' }) {
	return (
		<Box>
			<Text>Hello, <Text color="green">{name}</Text></Text>
			<Spacer />
			<Text>Hello by AI</Text>
		</Box>
	);
}
