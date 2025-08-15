// Speech synthesis utilities
export let voices = [];

export function populateVoiceList() {
    voices = speechSynthesis.getVoices();
}

if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
}

export function speakWord(word, lang) {
    if (typeof speechSynthesis === 'undefined') return;
    if (speechSynthesis.speaking) {
        speechSynthesis.cancel();
    }
    const utterance = new SpeechSynthesisUtterance(word);
    let langCode = '';
    if (lang === 'sanskrit') {
        langCode = 'sa-IN';
    } else if (lang === 'telugu') {
        langCode = 'te-IN';
    }
    utterance.voice = voices.find(voice => voice.lang === langCode);
    if (!utterance.voice) {
        utterance.voice = voices.find(voice => voice.lang && voice.lang.startsWith(langCode.substring(0,2)));
    }
    if (utterance.voice) {
        speechSynthesis.speak(utterance);
    } else {
        console.warn(`No voice found for language: ${langCode}`);
    }
}
