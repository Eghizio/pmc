import React, { useState } from 'react';

export const MemoryContext = React.createContext();

export const MemoryProvider = ({ children }) => {
	const [memory, setMemory] = useState({
		stack: Array(21).fill(''),
		programRunning: false,
		AC: 0,
		PC: 0,
	});

	return (
		<MemoryContext.Provider value={{ memory, setMemory }}>
			{children}
		</MemoryContext.Provider>
	);
};