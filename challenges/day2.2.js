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
        const draw = {
            A: 'X', // ROCK
            B: 'Y', // PAPER
            C: 'Z', // SCISSORS
        };
        const lose = {
            A: 'Z', // ROCK - SCISSORS
            B: 'X', // PAPER - ROCK
            C: 'Z', // SCISSORS - ROCK
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
            const [enemy, fixedResult] = row.split(' ');
            var mySelection = '';

            if (fixedResult == 'X') {
                // User needs to lose
                mySelection = lose[enemy];
            } else if (fixedResult == 'Y') {
                // User needs to play tie
                mySelection = draw[enemy];
            } else if (fixedResult == 'Z') {
                // User needs to win
                mySelection = wins[enemy];
            }

            // Add shapescore to my points
            myTotalPoints += shapeScore[mySelection];
            // When user wins
            if (wins[enemy] == mySelection) {
                myTotalPoints += 6;
            }
            // When game is tie
            if (draw[enemy] == mySelection) {
                myTotalPoints += 3;
            }

            console.log({
                enemy,
                fixedResult,
                mySelection,
                myTotalPoints,
            });
        });

        console.log(myTotalPoints);
    });
