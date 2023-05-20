import React, { useState } from 'react';

const MyCalculator = () => {
	const arrNumbers = [
		{ number: '1', onClick: () => addNumber('1') },
		{ number: '2', onClick: () => addNumber('2') },
		{ number: '3', onClick: () => addNumber('3') },
		{ number: '4', onClick: () => addNumber('4') },
		{ number: '5', onClick: () => addNumber('5') },
		{ number: '6', onClick: () => addNumber('6') },
		{ number: '7', onClick: () => addNumber('7') },
		{ number: '8', onClick: () => addNumber('8') },
		{ number: '9', onClick: () => addNumber('9') },
		{ number: '0', onClick: () => addNumber('0') },
	];
	const arrOperators = [
		{ oper: 'C', onClick: () => clear() },
		{ oper: '+', onClick: () => updateCalc('+') },
		{ oper: '-', onClick: () => updateCalc('-') },
		{ oper: '=', onClick: () => calculate() },
	];

	const operators = ['+', '-'];
	const [calc, setCalc] = useState('');
	const [result, setResult] = useState(false);

	const addNumber = (item) => {
		if (result) {
			setCalc(item.toString());
		} else if (calc === '0') {
			setCalc(item.toString());
		} else {
			setCalc(calc + item.toString());
		}
		setResult(false);
	};


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
			try {
				const result = new Function(`return ${calc}`)();
				setCalc(result.toString());
				setResult(true);
			} catch (error) {
				console.error('Error:', error);
			}
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
					{arrOperators.map((o) => (
						<button onClick={o.onClick} key={o.oper}>
							{o.oper}
						</button>
					))}
				</div>
				<div className="button-container">
					{arrNumbers.map((n) => (
						<button onClick={n.onClick} key={n.number}>
							{n.number}
						</button>
					))}
				</div>
			</div>
		</>
	);
};

export default MyCalculator;
