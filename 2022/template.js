import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();
const day = 1;

fetch(`https://adventofcode.com/2022/day/${day}/input`, {
    headers: {
        Cookie: process.env.COOKIESESSION,
    },
})
    .then((response) => response.text())
    .then((puzzleInput) => {
        puzzleInput.split('\n').map((row) => {
            console.log(row);
        });
    });
