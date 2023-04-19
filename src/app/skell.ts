import browser from 'webextension-polyfill';

export const skell = async (query: string) => {
  const url = 'https://skell.sketchengine.eu/#result?lang=en&query=' + query + '&f=wordsketch';
  await browser.tabs.create({ url });
  return;
};
