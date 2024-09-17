import { useEffect, useRef, useState } from 'react';
import './app.css';

const SIDES: { [key: number]: string } = {
	1: '⚀',
	2: '⚁',
	3: '⚂',
	4: '⚃',
	5: '⚄',
	6: '⚅',
};

const randomNum = () => Math.floor(Math.random() * 5) + 1;

function App() {
	const [currentNum, setCurrentNum] = useState(randomNum());
	const intervalRef = useRef<number>();

	const rollDice = () => {
		setTimeout(() => {
			intervalRef.current = setInterval(() => {
				setCurrentNum(randomNum());
			}, 150);

			setTimeout(() => {
				clearInterval(intervalRef.current);
			}, 2000);
		}, 0);
	};

	const renderCurrentSide = (num: number) => {
		return SIDES[num];
	};

	useEffect(() => {
		return () => {
			clearInterval(intervalRef.current);
		};
	}, []);

	return (
		<main>
			<button className="dice" onClick={rollDice}>
				{renderCurrentSide(currentNum)}
			</button>
		</main>
	);
}

export default App;
