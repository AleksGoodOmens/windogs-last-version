import { appendTo, createElement, putInnerHtml, putTextContent } from "../builders/_builders.js";
import { progressBarChange } from "../builders/_progressBar.js";
import { installations } from "./_installScreen.js";
import { cleanBody } from "./cenario/_cenario.js";

export function screenLoadingFiles() {
	appendTo("#body", createElement("pc"));
	appendTo(".pc", createElement("recovery"));
	appendTo(".recovery", createElement("recovery__top"));
	appendTo(".recovery", createElement("boot-manager", "div"));

	putTextContent(".recovery__top", "Loading Barboskiny Files");
	appendTo(".recovery", createElement("progress-bar"));
	appendTo(".progress-bar", createElement("progress-bar__inner"));

	putTextContent(".progress-bar__inner", "Please wait...");

	let progressBar = document.querySelector(".progress-bar__inner");
	progressBarChange(progressBar, 1, 2);
	setTimeout(() => {
		cleanBody(), installations();
	}, 2200);
}
