import { skell } from '../app/skell';

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'skell',
    title: 'go skell',
    contexts: ['selection'],
  });
});

chrome.contextMenus.onClicked.addListener(async (info, tab) => {
  if (tab !== undefined) {
    switch (info.menuItemId) {
      case 'skell': {
        const selectedText = info.selectionText !== undefined ? info.selectionText : '';
        const translatedText = await skell(selectedText);
        console.log(translatedText);
        break;
      }
    }
  }
});

export {};
