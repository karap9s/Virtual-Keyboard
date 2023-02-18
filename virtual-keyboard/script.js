import { advice, adviceText, description, descriptionText, keyboard, keyboardWrapper, rss, rssText, storage, textArea, wrapper } from "./domConsts";
import { capsEnglishArr, capsRussianArr, keyArr, lowerEnglishArr, lowerRussianArr, shiftCapsEnglishArr, shiftCapsRussianArr, upperEnglishArr, upperRussianArr } from "./keyConsts";

wrapper.classList.add('wrapper');
textArea.classList.add('text');
textArea.setAttribute('autofocus', '')
keyboard.classList.add('keyboard');
keyboardWrapper.classList.add('keyboard-wrapper');
rss.classList.add('rss');
description.classList.add('description');
advice.classList.add('advice');

advice.appendChild(adviceText);
description.appendChild(descriptionText);
rss.appendChild(rssText);
keyboard.appendChild(keyboardWrapper);
document.body.appendChild(wrapper);
wrapper.appendChild(rss);
wrapper.appendChild(textArea);
wrapper.appendChild(keyboard);
wrapper.appendChild(description);
wrapper.appendChild(advice);

function init() {
    let out = '';
    for (let i = 0; i < keyArr.length; i++) {
        if (i == 14) {
            out += '<div class="clearfix"></div>'
        } else if (i == 28) {
            out += '<div class="clearfix"></div>'
        } else if (i == 42) {
            out += '<div class="clearfix"></div>'
        } else if (i == 55) {
            out += '<div class="clearfix"></div>'
        }
        if (storage.getItem('language') === '0') {
        out += '<div class="key" data="'+keyArr[i]+'"><span class="rus hidden"><span class="caseDown">'+lowerRussianArr[i]+'</span><span class="caseUp hidden">'+upperRussianArr[i]+'</span><span class="caps hidden">'+capsRussianArr[i]+'</span><span class="shiftCaps hidden">'+shiftCapsRussianArr[i]+'</span></span><span class="eng"><span class="caseDown">'+lowerEnglishArr[i]+'</span><span class="caseUp hidden">'+upperEnglishArr[i]+'</span><span class="caps hidden">'+capsEnglishArr[i]+'</span><span class="shiftCaps hidden">'+shiftCapsEnglishArr[i]+'</span></span></div>';
        } else {
        out += '<div class="key" data="'+keyArr[i]+'"><span class="rus"><span class="caseDown">'+lowerRussianArr[i]+'</span><span class="caseUp hidden">'+upperRussianArr[i]+'</span><span class="caps hidden">'+capsRussianArr[i]+'</span><span class="shiftCaps hidden">'+shiftCapsRussianArr[i]+'</span></span><span class="eng hidden"><span class="caseDown">'+lowerEnglishArr[i]+'</span><span class="caseUp hidden">'+upperEnglishArr[i]+'</span><span class="caps hidden">'+capsEnglishArr[i]+'</span><span class="shiftCaps hidden">'+shiftCapsEnglishArr[i]+'</span></span></div>';
        }
    }
    document.querySelector('.keyboard-wrapper').innerHTML = out;
}

init();

function defaultActions(event) {
    event.preventDefault();
    return false;
  }
  
document.addEventListener('keydown', defaultActions);

let count = 0;
let languageCount = 0;

window.addEventListener('keydown', (event) => {
    let data = event.keyCode;
    let content = event.key;
    let length = 126;
    let keys = document.querySelectorAll('.key');


    if (data === 20) {
        count++;
    }
    for (let i = 0; i < length; i++) {
        if(count % 2 !== 0 && event.shiftKey === true) {
            document.querySelectorAll('.caseUp')[i].classList.add('hidden');
            document.querySelectorAll('.caps')[i].classList.add('hidden');
            document.querySelectorAll('.caseDown')[i].classList.add('hidden');
            document.querySelectorAll('.shiftCaps')[i].classList.remove('hidden');
        } else if (count % 2 !== 0) {
            document.querySelectorAll('.caseDown')[i].classList.add('hidden');
            document.querySelectorAll('.caseUp')[i].classList.add('hidden');
            document.querySelectorAll('.shiftCaps')[i].classList.add('hidden');
            document.querySelectorAll('.caps')[i].classList.remove('hidden');
        } else if (event.shiftKey === true) {
            document.querySelectorAll('.caseDown')[i].classList.add('hidden');
            document.querySelectorAll('.caps')[i].classList.add('hidden');
            document.querySelectorAll('.shiftCaps')[i].classList.add('hidden');
            document.querySelectorAll('.caseUp')[i].classList.remove('hidden');
        } else {
            document.querySelectorAll('.caseDown')[i].classList.remove('hidden');
            document.querySelectorAll('.caseUp')[i].classList.add('hidden');
            document.querySelectorAll('.caps')[i].classList.add('hidden');
            document.querySelectorAll('.shiftCaps')[i].classList.add('hidden');
        }
    }

    for (let i = 0; i < 63; i++) {
        if (content === 'Alt') {
            document.querySelectorAll('.eng')[i].classList.toggle('hidden');
            document.querySelectorAll('.rus')[i].classList.toggle('hidden');
            languageCount++;
        }
    }

    if (storage.getItem('language') === null || storage.getItem('language') === undefined) {
        storage.setItem('language', '0')
    }
    if (languageCount % 2 === 0) {
        storage.setItem('language', '1');
    } else if (languageCount % 2 !== 0) {
        storage.setItem('language', '0');
    }

    for (let i = 0; i < keyArr.length; i++) {
        if (data === keyArr[i]) {
            document
              .querySelector('.keyboard-wrapper .key[data="' + data + '"]')
              .classList.add('active');
        }
    }
    if (content === 'Alt' || content === 'Control' || content === 'CapsLock'|| content === 'Shift' || content === 'F1' || content === 'F2' || content === 'F3' || content === 'F4' || content === 'F5' || content === 'F6' || content === 'F7' || content === 'F8' || content === 'F9' || content === 'F10' || content === 'F11' || content === 'F12' || ((content === 'o' || content === 'O' || content === 'щ' || content === 'Щ') && event.altKey)) {
        textArea.value += '';
    } else if (content === 'Tab') {
            let cursor = textArea.selectionStart;

            textArea.value = textArea.value.slice(0, textArea.selectionStart) + '    ' + textArea.value.slice(textArea.selectionStart);
            textArea.selectionStart = cursor + 4;
            textArea.selectionEnd = cursor + 4;
    } else if (content === 'Backspace') {
        let cursor = textArea.selectionStart;

        if (cursor !== 0) {
            textArea.value = textArea.value.slice(0, textArea.selectionStart - 1) + textArea.value.slice(textArea.selectionStart);

            if(textArea.selectionStart === 0 && textArea.selectionEnd === 0) {
                textArea.selectionStart === 0;
                textArea.selectionEnd === 0;
            } else {
                textArea.selectionStart = cursor - 1;
                textArea.selectionEnd = cursor - 1;
            }
        }
    } else if (content === 'Delete') { 
        let cursor = textArea.selectionStart;

        textArea.value = textArea.value.slice(0, textArea.selectionStart) + textArea.value.slice(textArea.selectionStart + 1);

        textArea.selectionStart = cursor;
        textArea.selectionEnd = cursor;
    } else if (content === 'Enter') {
        let cursor = textArea.selectionStart;

        textArea.value = `${textArea.value.slice(0, textArea.selectionStart)}\n${textArea.value.slice(textArea.selectionStart)}`;
        textArea.selectionStart = textArea.value.indexOf('\n', cursor) + 1;
        textArea.selectionEnd = textArea.value.indexOf('\n', cursor) + 1;
    } else if (content === 'ArrowUp') {
        let cursor = textArea.selectionStart;

        textArea.value = textArea.value.slice(0, textArea.selectionStart) + '↑' + textArea.value.slice(textArea.selectionStart);
        textArea.selectionStart = cursor + 1;
        textArea.selectionEnd = cursor + 1;
    }  else if (content === 'ArrowLeft') {
        let cursor = textArea.selectionStart;

        textArea.value = textArea.value.slice(0, textArea.selectionStart) + '←' + textArea.value.slice(textArea.selectionStart);
        textArea.selectionStart = cursor + 1;
        textArea.selectionEnd = cursor + 1;
    }  else if (content === 'ArrowRight') {
        let cursor = textArea.selectionStart;

        textArea.value = textArea.value.slice(0, textArea.selectionStart) + '→' + textArea.value.slice(textArea.selectionStart);
        textArea.selectionStart = cursor + 1;
        textArea.selectionEnd = cursor + 1;
    }  else if (content === 'ArrowDown') {
        let cursor = textArea.selectionStart;

        textArea.value = textArea.value.slice(0, textArea.selectionStart) + '↓' + textArea.value.slice(textArea.selectionStart);
        textArea.selectionStart = cursor + 1;
        textArea.selectionEnd = cursor + 1;
    }  else {
        if (!keys[0].children[1].classList.contains('hidden')) {
            let cursor = textArea.selectionStart;

            textArea.value = textArea.value.slice(0, textArea.selectionStart) + content + textArea.value.slice(textArea.selectionStart);
            textArea.selectionStart = cursor + 1;
            textArea.selectionEnd = cursor + 1;
        }

        if (!keys[0].children[0].classList.contains('hidden')) {
            for (let key of keys) {
                if (key.children[1].children[0].textContent === content) {
                    let cursor = textArea.selectionStart;

                    textArea.value = textArea.value.slice(0, textArea.selectionStart) + key.children[0].children[0].textContent + textArea.value.slice(textArea.selectionStart);
                    textArea.selectionStart = cursor + 1;
                    textArea.selectionEnd = cursor + 1;
                }
                if (key.children[1].children[1].textContent === content) {
                    let cursor = textArea.selectionStart;

                    textArea.value = textArea.value.slice(0, textArea.selectionStart) + key.children[0].children[1].textContent + textArea.value.slice(textArea.selectionStart);
                    textArea.selectionStart = cursor + 1;
                    textArea.selectionEnd = cursor + 1;
                }
            }
        }
    }
})

window.addEventListener('keyup', (event) => {
    let data = event.keyCode;
    let content = event.key;
    let length = 126;

    for (let i = 0; i < length; i++) {
        if (content === 'Shift' && count % 2 === 0) {
            document.querySelectorAll('.caseDown')[i].classList.remove('hidden');
            document.querySelectorAll('.caseUp')[i].classList.add('hidden');
        } else if (content === 'Shift' && count % 2 !== 0) {
            document.querySelectorAll('.shiftCaps')[i].classList.add('hidden');
            document.querySelectorAll('.caps')[i].classList.remove('hidden');
        }
    }
    for (let i = 0; i < keyArr.length; i++) {
        if (data === keyArr[i]) {
            document
              .querySelector('.keyboard-wrapper .key[data="' + data + '"]')
              .classList.remove('active');
        }
    }
})

keyboard.addEventListener('mousedown', (event) => {
    let content = event.target.textContent;
    let length = 126;
    let parent = event.target.parentElement;

    if (content === 'CapsLock') {
        count++;
        parent.classList.add('active');
    }
    for (let i = 0; i < length; i++) {
        if (count % 2 !== 0 && content === 'Shift') {
            document.querySelectorAll('.caseDown')[i].classList.add('hidden');
            document.querySelectorAll('.caseUp')[i].classList.add('hidden');
            document.querySelectorAll('.caps')[i].classList.add('hidden');
            document.querySelectorAll('.shiftCaps')[i].classList.remove('hidden');
        } else if (count % 2 !== 0) {
            document.querySelectorAll('.caseUp')[i].classList.add('hidden');
            document.querySelectorAll('.caseDown')[i].classList.add('hidden');
            document.querySelectorAll('.caps')[i].classList.remove('hidden');
            document.querySelectorAll('.shiftCaps')[i].classList.add('hidden');
         } else if (content === 'Shift') {
            parent.classList.add('active');
            document.querySelectorAll('.caseDown')[i].classList.add('hidden');
            document.querySelectorAll('.caseUp')[i].classList.remove('hidden');
            document.querySelectorAll('.caps')[i].classList.add('hidden');
            document.querySelectorAll('.shiftCaps')[i].classList.add('hidden');
        } else {
            document.querySelectorAll('.caseDown')[i].classList.remove('hidden');
            document.querySelectorAll('.caseUp')[i].classList.add('hidden');
            document.querySelectorAll('.caps')[i].classList.add('hidden');
            document.querySelectorAll('.shiftCaps')[i].classList.add('hidden');
        }
    }
    for (let i = 0; i < 63; i++) {
        if (content === 'Alt') {
            document.querySelectorAll('.eng')[i].classList.toggle('hidden');
            document.querySelectorAll('.rus')[i].classList.toggle('hidden');
            languageCount++;
        }
    }
    if (event.target.className === 'caseDown' || event.target.className === 'caseUp' || event.target.className === 'caps' || event.target.className === 'shiftCaps') {
        parent.classList.add('active');
        if (content === 'Alt' || content === 'Control' || content === 'CapsLock'|| content === 'Shift') {
            textArea.value += '';
        } else if (content === 'Tab') {
            let cursor = textArea.selectionStart;

            textArea.value = textArea.value.slice(0, textArea.selectionStart) + '    ' + textArea.value.slice(textArea.selectionStart);
            textArea.selectionStart = cursor + 1;
            textArea.selectionEnd = cursor + 1;
        } else if (content === 'Backspace') {
            let cursor = textArea.selectionStart;
    
            if (cursor !== 0) {
                textArea.value = textArea.value.slice(0, textArea.selectionStart - 1) + textArea.value.slice(textArea.selectionStart);
    
                if(textArea.selectionStart === 0 && textArea.selectionEnd === 0) {
                    textArea.selectionStart === 0;
                    textArea.selectionEnd === 0;
                } else {
                    textArea.selectionStart = cursor - 1;
                    textArea.selectionEnd = cursor - 1;
                }
            }
        } else if (content === 'Delete') { 
            let cursor = textArea.selectionStart;
    
            textArea.value = textArea.value.slice(0, textArea.selectionStart) + textArea.value.slice(textArea.selectionStart + 1);
    
            textArea.selectionStart = cursor;
            textArea.selectionEnd = cursor;
        } else if (content === 'Enter') {
            let cursor = textArea.selectionStart;
    
            textArea.value = `${textArea.value.slice(0, textArea.selectionStart)}\n${textArea.value.slice(textArea.selectionStart)}`;
            textArea.selectionStart = textArea.value.indexOf('\n', cursor) + 1;
            textArea.selectionEnd = textArea.value.indexOf('\n', cursor) + 1;
        } else {
            let cursor = textArea.selectionStart;

            textArea.value = textArea.value.slice(0, textArea.selectionStart) + content + textArea.value.slice(textArea.selectionStart);
            textArea.selectionStart = cursor + 1;
            textArea.selectionEnd = cursor + 1;
        }
    }
})

keyboard.addEventListener('mouseup', (event) => {
    let content = event.target.textContent;
    let length = 126;
    let parent = event.target.parentElement;

    for (let i = 0; i < length; i++) {
        if (content === 'Shift' && count % 2 === 0) {
            parent.classList.remove('active');
            document.querySelectorAll('.caseDown')[i].classList.remove('hidden');
            document.querySelectorAll('.caseUp')[i].classList.add('hidden');
            document.querySelectorAll('.caps')[i].classList.add('hidden');
            document.querySelectorAll('.shiftCaps')[i].classList.add('hidden');
        } else if (content === 'Shift' && count % 2 !== 0) {
            document.querySelectorAll('.caseDown')[i].classList.add('hidden');
            document.querySelectorAll('.caseUp')[i].classList.add('hidden');
            document.querySelectorAll('.shiftCaps')[i].classList.add('hidden');
            document.querySelectorAll('.caps')[i].classList.remove('hidden');
        }
    }

    if (event.target.className === 'caseDown' || event.target.className === 'caseUp' || event.target.className === 'caps' || event.target.className === 'shiftCaps') {
        parent.classList.remove('active');
    }
})