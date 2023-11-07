import {
	appendTo,
	appendToObj,
	createElement,
	putTextContent,
} from '../builders/_builders.js';
import _installWindogs from './_installWindogs.js';

export function installations() {
	appendTo('#body', createElement('pc'));
	function createInstallWindow() {
		appendTo('.installations', createElement('setup'));
		appendTo('.setup', createElement('setup__header'));
		appendTo('.setup', createElement('setup__content'));
		putTextContent('.setup__header', 'Setup Barboskiny');
		appendTo('.setup__header', createElement('setup__closeBtn', 'button'));
		putTextContent('.setup__closeBtn', 'X');
		appendTo('.setup__content', createElement('setup__logo'));
		appendTo('.setup__logo', createElement('setup__img', 'img'));
		appendTo('.setup__content', createElement('setup__title', 'h2'));
		putTextContent('.setup__title', 'Windogs');
		appendTo('.setup__content', createElement('setup__box'));
		let box = appendTo('.setup__box', createElement('setup__btn', 'button'));
		putTextContent('.setup__btn', 'Install Now');
		appendTo('.setup__box', createElement('setup__repairBtn', 'button'));
		putTextContent('.setup__repairBtn', 'Repair this computer');

		let installBtn = document.querySelector('.setup__btn');
		installBtn.addEventListener('click', () => {
			box.innerHTML = '';
			let label = createElement('setup__language-label', 'label');
			label.textContent = 'Language Setup:';
			let select = createElement('setup__language-select', 'select');
			selectOptionsLanguage.forEach((lang) => {
				let l = createElement('setup__language-option', 'option');
				l.textContent = lang;
				appendToObj(select, l);
			});
			appendToObj(label, select);
			appendToObj(box, label);
			appendTo('.setup__content', createElement('setup__footer'));
			appendTo('.setup__footer', createElement('setup__btnNext', 'button'));
			putTextContent('.setup__btnNext', 'Next');
			let btnNext = document.querySelector('.setup__btnNext');
			btnNext.addEventListener('click', () => {
				let content = document.querySelector('.setup__content');
				content.innerHTML = '';
				content.classList.add('setup__content-lightBG');
				appendTo('.setup__content', createElement('setup__read-me', 'h2'));
				putTextContent('.setup__read-me', 'Read Me!');
				appendTo('.setup__content', createElement('setup__list', 'ul'));
				let ul = document.querySelector('.setup__list');
				list.forEach((item, i) => {
					let li = createElement('setup__li', 'li');
					li.textContent = item;
					appendTo('.setup__list', li);
				});
				appendTo('.setup__content', createElement('setup__footer'));
				appendTo(
					'.setup__footer',
					createElement('setup__checkBox-label', 'label')
				);
				appendTo(
					'.setup__checkBox-label',
					createElement('setup__checkBox', 'input')
				);
				let input = document.querySelector('input');
				input.setAttribute('type', 'checkbox');
				appendTo(
					'.setup__checkBox-label',
					createElement('setup__label', 'span')
				);
				putTextContent('.setup__label', 'Lock Next');
				appendTo('.setup__footer', createElement('setup__btnNext', 'button'));
				putTextContent('.setup__btnNext', 'Next');
				appendTo('.installations', createElement('setup__progres-bar'));
				let item = createElement('setup__progres-inner');
				item.style.width = '25%';
				item.textContent = 'Step 1';
				appendTo('.setup__progres-bar', item);
				appendTo('.installations', createElement('setup__bread-dots', 'ol'));
				breadDots.forEach((dot) => {
					let item = createElement('setup__bread-dot', 'li');
					item.textContent = dot;
					appendTo('.setup__bread-dots', item);
				});
				let next = document.querySelector('.setup__btnNext');
				next.addEventListener('click', () => {
					content.innerHTML = '';
					let bar = document.querySelector('.setup__progres-inner');
					bar.style.width = '50%';
					bar.textContent = 'Step 2';
					item = createElement('setup__btn-upgrade', 'button');
					appendTo('.setup__content', item);
					item = createElement('setup__btn-custom', 'button');
					appendTo('.setup__content', item);
					let versions = content.querySelectorAll('button');
					versions.forEach((ver) => {
						ver.addEventListener('click', () => {
							content.innerHTML = '';
							bar.style.width = '75%';
							bar.textContent = 'Step 3';
							let contentBox = createElement('contentBox');
							item = createElement('storage-ssd', 'button');
							appendToObj(item, createElement('storage-ssd__icon'));
							let text = createElement('storage-ssd__text');
							text.textContent = 'storage SSD';
							appendToObj(item, text);
							appendToObj(contentBox, item);
							appendToObj(content, contentBox);
							item = createElement('storage-ssd__deleteBtn', 'button');
							item.innerHTML = `<span class="x">X</span><span>Delete</span>`;
							appendToObj(content, item);
							item = createElement('storage-ssd__newBtn', 'button');
							item.innerHTML = `<span class="circle"></span><span>New</span>`;
							appendToObj(content, item);
							appendTo('.setup__content', createElement('setup__footer'));
							appendTo(
								'.setup__footer',
								createElement('setup__btnNext', 'button')
							);
							putTextContent('.setup__btnNext', 'Next');
							let storage = content.querySelector('.setup__btnNext');
							storage.classList.add('posRight');

							storage.addEventListener('click', () => {
								bar.style.width = '100%';
								bar.textContent = 'Step 4';

								_installWindogs();
							});
						});
					});
				});
			});
		});
	}
	appendTo('.pc', createElement('installations'));
	setTimeout(createInstallWindow, 2000);
}

const list = [
	'BARBOSKINY WINDOGS',
	'Alex Gomeniuk Company',
	'Step 1: Go to desktop',
	'Step 2: Go to Settings',
	'Step 3: Open Start Menu',
	'Step 4: See Barboskiny Browser',
];

const breadDots = ['Collecting information', 'Installing Windogs'];

const selectOptionsLanguage = [
	'English(United Kingdom)',
	'English(United States)',
	'Russian(Russia)',
	'Spanish(Spain)',
	'Arabic(Egypt)',
	'Japanese(Japan)',
	'Korean(South Korea)',
	'Chinese(China)',
	'Hebrew(Israel)',
	'French(France)',
];
