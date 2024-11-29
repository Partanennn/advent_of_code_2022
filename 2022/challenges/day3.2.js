import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();
const day = 3;

// Global variables
const itemTypePriorities = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
    A: 27,
    B: 28,
    C: 29,
    D: 30,
    E: 31,
    F: 32,
    G: 33,
    H: 34,
    I: 35,
    J: 36,
    K: 37,
    L: 38,
    M: 39,
    N: 40,
    O: 41,
    P: 42,
    Q: 43,
    R: 44,
    S: 45,
    T: 46,
    U: 47,
    V: 48,
    W: 49,
    X: 50,
    Y: 51,
    Z: 52,
};

fetch(`https://adventofcode.com/2022/day/${day}/input`, {
    headers: {
        Cookie: process.env.COOKIESESSION,
    },
})
    .then((response) => response.text())
    .then((puzzleInput) => {
        const badges = [];
        let badgesSum = 0;
        let firstElf = '';
        let secondElf = '';
        let thirdElf = '';
        // 'vJrwpWtwJgWrhcsFMMfFFhFp\njqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL\nPmmdzqPrVvPwwTWBwg\nwMqvLMZHhHMvwLHjbvcjnnSBnvTQFn\nttgJtRGJQctTZtZT\nCrZsJsPPZsGzwwsLwLmpwMDw'
        puzzleInput.split('\n').map((row) => {
            // Set elves their rucksacks
            if (firstElf === '') {
                firstElf = row;
            } else if (secondElf === '') {
                secondElf = row;
            } else if (thirdElf === '') {
                thirdElf = row;
            }
            // If every elf is set, then check which type is badge
            if (firstElf !== '' && secondElf !== '' && thirdElf !== '') {
                const firstElfItemTypes = new Set();

                for (let i = 0; i < firstElf.length - 1; i++) {
                    firstElfItemTypes.add(firstElf[i]);
                }

                firstElfItemTypes.forEach((itemType) => {
                    if (
                        secondElf.includes(itemType) &&
                        thirdElf.includes(itemType)
                    ) {
                        badges.push(itemType);
                    }
                });

                // Set elves empty again
                firstElf = '';
                secondElf = '';
                thirdElf = '';
            }
            console.log('row: ', row);
        });

        // Calculate the sum
        badges.forEach((itemType) => {
            badgesSum += parseInt(itemTypePriorities[itemType]);
        });

        // console.log(badgesSum, badges);
    });

const addFirstCompartmentItemTypes = (firstCompartment, itemSet) => {};
