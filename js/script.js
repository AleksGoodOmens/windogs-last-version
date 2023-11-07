'use strict';
import { cleanBody } from './screens/cenario/_cenario.js';
import { installations } from './screens/_installScreen.js';
import { loading } from './screens/_loadingScreen.js';
import { recovery } from './screens/_recovery.js';
import _installWindogs from './screens/_installWindogs.js';
import { normalMode } from './screens/_normalScreen.js';

document.addEventListener('DOMContentLoaded', () => {
	// step1();
	// installations();
	normalMode();
});

function step1() {
	loading();
	setTimeout(() => {
		cleanBody(), recovery();
	}, 2200);
}
export default step1;
