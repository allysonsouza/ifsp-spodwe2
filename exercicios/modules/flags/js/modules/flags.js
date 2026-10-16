const name = "Flags";
const version = "0.0.1";
const license = "Public Domain";

export function drawFlag(country_code) {
	const API_URL = 'https://flagsapi.com/';
	const SUFFIX = '/flat/64.png';

	let main = document.querySelector('.asia');
	let flag = document.createElement('img');

	flag.setAttribute('src', API_URL + country_code + SUFFIX);
	main.appendChild(flag);
}