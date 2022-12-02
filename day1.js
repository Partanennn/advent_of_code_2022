import fetch from 'node-fetch';

const day = 1;
fetch(`https://adventofcode.com/2022/day/${day}/input`, {
  headers: {
    Cookie:
      'session=53616c7465645f5f929a64bf72ef685ae1f817cb2d1252940b1960296bdff9eb63e482bfb2e8577878f3460772ff0f69049d7b19b237316fb1230d2884257071',
  },
})
  .then((response) => response.text())
  .then((text) => {
    var maxTotal = 0;
    var tempTotal = 0;
    text.split('\n').map((value) => {
      if (value == '') {
        if (tempTotal > maxTotal) {
          maxTotal = tempTotal;
        }
        tempTotal = 0;
      } else {
        tempTotal += parseInt(value);
      }
    });

    console.log(maxTotal);
  });
