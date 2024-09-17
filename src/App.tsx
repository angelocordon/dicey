import { useState } from 'react';
import './app.css';

const NUMS = [1, 2, 3, 4, 5, 6];

const SIDES: { [key: number]: string } = {
	1: '⚀',
	2: '⚁',
	3: '⚂',
	4: '⚃',
	5: '⚄',
	6: '⚅',
};

function App() {
	const [currentNum, setCurrentNum] = useState(NUMS[0]);

	const randomNum = () => Math.floor(Math.random() * NUMS.length) + 1;

	const renderCurrentSide = (num: number) => SIDES[num];

	return (
		<main>
			<button className="dice" onClick={() => setCurrentNum(randomNum())}>
				{renderCurrentSide(currentNum)}
			</button>
		</main>
	);
}

export default App;
