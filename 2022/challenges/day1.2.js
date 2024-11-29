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
    .then((calories) => {
        var maxTotal = 0;
        var secondMaxTotal = 0;
        var thirdMaxTotal = 0;
        var currentElfTotal = 0;

        calories.split('\n').map((calorie) => {
            // If calorie is empty, then elf changes
            if (calorie == '') {
                // If current elf's total is more than max, then set current elf calories as max total
                if (currentElfTotal > maxTotal) {
                    // If max total is more than second max total,
                    // then set second max total as old max total
                    if (maxTotal > secondMaxTotal) {
                        // If second max total is more than third,
                        // then set third as second
                        if (secondMaxTotal > thirdMaxTotal) {
                            // Old third total disappears first
                            thirdMaxTotal = secondMaxTotal;
                        }
                        secondMaxTotal = maxTotal;
                    }
                    maxTotal = currentElfTotal;
                } else if (currentElfTotal > secondMaxTotal) {
                    if (secondMaxTotal > thirdMaxTotal) {
                        thirdMaxTotal = secondMaxTotal;
                    }
                    secondMaxTotal = currentElfTotal;
                } else if (currentElfTotal > thirdMaxTotal) {
                    thirdMaxTotal = currentElfTotal;
                }
                // Reset current elf total when elf is changed
                currentElfTotal = 0;
            } else {
                // Add calorie value to current elf's total
                currentElfTotal += parseInt(calorie);
            }
        });
        // Print total of first 3 max elf totals
        console.log(maxTotal + secondMaxTotal + thirdMaxTotal);
    });
