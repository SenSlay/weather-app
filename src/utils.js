// Get UV color
function getUVColor(UVIndex) {
    if (UVIndex >= 0 && UVIndex <= 2) {
        return '#9CC600';
    } else if (UVIndex >= 3 && UVIndex <= 5) {
        return '#FFBC01';
    } else if (UVIndex >= 6 && UVIndex <= 7) {
        return '#FF9000';
    } else if (UVIndex >= 8 && UVIndex <= 9) {
        return '#F55023';
    } else if (UVIndex >= 10) {
        return '#9E47CC';
    }
}

// Object that links weather conditions to their corresponding icons
const weatherIcons = {
    'snow': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 79.62 80.58"><defs><style>.cls-1{fill:#cae3f6;}.cls-2,.cls-3,.cls-4{fill:none;stroke-miterlimit:10;}.cls-2,.cls-3{stroke:#000;}.cls-2{stroke-width:1.5px;}.cls-3{stroke-width:2px;}.cls-4{stroke:#0a0b0b;stroke-width:4px;}</style></defs><title>snowAsset 176colored</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M58.62,39.79H9.71a6.89,6.89,0,0,1-5.55-3.41,9,9,0,0,1,8.42-13.85c1.47.08,1.78-.47,2-1.71A22.62,22.62,0,0,1,33,2l.11,0a22.28,22.28,0,0,1,15,3.22,15.43,15.43,0,0,1,1.31.91,23.1,23.1,0,0,1,6.07,7l.71,1.21"/><path class="cls-1" d="M35.31,27.27A9.77,9.77,0,0,1,43,19a10.75,10.75,0,0,1,1.91-.14,9.86,9.86,0,0,1,6.75,2.65A9.55,9.55,0,0,1,54.36,26"/><path class="cls-1" d="M48.52,19.47c2.83-4.43,9.34-6.06,14.54-5a11.88,11.88,0,0,1,9.41,9.23c.67,2.91.88,4,3.09,5.58,3.16,2.22,2.94,7.18.38,9.52a3.92,3.92,0,0,1-2.44,1H56.58"/><line class="cls-1" x1="62.05" y1="39.79" x2="67.11" y2="39.79"/><polyline class="cls-2" points="48.16 79.41 50.66 76.78 53.11 79.34"/><polyline class="cls-2" points="53.11 69.11 50.62 71.74 48.16 69.19"/><line class="cls-2" x1="50.62" y1="67.86" x2="50.62" y2="80.58"/><polyline class="cls-2" points="55.83 76.7 53.2 74.2 55.75 71.74"/><polyline class="cls-2" points="45.53 71.74 48.16 74.24 45.61 76.7"/><line class="cls-2" x1="44.27" y1="74.24" x2="57" y2="74.24"/><polyline class="cls-2" points="28.51 79.41 31 76.78 33.46 79.34"/><polyline class="cls-2" points="33.46 69.11 30.97 71.74 28.51 69.19"/><line class="cls-2" x1="30.97" y1="67.86" x2="30.97" y2="80.58"/><polyline class="cls-2" points="36.18 76.7 33.55 74.2 36.1 71.74"/><polyline class="cls-2" points="25.88 71.74 28.51 74.24 25.96 76.7"/><line class="cls-2" x1="24.62" y1="74.24" x2="37.35" y2="74.24"/><polyline class="cls-3" points="64.59 62.86 68.03 59.24 71.41 62.76"/><polyline class="cls-3" points="71.41 48.68 67.98 52.3 64.59 48.78"/><line class="cls-3" x1="67.98" y1="46.94" x2="67.98" y2="64.47"/><polyline class="cls-3" points="75.16 59.12 71.53 55.68 75.05 52.3"/><polyline class="cls-3" points="60.97 52.3 64.59 55.74 61.08 59.12"/><line class="cls-3" x1="59.24" y1="55.74" x2="76.77" y2="55.74"/><polyline class="cls-3" points="37.53 62.86 40.97 59.24 44.35 62.76"/><polyline class="cls-3" points="44.35 48.68 40.91 52.3 37.53 48.78"/><line class="cls-3" x1="40.91" y1="46.94" x2="40.91" y2="64.47"/><polyline class="cls-3" points="48.09 59.12 44.47 55.68 47.98 52.3"/><polyline class="cls-3" points="33.91 52.3 37.53 55.74 34.01 59.12"/><line class="cls-3" x1="32.17" y1="55.74" x2="49.7" y2="55.74"/><polyline class="cls-3" points="10.46 62.86 13.9 59.24 17.29 62.76"/><polyline class="cls-3" points="17.29 48.68 13.85 52.3 10.46 48.78"/><line class="cls-3" x1="13.85" y1="46.94" x2="13.85" y2="64.47"/><polyline class="cls-3" points="21.03 59.12 17.4 55.68 20.92 52.3"/><polyline class="cls-3" points="6.84 52.3 10.46 55.74 6.95 59.12"/><line class="cls-3" x1="5.11" y1="55.74" x2="22.64" y2="55.74"/><path class="cls-4" d="M58.22,39.72H9a7,7,0,0,1-5.59-3.38,9,9,0,0,1-.38-9,9.25,9.25,0,0,1,8.86-4.71c1.48.08,1.79-.46,2-1.69A22.6,22.6,0,0,1,32.47,2.24h.12A22.69,22.69,0,0,1,47.66,5.42q.66.41,1.32.9a23.26,23.26,0,0,1,6.11,6.91l.71,1.2"/><path class="cls-4" d="M34.77,27.31a9.73,9.73,0,0,1,7.77-8.2A10.79,10.79,0,0,1,44.46,19a10.05,10.05,0,0,1,6.79,2.62,9.68,9.68,0,0,1,2.69,4.49"/><path class="cls-4" d="M48.06,19.57c2.85-4.38,9.4-6,14.63-4.92a11.85,11.85,0,0,1,9.47,9.15c.67,2.89.88,4,3.11,5.53,3.18,2.2,3,7.12.39,9.44a4,4,0,0,1-2.47.95H70"/><line class="cls-4" x1="61.67" y1="39.72" x2="66.77" y2="39.72"/></g></g></svg>',
    'rain': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 84.06 69.39"><defs><style>.cls-1{fill:#cae3f6;}.cls-2,.cls-3{fill:none;stroke-miterlimit:10;}.cls-2{stroke:#000;stroke-linecap:round;stroke-width:3px;}.cls-3{stroke:#0a0b0b;stroke-width:4px;}</style></defs><title>rainAsset 162colored</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M61.52,42.12H9.42c-2.18,0-5.08-1.72-5.91-3.59A9.47,9.47,0,0,1,3.1,29a9.79,9.79,0,0,1,9.38-5c1.57.08,1.89-.49,2.09-1.8A23.9,23.9,0,0,1,34.26,2.44l.12,0a24,24,0,0,1,16,3.38c.47.29.94.6,1.4,1a24.37,24.37,0,0,1,6.46,7.32L59,15.34"/><path class="cls-1" d="M36.7,29a10.32,10.32,0,0,1,8.22-8.68,13.4,13.4,0,0,1,2-.15,10.68,10.68,0,0,1,7.19,2.78A10.16,10.16,0,0,1,57,27.68"/><path class="cls-1" d="M50.77,20.78c3-4.64,9.95-6.35,15.49-5.21a12.57,12.57,0,0,1,10,9.69c.7,3,.93,4.22,3.29,5.85,3.36,2.33,3.12,7.54.4,10a4.26,4.26,0,0,1-2.6,1h-18"/><line class="cls-1" x1="65.18" y1="42.11" x2="70.57" y2="42.11"/><line class="cls-2" x1="67.9" y1="62.01" x2="61.69" y2="67.89"/><line class="cls-2" x1="25.68" y1="62.01" x2="19.48" y2="67.89"/><line class="cls-2" x1="46.79" y1="62.01" x2="40.59" y2="67.89"/><line class="cls-2" x1="67.9" y1="49.22" x2="61.69" y2="55.1"/><line class="cls-2" x1="25.68" y1="49.22" x2="19.48" y2="55.1"/><line class="cls-2" x1="46.79" y1="49.22" x2="40.59" y2="55.1"/><path class="cls-3" d="M61.52,41.94H9.42c-2.18,0-5.08-1.72-5.91-3.58A9.49,9.49,0,0,1,3.1,28.8a9.79,9.79,0,0,1,9.38-5c1.57.08,1.89-.49,2.09-1.79A23.9,23.9,0,0,1,34.26,2.26l.12,0a24.08,24.08,0,0,1,16,3.38c.47.29.94.61,1.4,1a24.49,24.49,0,0,1,6.46,7.32L59,15.16"/><path class="cls-3" d="M36.7,28.79a10.31,10.31,0,0,1,8.22-8.67A12.28,12.28,0,0,1,47,20a10.64,10.64,0,0,1,7.19,2.79A10.08,10.08,0,0,1,57,27.5"/><path class="cls-3" d="M50.77,20.61c3-4.65,9.95-6.36,15.49-5.22a12.58,12.58,0,0,1,10,9.69c.7,3.06.93,4.22,3.29,5.86,3.36,2.32,3.12,7.53.4,10a4.26,4.26,0,0,1-2.6,1H74"/><line class="cls-3" x1="65.18" y1="41.93" x2="70.57" y2="41.93"/></g></g></svg>',
    'fog': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76.24 48.01"><defs><style>.cls-1{fill:#e5f1fb;}.cls-2,.cls-3{fill:none;stroke:#231f20;stroke-miterlimit:10;}.cls-2{stroke-width:4px;}.cls-3{stroke-width:5px;}</style></defs><title>11Asset 224FOG</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M74.64,24.71a10.83,10.83,0,0,0-.34-2.85,10.18,10.18,0,0,0-2-3.82,9.64,9.64,0,0,0-2.48-2.33,10.51,10.51,0,0,0-4.25-1.58c-.21,0-.46-.33-.56-.56A10.34,10.34,0,0,0,54,6.76a17.86,17.86,0,0,0-3.65,1,1.09,1.09,0,0,1-1.21-.43,12.63,12.63,0,0,0-6.85-4.9c-.37-.11-.74-.22-1.13-.3a10.7,10.7,0,0,0-3-.19c-.45,0-.87.09-1.23.15a12,12,0,0,0-1.19.24l-.13,0A21.68,21.68,0,0,0,31.3,4.48,30.34,30.34,0,0,0,27.78,8l-.11,0a11.55,11.55,0,0,0-5.32-1.38,9.74,9.74,0,0,0-4.7,1.13,11.14,11.14,0,0,0-4.87,5.24A2.19,2.19,0,0,1,11.4,14a11.23,11.23,0,0,0-2.91,1,9.68,9.68,0,0,0-3.66,3.29c-.15.22-.3.44-.43.67A12.12,12.12,0,0,0,3,22.49a8.66,8.66,0,0,0-.14,2.22Z"/><path class="cls-2" d="M2.49,34.1l3.15-4a5.14,5.14,0,0,1,8.66.94l.87,1.79a5.14,5.14,0,0,0,8.92.58L26,30.49a5.15,5.15,0,0,1,8.85.43L35.42,32a5.14,5.14,0,0,0,9.17-.15l0-.09a5.15,5.15,0,0,1,9.15-.2h0a5.14,5.14,0,0,0,9.07-.05l.12-.23a5.14,5.14,0,0,1,9.17.14l1.4,2.87"/><path class="cls-2" d="M2.49,44.38l3.15-4a5.14,5.14,0,0,1,8.66.93l.87,1.8a5.14,5.14,0,0,0,8.92.58L26,40.77a5.15,5.15,0,0,1,8.85.43l.56,1.06a5.14,5.14,0,0,0,9.17-.14l0-.1a5.15,5.15,0,0,1,9.15-.19h0a5.14,5.14,0,0,0,9.07,0l.12-.24a5.14,5.14,0,0,1,9.17.15l1.4,2.86"/><path class="cls-3" d="M73.74,24.78a11,11,0,0,0-.35-2.63,9.69,9.69,0,0,0-1.72-3.46,10.33,10.33,0,0,0-3.24-2.93,10.58,10.58,0,0,0-3.7-1.24,1,1,0,0,1-.56-.55c-2-4.68-6-7.21-11-6.7a16,16,0,0,0-3.35.89,1.39,1.39,0,0,1-1.58-.49A12.29,12.29,0,0,0,43.64,3.8,12.73,12.73,0,0,0,41.55,3c-.37-.11-.74-.21-1.12-.29a10.55,10.55,0,0,0-3-.17,12,12,0,0,0-1.22.15A11,11,0,0,0,34.94,3a22.08,22.08,0,0,0-4.32,2.16,30,30,0,0,0-3.48,3.47L27,8.53a11.58,11.58,0,0,0-5.3-1.35,9.79,9.79,0,0,0-4.65,1.15,11.08,11.08,0,0,0-5,5.62,1.12,1.12,0,0,1-.76.6A11.42,11.42,0,0,0,8,15.63a9.84,9.84,0,0,0-3.61,3.28c-.14.22-.29.44-.43.68a12.13,12.13,0,0,0-1.33,3.53,8.39,8.39,0,0,0-.15,1.61"/></g></g></svg>',
    'wind': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 94.85 66.53"><defs><style>.cls-1{fill:#cae3f6;}.cls-2,.cls-3{fill:none;stroke-miterlimit:10;}.cls-2{stroke:#000;stroke-linecap:round;stroke-width:3px;}.cls-3{stroke:#0a0b0b;stroke-width:4px;}</style></defs><title>windAsset 169colored</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M58.31,39.74H9.59a6.88,6.88,0,0,1-5.53-3.4,9,9,0,0,1,8.39-13.79c1.47.07,1.77-.47,2-1.71A22.53,22.53,0,0,1,32.82,2.08l.11,0A22.24,22.24,0,0,1,47.85,5.27c.44.27.88.58,1.31.9a23.18,23.18,0,0,1,6,7l.71,1.21"/><path class="cls-1" d="M35.09,27.27A9.73,9.73,0,0,1,42.78,19a11.72,11.72,0,0,1,1.9-.15,9.88,9.88,0,0,1,6.72,2.64A9.57,9.57,0,0,1,54.07,26"/><path class="cls-1" d="M48.25,19.49c2.82-4.4,9.31-6,14.48-4.95a11.85,11.85,0,0,1,9.38,9.2c.66,2.9.87,4,3.08,5.56,3.14,2.21,2.92,7.15.38,9.48a3.87,3.87,0,0,1-2.44.95H56.28"/><line class="cls-1" x1="61.72" y1="39.73" x2="66.77" y2="39.73"/><path class="cls-2" d="M58.7,53.08c-2.65,0-5.3,0-8,0"/><path class="cls-2" d="M50.75,47.79c1.43,0,2.87,0,4.31,0"/><path class="cls-2" d="M61,47.8q12.51,0,25,0a7.38,7.38,0,0,0,6.33-3.15,5.85,5.85,0,0,0-1.27-8,4.44,4.44,0,0,0-5.76.49,3.29,3.29,0,0,0,0,4.57,2.36,2.36,0,0,0,3.34.1"/><path class="cls-2" d="M75.85,59.15a2.48,2.48,0,0,0-3-.43,3.25,3.25,0,0,0-1.42,3.05A3.91,3.91,0,0,0,74.77,65a4.83,4.83,0,0,0,5.42-3.65,6.07,6.07,0,0,0-3-7.13,8,8,0,0,0-4.07-1.1H64.4"/><path class="cls-3" d="M58.22,39.72H9a7,7,0,0,1-5.59-3.38,9,9,0,0,1-.38-9,9.25,9.25,0,0,1,8.86-4.71c1.48.08,1.79-.46,2-1.69A22.6,22.6,0,0,1,32.47,2.24h.12A22.69,22.69,0,0,1,47.66,5.42q.66.41,1.32.9a23.26,23.26,0,0,1,6.11,6.91l.71,1.2"/><path class="cls-3" d="M34.77,27.31a9.73,9.73,0,0,1,7.77-8.2A10.79,10.79,0,0,1,44.46,19a10.05,10.05,0,0,1,6.79,2.62,9.68,9.68,0,0,1,2.69,4.49"/><path class="cls-3" d="M48.06,19.57c2.85-4.38,9.4-6,14.63-4.92a11.85,11.85,0,0,1,9.47,9.15c.67,2.89.88,4,3.11,5.53,3.18,2.2,3,7.12.39,9.44a4,4,0,0,1-2.47.95H70"/><line class="cls-3" x1="61.67" y1="39.72" x2="66.77" y2="39.72"/></g></g></svg>',
    'cloudy': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 115.07 60.7"><defs><style>.cls-1{fill:#aac7d5;}.cls-2{fill:#cae3f6;}.cls-3{fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:4px;}</style></defs><title>cloudyAsset 183colored</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M76.77,50.17a1.29,1.29,0,0,1,.77-.47,24.92,24.92,0,0,0,11.14-4.1c6.44,4.75,11.95,5.4,17.45,2.13,4.78-2.85,7.7-8.5,6.76-13.84-1.38-8-6.52-12-14.43-12.58C95.82,11.46,89.79,4.89,79.75,3.09,68,1,59.45,6.14,53.73,16.33"/><path class="cls-2" d="M63.32,30,63,30a24,24,0,0,0-47,.87q-.44,0-.87,0a14.06,14.06,0,0,0-5.53,1.6A14.44,14.44,0,0,0,7.2,34.07a14.06,14.06,0,0,0-1.17,1A10.11,10.11,0,0,0,4,37.61,13.24,13.24,0,0,0,2.84,40C.28,48,4,53.91,8.23,56.76s11.5,4,17.85-1.57a24,24,0,0,0,27,0A14.67,14.67,0,1,0,63.32,30Z"/><path class="cls-3" d="M76.77,49.53a1.32,1.32,0,0,1,.77-.46A24.92,24.92,0,0,0,88.68,45c6.44,4.75,11.95,5.4,17.45,2.13,4.78-2.85,7.7-8.5,6.76-13.85-1.38-8-6.52-12-14.43-12.57C95.82,10.83,89.79,4.26,79.75,2.46,68,.36,59.45,5.51,53.73,15.7"/><path class="cls-3" d="M63.32,29.35H63a24,24,0,0,0-47,.87l-.87,0a13.89,13.89,0,0,0-5.53,1.6A14.38,14.38,0,0,0,7.2,33.43c-.4.33-.79.67-1.17,1A10.11,10.11,0,0,0,4,37a13.24,13.24,0,0,0-1.13,2.39C.28,47.32,4,53.28,8.23,56.13s11.5,4,17.85-1.57a24,24,0,0,0,27,0A14.67,14.67,0,1,0,63.32,29.35Z"/></g></g></svg>',
    'partly-cloudy-day': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 121.88 62.82"><defs><style>.cls-1{fill:#f5b952;}.cls-2{fill:#aac7d5;}.cls-3{fill:#cae3f6;}.cls-4{fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:4px;}</style></defs><title>partly-cloudy-dayAsset 181colored</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M22.18,2.35a20.1,20.1,0,1,0,20.1,20.1A20.13,20.13,0,0,0,22.18,2.35Z"/><path class="cls-2" d="M83.58,51.66a1.27,1.27,0,0,1,.78-.46,25,25,0,0,0,11.13-4.11c6.44,4.75,12,5.41,17.45,2.13,4.78-2.85,7.71-8.49,6.77-13.84-1.39-8-6.53-12-14.43-12.58C102.64,13,96.6,6.38,86.56,4.59c-11.74-2.1-20.29,3.05-26,13.23"/><path class="cls-3" d="M70.14,31.47l-.36,0a24,24,0,0,0-47,.87c-.29,0-.58,0-.87,0A14.27,14.27,0,0,0,16.37,34,14.8,14.8,0,0,0,14,35.56a14.06,14.06,0,0,0-1.17,1,10.07,10.07,0,0,0-2.06,2.5,13.13,13.13,0,0,0-1.13,2.4c-2.57,8,1.16,13.9,5.38,16.75,4.38,3,11.5,4,17.86-1.56a24,24,0,0,0,27,0A14.67,14.67,0,1,0,70.14,31.47Z"/><path class="cls-4" d="M39.79,13.71A19.75,19.75,0,1,0,11.21,38.44"/><path class="cls-4" d="M83.58,51.66a1.27,1.27,0,0,1,.78-.46,25,25,0,0,0,11.13-4.11c6.44,4.75,12,5.41,17.45,2.13,4.78-2.85,7.71-8.49,6.77-13.84-1.39-8-6.53-12-14.43-12.58C102.64,13,96.6,6.38,86.56,4.59c-11.74-2.1-20.29,3.05-26,13.23"/><path class="cls-4" d="M70.14,31.47l-.36,0a24,24,0,0,0-47,.87c-.29,0-.58,0-.87,0A14.27,14.27,0,0,0,16.37,34,14.8,14.8,0,0,0,14,35.56a14.06,14.06,0,0,0-1.17,1,10.07,10.07,0,0,0-2.06,2.5,13.13,13.13,0,0,0-1.13,2.4c-2.57,8,1.16,13.9,5.38,16.75,4.38,3,11.5,4,17.86-1.56a24,24,0,0,0,27,0A14.67,14.67,0,1,0,70.14,31.47Z"/></g></g></svg>',
    'partly-cloudy-night': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 117.22 62.47"><defs><style>.cls-1{fill:#f5b952;}.cls-2{fill:#aac7d5;}.cls-3{fill:#cae3f6;}.cls-4{fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:4px;}</style></defs><title>partly-cloudy-night Asset 182colored</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M18.58,30a19.63,19.63,0,0,1-1.65-11.06A24.21,24.21,0,0,1,23.29,6.56a32.14,32.14,0,0,1,2.84-2.74,16.28,16.28,0,0,0-4.08-1.45A16.57,16.57,0,0,0,6.2,29.6a16.23,16.23,0,0,0,5.51,4"/><path class="cls-2" d="M78.93,51.52a1.23,1.23,0,0,1,.77-.46A25,25,0,0,0,90.83,47c6.44,4.75,12,5.41,17.45,2.13,4.78-2.85,7.71-8.49,6.77-13.84-1.39-8-6.53-12-14.43-12.58C98,12.82,91.94,6.24,81.9,4.45c-11.74-2.1-20.29,3.05-26,13.23"/><path class="cls-3" d="M65.48,31.33l-.36,0a24,24,0,0,0-47,.87c-.29,0-.58,0-.87,0a14,14,0,0,0-5.52,1.59,14.44,14.44,0,0,0-2.36,1.57,14.21,14.21,0,0,0-1.17,1A10,10,0,0,0,6.13,39,13.49,13.49,0,0,0,5,41.36c-2.57,8,1.16,13.91,5.38,16.76,4.38,3,11.5,4,17.86-1.57a24,24,0,0,0,27,0A14.67,14.67,0,1,0,65.48,31.33Z"/><path class="cls-4" d="M18.58,30a19.63,19.63,0,0,1-1.65-11.06A24.21,24.21,0,0,1,23.29,6.56a32.14,32.14,0,0,1,2.84-2.74,16.28,16.28,0,0,0-4.08-1.45A16.57,16.57,0,0,0,6.2,29.6a16.23,16.23,0,0,0,5.51,4"/><path class="cls-4" d="M78.93,51.31a1.29,1.29,0,0,1,.77-.47,24.84,24.84,0,0,0,11.13-4.1c6.44,4.75,12,5.41,17.45,2.13C113.06,46,116,40.38,115.05,35c-1.39-8-6.53-12-14.43-12.58C98,12.61,91.94,6,81.9,4.24c-11.74-2.1-20.29,3.05-26,13.23"/><path class="cls-4" d="M65.48,31.12l-.36,0a24,24,0,0,0-47,.87l-.87,0a14.06,14.06,0,0,0-5.52,1.6,14.44,14.44,0,0,0-2.36,1.57,14.06,14.06,0,0,0-1.17,1,9.89,9.89,0,0,0-2.06,2.5A13.24,13.24,0,0,0,5,41.14c-2.57,8,1.16,13.91,5.38,16.76,4.38,3,11.5,4,17.86-1.56a24,24,0,0,0,27-.05A14.67,14.67,0,1,0,65.48,31.12Z"/></g></g></svg>',
    'clear-day': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 57.47 57.47"><defs><style>.cls-1{fill:#f5b952;}.cls-2,.cls-3{fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:3px;}.cls-2{stroke-linecap:round;}</style></defs><title>clear-dayAsset 222colored</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M28.7,43.71h0a14.86,14.86,0,1,0,0-29.71h.05a14.86,14.86,0,1,0,0,29.71H28.7Z"/><line class="cls-2" x1="8.55" y1="28.73" x2="1.5" y2="28.73"/><line class="cls-2" x1="14.15" y1="42.85" x2="9.07" y2="47.75"/><line class="cls-2" x1="14.75" y1="14.28" x2="9.82" y2="9.24"/><line class="cls-2" x1="10.03" y1="36.46" x2="3.51" y2="39.14"/><line class="cls-2" x1="21.11" y1="10.12" x2="18.39" y2="3.62"/><line class="cls-2" x1="20.57" y1="47.38" x2="17.75" y2="53.85"/><line class="cls-2" x1="10.25" y1="20.74" x2="3.78" y2="17.95"/><path class="cls-3" d="M28.7,43.71h0a14.86,14.86,0,1,0,0-29.71h.05a14.86,14.86,0,1,0,0,29.71H28.7Z"/><line class="cls-2" x1="48.92" y1="28.73" x2="55.97" y2="28.73"/><line class="cls-2" x1="28.73" y1="8.55" x2="28.73" y2="1.5"/><line class="cls-2" x1="28.73" y1="48.92" x2="28.73" y2="55.97"/><line class="cls-2" x1="43.32" y1="42.85" x2="48.39" y2="47.75"/><line class="cls-2" x1="42.72" y1="14.28" x2="47.65" y2="9.24"/><line class="cls-2" x1="47.44" y1="36.46" x2="53.96" y2="39.14"/><line class="cls-2" x1="36.36" y1="10.12" x2="39.08" y2="3.62"/><line class="cls-2" x1="36.89" y1="47.38" x2="39.72" y2="53.85"/><line class="cls-2" x1="47.21" y1="20.74" x2="53.69" y2="17.95"/></g></g></svg>',
    'clear-night': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 39.11 40.96"><defs><style>.cls-1{fill:#f5b952;}.cls-2{fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:3px;}</style></defs><title>clear-nightAsset 221colored</title><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M30.56,34.05h0a13.57,13.57,0,1,1,0-27.13,13.79,13.79,0,0,1,3.71.52,19,19,0,1,0-13.79,32h0a18.94,18.94,0,0,0,13.78-5.94A14.15,14.15,0,0,1,30.56,34.05Z"/><path class="cls-2" d="M30.56,34.05h0a13.57,13.57,0,1,1,0-27.13,13.79,13.79,0,0,1,3.71.52,19,19,0,1,0-13.79,32h0a18.94,18.94,0,0,0,13.78-5.94A14.15,14.15,0,0,1,30.56,34.05Z"/></g></g></svg>'
}

// Get weather icon based on condition
function getWeatherIcon(weatherCondition) {
    return weatherIcons[weatherCondition] || "?";
}

export { getUVColor, getWeatherIcon };