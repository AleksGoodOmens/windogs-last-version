import { progressBarChange } from '../builders/_progressBar.js';
import { recovery } from './_recovery.js';
import { cleanBody } from './cenario/_cenario.js';

export default function _installWindogs() {
	console.log('installations');
	const content = document.querySelector('.setup__content');
	content.innerHTML = '';
	const installMenu = [
		'Copying files',
		'Install Windogs',
		'Install Programs',
		'Install Duolingo',
		'Reboot the system',
	];

	content.innerHTML = installMenu
		.map((item) => {
			return `<div class="text-black"><span class="done"></span>${item}<span class="percentage"></span></div>`;
		})
		.join('');

	// Get all the elements with the percentage and done classes
	const done = content.querySelectorAll('.done');
	const percentage = content.querySelectorAll('.percentage');

	async function startIntervals() {
		for (let i = 0; i < done.length; i++) {
			await startInterval(percentage[i], done[i]);
		}
		await pcRestart();
	}

	async function startInterval(boxPercentage, boxDone) {
		return new Promise((resolve) => {
			let i = 0;
			const interval = setInterval(() => {
				countPercentage(boxPercentage, boxDone, i);
				i++;
				if (i > 100) {
					clearInterval(interval);
					resolve();
				}
			}, 50);
		});
	}

	function countPercentage(boxPercentage, boxDone, i) {
		boxPercentage.textContent = `${i}%`;
		if (i === 100) {
			boxDone.innerHTML = '&#10004;';
		}
	}
	async function pcRestart() {
		content.innerHTML = `
		<div class="text-black">Barboskiny needs restart on PC</div>
		<div class="restartBar"><div class="restartBar__inner"></div></div>
		<div class="restartBar__timer"></div>
		<button class="restartBar__button">Restart</button>
		`;
		const restartBarInner = content.querySelector('.restartBar__inner');
		progressBarChange(restartBarInner, 1, 10);
		for (let t = 10; t > 0; t--) {
			let timeOut = t * 1000;
			setTimeout(() => {
				content.querySelector('.restartBar__timer').innerHTML = `${10 - t} sec`;
			}, timeOut);
		}
		const restartBtn = content.querySelector('.restartBar__button');

		restartBtn.addEventListener('click', () => {
			clearTimeout(restartTimer);
			cleanBody();
			recovery();
		});

		const restartTimer = setTimeout(() => {
			cleanBody();
			recovery();
		}, 11000);
	}
	startIntervals();
}
