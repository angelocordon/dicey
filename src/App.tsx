import { useState } from 'react';

const NUMS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function App() {
	const [currentNum, setCurrentNum] = useState(NUMS[0]);

	const randomNum = () => Math.floor(Math.random() * NUMS.length) + 1;

	return (
		<main>
			<button onClick={() => setCurrentNum(randomNum())}>{currentNum}</button>
		</main>
	);
}

export default App;
