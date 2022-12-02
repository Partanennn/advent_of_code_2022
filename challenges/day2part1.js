import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();
const day = 2;

fetch(`https://adventofcode.com/2022/day/${day}/input`, {
    headers: {
        Cookie: process.env.COOKIESESSION,
    },
})
    .then((response) => response.text())
    .then((puzzleInput) => {
        const wins = {
            A: 'Y', // ROCK - PAPER
            B: 'Z', // PAPER - SCISSORS
            C: 'X', // SCISSORS - ROCK
        };
        const tie = {
            A: 'X', // ROCK
            B: 'Y', // PAPER
            C: 'Z', // SCISSORS
        };
        const shapeScore = {
            X: 1,
            Y: 2,
            Z: 3,
        };
        var myTotalPoints = 0;

        const puzzleInputArray = puzzleInput.split('\n');
        // Last is empty string so remove it
        puzzleInputArray.pop();

        puzzleInputArray.forEach((row) => {
            const [enemy, me] = row.split(' ');
            var myPoints = 0;

            // When user wins
            if (wins[enemy] == me) {
                myPoints += 6;
            }
            // When game is tie
            if (tie[enemy] == me) {
                myPoints += 3;
            }

            // Add shapescore to my points
            myPoints += shapeScore[me];

            myTotalPoints += myPoints;
        });

        console.log(myTotalPoints);
    });
