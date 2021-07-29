export const getCaretIndex = (el) => {
  let position = 0;
  const selection = window.getSelection()!;
  if (selection.rangeCount !== 0) {
    const range = window.getSelection()!.getRangeAt(0);
    const preCaretRange = range.cloneRange();
    preCaretRange.selectNodeContents(el);
    preCaretRange.setEnd(range.endContainer, range.endOffset);
    position = preCaretRange.toString().length;
  }
  return position;
}

export const getSelection = (el) => {
  const range = window.getSelection()!.getRangeAt(0);
  const preSelectionRange = range.cloneRange();
  preSelectionRange.selectNodeContents(el);
  preSelectionRange.setEnd(range.startContainer, range.startOffset);

  const start = preSelectionRange.toString().length;
  return { 
    start: start,
    end: start + range.toString().length
  }
}

export const isFirefox = () => navigator.userAgent.search("Firefox") > 0;

export const updateCaret = (el, caret, offset) => {
  const range = document.createRange();
  const selection = window.getSelection()!;
  range.setStart(el.childNodes[0], caret+offset);
  range.collapse(true);
  selection.removeAllRanges();
  selection.addRange(range);
  el.focus();
}

export const insertNodeAtCaret = (el) => {
  const position = getCaretIndex(el)
  let characterToEnter = '\n\n';
  let prevChar, char = '';
  if (position > 0) {
    prevChar = el.innerHTML.charAt(position - 1);
    char = el.innerHTML.charAt(position);
    const newLines = el.innerHTML.match(/\n/g);
    if(
      prevChar === char || 
      (prevChar === '\n' && char === '') || 
      (isFirefox() && newLines?.length > 0)
    ) {
      characterToEnter = '\n';
    }
  }
  const selection = window.getSelection()!;
  const node = document.createTextNode(characterToEnter);
  const range = selection.getRangeAt(0);
  range.collapse(false);
  range.insertNode(node);
  const cloneRange = range.cloneRange();
  cloneRange.selectNodeContents(node);
  cloneRange.collapse(false);
  selection.removeAllRanges();
  selection.addRange(cloneRange);
  el.innerHTML = el.innerHTML.replace(/<br>/g, '');
  updateCaret(el, position, 1);
}
