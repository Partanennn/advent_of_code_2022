import fetch from 'node-fetch';

dotenv.config();
const day = 1;

fetch(`https://adventofcode.com/2022/day/${day}/input`, {
    headers: {
        Cookie: process.env.COOKIESESSION,
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
