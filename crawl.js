const fetch = require('node-fetch');

export async function crawlUrl(url) {
  const urlsToVisit = [url];

  let hrefValues = [];
  urlsToVisit.forEach(async url => {
    const url = urlsToVisit.pop();

    const response = await fetch.default(url);
    const pageHTML = await response.text();
    console.log(typeof pageHTML);
    let match;
    const hrefRegex = /href=["'](.*?)["']/g;

    while ((match = hrefRegex.exec(pageHTML)) !== null) {
      hrefValues.push(match[1]);
    }
  });

  return hrefValues;
}
