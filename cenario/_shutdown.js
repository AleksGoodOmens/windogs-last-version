// import winlogo from '../../../img/theme/window/sd/icon/winlogo.png';
// import computeroff from '../../../img/theme/window/sd/icon/computeroff.png';

// import { loading } from '../_loadingScreen.js';

import step1 from '../../script.js';

function shutdown(parrent) {
	let trigger = document.querySelector('.startmenu__footer');

	trigger.children[0].addEventListener('click', () => {
		const shutdownWindow = document.createElement('div');
		shutdownWindow.classList = 'shutdown';
		shutdownWindow.innerHTML = `
				<header class="shutdown__header">Shutdown Windogs</header>
				<div class="shutdown__logo"><img src="../../../img/theme/window/sd/icon/winlogo.png" alt="logo" /></div>
				<footer class="shutdown__footer">
					<h2 class="shutdown__footer-title">What did you want shutdown</h2>
					<label class="shutdown__label">
					<img class="shutdown__label-img" src="../../../img/theme/window/sd/icon/computeroff.png" alt="computeroff" /> 
					<select class="shutdown__select" name="shutdown" id="shutdown">
						<option class="shutdown__option" value="shutdown">shutdown</option>
						<option class="shutdown__option" value="restart">restart</option>
						<option class="shutdown__option" value="log off">log off</option>
					</select>
					</label>
					<div class="shutdown__buttons">
					<button class="shutdown__buttons-btn ">cancel</button><button class="shutdown__buttons-btn ">ok</button></div>
				</footer>
		`;

		const worktable = document.querySelector(parrent),
			overlay = document.createElement('div');
		overlay.className = 'overlay';

		worktable.append(shutdownWindow, overlay);

		const btns = document.querySelectorAll('.shutdown__buttons-btn');
		btns.forEach((btn) => {
			btn.addEventListener('click', () => {
				if (btn.textContent === 'cancel') {
					shutdownWindow.remove();
					overlay.remove();
				} else {
					let res = document.getElementById('shutdown');
					switch (res.value) {
						case 'shutdown':
							step1();
							break;
						case 'restart':
							console.log('restart');

							break;
						case 'log off':
							console.log('log off');

							break;
						default:
							break;
					}
				}
			});
		});

		return shutdownWindow;
	});
}
export default shutdown;
