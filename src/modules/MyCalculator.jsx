import React, { useState } from 'react';

const MyCalculator = () => {
	const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
	const operators = ['+', '-'];
	const [calc, setCalc] = useState('');
	const [result, setResult] = useState(false);

	const updateCalc = (value) => {
		if (
			(operators.includes(value) && calc === '') ||
			(operators.includes(value) && operators.includes(calc.slice(-1)))
		) {
			return;
		}
		setCalc(calc + value);
		setResult('');
 		setResult(false);
	};
	const calculate = () => {
		if (calc && !operators.includes(calc.slice(-1))) {
			const result = eval(calc).toString();
			setCalc(result);
			setResult(result);
			setResult(true);
		}
	};
	const clear = () => {
		setCalc('');
		setResult(false);
	};
	return (
		<>
			<div className="calculator">
				<div className={`display${result ? ' result' : ''}`}>{calc || '0'}</div>
				<div className="operators">
					<button onClick={() => clear()}>C</button>
					<button onClick={() => updateCalc('+')}>+</button>
					<button onClick={() => updateCalc('-')}>-</button>
					<button onClick={calculate}>=</button>
				</div>
				<div className="button-container">
					{number.map((n) => (
						<button onClick={() => updateCalc(n.toString())} key={n}>
							{n}
						</button>
					))}
				</div>
			</div>
		</>
	);
};

export default MyCalculator;
