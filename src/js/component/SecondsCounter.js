import React from "react";
import PropTypes from "prop-types";

export function SecondsCounter(props) {
	let arrSecondsToShow = [0, 0, 0, 0, 0, 0];

	splitSeconds(props.seconds);

	return (
		<div className="wrapper">
			<div className="container">
				<div className="row justify-content-center display-4 m-1 font-weight-bold bg-dark rounded">
					<div className="icon text-white bg-secondary m-1 p-2 rounded">
						<i className="far fa-clock" />
					</div>
					<div className="hour-ten text-white bg-secondary m-1 p-2 rounded">
						{arrSecondsToShow[0]}
					</div>
					<div className="hour-unit text-white bg-secondary m-1 p-2 rounded">
						{arrSecondsToShow[1]}
					</div>
					<div className="minute-ten text-white bg-secondary m-1 p-2 rounded">
						{arrSecondsToShow[2]}
					</div>
					<div className="minute-unit text-white bg-secondary m-1 p-2 rounded">
						{arrSecondsToShow[3]}
					</div>
					<div className="second-ten text-white bg-secondary m-1 p-2 rounded">
						{arrSecondsToShow[4]}
					</div>
					<div className="first-digit text-white bg-secondary m-1 p-2 rounded">
						{arrSecondsToShow[5]}
					</div>
				</div>
			</div>
		</div>
	);

	SecondsCounter.PropTypes = {
		seconds: PropTypes.number
	};

	function splitSeconds(secondsNumber) {
		let number = secondsNumber;
		let stringNumber = number.toString();

		for (var i = 5, len = stringNumber.length - 1; len >= 0; i--, len--) {
			arrSecondsToShow[i] = stringNumber.charAt(len);
		}
	}
}
