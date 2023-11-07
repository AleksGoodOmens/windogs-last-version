import { appendTo, createElement } from "../builders/_builders.js";
import { progressBarChange } from "../builders/_progressBar.js";

export function loading() {
	console.time("time");
	appendTo("#body", createElement("pc"));
	appendTo(".pc", createElement("loading"));
	appendTo(".loading", createElement("loading__text"));
	let h1 = document.querySelector(".loading__text");
	h1.textContent = "Barboskiny is loading files";
	appendTo(".loading", createElement("progress-bar"));
	appendTo(".progress-bar", createElement("progress-bar__inner"));
	let elemet = document.querySelector(".progress-bar__inner");
	progressBarChange(elemet, 5, 10);
}
