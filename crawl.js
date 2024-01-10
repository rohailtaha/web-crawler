const fetch = require('node-fetch');

async function crawlUrl(url) {
  const urlsToVisit = [url];

  let hrefValues = [];
  urlsToVisit.forEach(async url => {
    const response = await fetch.default(url);
    const pageHTML = await response.text();
    let match;
    const hrefRegex = /href=["'](.*?)["']/g;

    while ((match = hrefRegex.exec(pageHTML)) !== null) {
      hrefValues.push(match[1]);
    }
  });

  return hrefValues;
}

module.exports = {
  crawlUrl,
};
