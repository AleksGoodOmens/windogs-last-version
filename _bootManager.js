import { appendTo, createElement, putInnerHtml, putTextContent } from "../builders/_builders.js";
import { cleanBody } from "./cenario/_cenario.js";
import { screenLoadingFiles } from "./_loadingFiles.js";


export function barboskinyBootManager() {
    appendTo('#body', createElement('pc'));
    appendTo('.pc', createElement('recovery'));
    appendTo('.recovery', createElement('recovery__top'));
    appendTo('.recovery', createElement('boot-manager', 'div'));
    
    putInnerHtml(document.querySelector('.boot-manager'), barboskinyBootManagerHtml);
    
    appendTo('.recovery', createElement('recovery__bottom'));
    putTextContent('.recovery__top', 'Barboskiny Boot Manager')
    putTextContent('.recovery__bottom', 'Enter-Continue');

    document.addEventListener('keypress', (e) => {
        if (e.key === "Enter") {
            cleanBody();
            screenLoadingFiles();
            document.removeEventListener('keypress', e.Key);
        }
    });
}

let barboskinyBootManagerHtml = `
    <p>Barboskiny failed to start. A recent hardware or software change might be the cause To fix the problem</p>
    <ol>
        <li>Insert your Barboskiny installation disc and restart your computer.</li>
        <li>Choose your language settings, and then click "Next"</li>
        <li>Click "Repair this Computer."</li>
    </ol>
    <p>If you do not have disc, contact you system administrator or computer manufact for assistance.</p>
    <p>Status 0xc0000225</p>
    <p>Info: Barboskiny failed to load because the NLS data is missing or corrupt</p>
`
