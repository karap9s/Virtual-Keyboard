let doc = document;
let wrapper = doc.createElement('div');
let textArea = doc.createElement('textarea');
let keyboard = doc.createElement('div');
let keyboardWrapper = doc.createElement('div');
let rss = doc.createElement('h1');
let rssText = doc.createTextNode('RSS Virtual Keyboard');
let description = doc.createElement('p');
let descriptionText = doc.createTextNode('This keyboard was created in the Windows OS');
let advice = doc.createElement('p');
let adviceText = doc.createTextNode('To switch language use this combination: Left Alt + O');


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
doc.body.appendChild(wrapper);
wrapper.appendChild(rss);
wrapper.appendChild(textArea);
wrapper.appendChild(keyboard);
wrapper.appendChild(description);
wrapper.appendChild(advice);

let keyArr = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8,
     9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 46,
      20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 220, 13,
       16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 16, 38,
        17, 18, 32, 18, 17, 37, 40, 39];
    
let lowerEnglishArr = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
     'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'Delete',
      'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", '\\', 'Enter',
       'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift', '↑',
        'Ctrl', 'Alt', ' ', 'AltGr', 'Ctrl', '←', '↓', '→'];

    
let upperEnglishArr = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',
    'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', 'Delete',
     'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', '|', 'Enter',
      'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', 'Shift', '↑',
       'Ctrl', 'Alt', ' ', 'AltGr', 'Ctrl', '←', '↓', '→'];


let capsEnglishArr = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', 'Delete',
     'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", '\\', 'Enter',
      'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'Shift', '↑',
       'Ctrl', 'Alt', ' ', 'AltGr', 'Ctrl', '←', '↓', '→'];

let shiftCapsEnglishArr = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',
    'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{', '}', 'Delete',
    'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ':', '"', '|', 'Enter',
    'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', '?', 'Shift', '↑',
    'Ctrl', 'Alt', ' ', 'AltGr', 'Ctrl', '←', '↓', '→'];


let lowerRussianArr = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
     'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'Delete',
      'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', '\\', 'Enter',
       'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'Shift', '↑',
        'Ctrl', 'Alt', ' ', 'AltGr', 'Ctrl', '←', '↓', '→'];

    
let upperRussianArr = ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace',
    'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', 'Delete',
     'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', '/', 'Enter',
      'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', 'Shift', '↑',
       'Ctrl', 'Alt', ' ', 'AltGr', 'Ctrl', '←', '↓', '→'];


let capsRussianArr = ['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', 'Delete',
     'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', '\\', 'Enter',
      'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', 'Shift', '↑',
       'Ctrl', 'Alt', ' ', 'AltGr', 'Ctrl', '←', '↓', '→'];

let shiftCapsRussianArr = ['ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace',
    'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'Delete',
    'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', '/', 'Enter',
    'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', ',', 'Shift', '↑',
    'Ctrl', 'Alt', ' ', 'AltGr', 'Ctrl', '←', '↓', '→'];


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
        out += '<div class="key" data="'+keyArr[i]+'"><span class="rus hidden"><span class="caseDown">'+lowerRussianArr[i]+'</span><span class="caseUp hidden">'+upperRussianArr[i]+'</span><span class="caps hidden">'+capsRussianArr[i]+'</span><span class="shiftCaps hidden">'+shiftCapsRussianArr[i]+'</span></span><span class="eng"><span class="caseDown">'+lowerEnglishArr[i]+'</span><span class="caseUp hidden">'+upperEnglishArr[i]+'</span><span class="caps hidden">'+capsEnglishArr[i]+'</span><span class="shiftCaps hidden">'+shiftCapsEnglishArr[i]+'</span></span></div>';
    }
    doc.querySelector('.keyboard-wrapper').innerHTML = out;
}

init();

function defaultActions(event) {
    event.preventDefault();
    return false;
  }
  
doc.addEventListener('keydown', defaultActions);

let count = 0;
let current = 'engCaseDown';

addEventListener('keydown', (event) => {
    let data = event.keyCode;
    let content = event.key;
    let length = 126;
    let keys = doc.querySelectorAll('.key');


    if (data === 20) {
        count++;
    }
    for (let i = 0; i < length; i++) {
        if(count % 2 !== 0 && event.shiftKey === true) {
            doc.querySelectorAll('.caseUp')[i].classList.add('hidden');
            doc.querySelectorAll('.caps')[i].classList.add('hidden');
            doc.querySelectorAll('.caseDown')[i].classList.add('hidden');
            doc.querySelectorAll('.shiftCaps')[i].classList.remove('hidden');
            current = 'engShiftCaps';
        } else if (count % 2 !== 0) {
            doc.querySelectorAll('.caseDown')[i].classList.add('hidden');
            doc.querySelectorAll('.caseUp')[i].classList.add('hidden');
            doc.querySelectorAll('.shiftCaps')[i].classList.add('hidden');
            doc.querySelectorAll('.caps')[i].classList.remove('hidden');
            current = 'engCaps';
        } else if (event.shiftKey === true) {
            doc.querySelectorAll('.caseDown')[i].classList.add('hidden');
            doc.querySelectorAll('.caps')[i].classList.add('hidden');
            doc.querySelectorAll('.shiftCaps')[i].classList.add('hidden');
            doc.querySelectorAll('.caseUp')[i].classList.remove('hidden');
            current = 'engCaseUp';
        } else {
            doc.querySelectorAll('.caseDown')[i].classList.remove('hidden');
            doc.querySelectorAll('.caseUp')[i].classList.add('hidden');
            doc.querySelectorAll('.caps')[i].classList.add('hidden');
            doc.querySelectorAll('.shiftCaps')[i].classList.add('hidden');
            current = 'engCaseDown';
        }

        if ((content === 'o' || content === 'O' || content === 'щ' || content === 'Щ') && event.altKey) {
            doc.querySelectorAll('.eng')[i].classList.toggle('hidden');
            doc.querySelectorAll('.rus')[i].classList.toggle('hidden');
        }
    }

    doc.querySelector('.keyboard-wrapper .key[data="'+ data +'"]').classList.add('active');
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

addEventListener('keyup', (event) => {
    let data = event.keyCode;
    let content = event.key;
    let length = 126;

    for (let i = 0; i < length; i++) {
        if (content === 'Shift' && count % 2 === 0) {
            doc.querySelectorAll('.caseDown')[i].classList.remove('hidden');
            doc.querySelectorAll('.caseUp')[i].classList.add('hidden');
            current = 'engCaseDown';
        } else if (content === 'Shift' && count % 2 !== 0) {
            doc.querySelectorAll('.shiftCaps')[i].classList.add('hidden');
            doc.querySelectorAll('.caps')[i].classList.remove('hidden');
        }
    }
    doc.querySelector('.keyboard-wrapper .key[data="'+ data +'"]').classList.remove('active');
})

keyboard.addEventListener('mousedown', (event) => {
    // let data = event.target.getAttribute('data');
    let content = event.target.textContent;
    let length = 126;
    let parent = event.target.parentElement;

    if (content === 'CapsLock') {
        count++;
        parent.classList.add('active');
    }
    for (let i = 0; i < length; i++) {
        if (count % 2 !== 0) {
            doc.querySelectorAll('.caseDown')[i].classList.add('hidden');
            doc.querySelectorAll('.caps')[i].classList.remove('hidden');
            current = 'engCaps';
         } else {
            doc.querySelectorAll('.caseDown')[i].classList.remove('hidden');
            doc.querySelectorAll('.caps')[i].classList.add('hidden');
            current = 'engCaseDown';
        }

        if (content === 'Shift') {
            parent.classList.add('active');
            doc.querySelectorAll('.caseDown')[i].classList.add('hidden');
            doc.querySelectorAll('.caseUp')[i].classList.remove('hidden');
            current = 'engCaseUp';
        }
    }
    if (event.target.className === 'caseDown' || event.target.className === 'caseUp' || event.target.className === 'caps' || event.target.className === 'shiftCaps') {
        parent.classList.add('active');
        if (content === 'Alt' || content === 'Control' || content === 'CapsLock'|| content === 'Shift') {
            textArea.value += '';
        } else if (content === 'Tab') {
            textArea.value += '    ';
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
            textArea.value += content;
        }
    }
})

keyboard.addEventListener('mouseup', (event) => {
    let content = event.target.textContent;
    let length = 126;
    let parent = event.target.parentElement;

    for (let i = 0; i < length; i++) {
        if (content === 'Shift') {
            parent.classList.remove('active');
            doc.querySelectorAll('.caseDown')[i].classList.remove('hidden');
            doc.querySelectorAll('.caseUp')[i].classList.add('hidden');
            current = 'engCaseDown';
        }
    }

    if (event.target.className === 'caseDown' || event.target.className === 'caseUp' || event.target.className === 'caps' || event.target.className === 'shiftCaps') {
        parent.classList.remove('active');
    }
})