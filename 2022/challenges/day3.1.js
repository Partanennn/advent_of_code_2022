import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();
const day = 3;

// Global variables
const sharedItemTypesTotal = [];
let prioritiesSum = 0;
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
        // 'vJrwpWtwJgWrhcsFMMfFFhFp\njqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL\nPmmdzqPrVvPwwTWBwg\nwMqvLMZHhHMvwLHjbvcjnnSBnvTQFn\nttgJtRGJQctTZtZT\nCrZsJsPPZsGzwwsLwLmpwMDw'
        puzzleInput.split('\n').map((row) => {
            const itemSet = new Set();
            const itemTypesPerRucksack = new Set();
            const firstCompartment = row.substring(0, row.length / 2);
            const secondCompartment = row.substring(row.length / 2, row.length);

            addFirstCompartmentItemTypes(firstCompartment, itemSet);
            addUniqueDuplicateItmeTypesFromSecond(
                secondCompartment,
                itemSet,
                itemTypesPerRucksack
            );
            addSharedItemTypes(itemTypesPerRucksack);
        });

        sharedItemTypesTotal.forEach((itemType) => {
            prioritiesSum += parseInt(itemTypePriorities[itemType]);
        });

        console.log(prioritiesSum);
    });

const addFirstCompartmentItemTypes = (firstCompartment, itemSet) => {
    for (let i = 0; i < firstCompartment.length; i++) {
        itemSet.add(firstCompartment[i]);
    }
};

const addUniqueDuplicateItmeTypesFromSecond = (
    secondCompartment,
    itemSet,
    itemTypesPerRucksack
) => {
    for (let i = 0; i < secondCompartment.length; i++) {
        if (itemSet.has(secondCompartment[i])) {
            itemTypesPerRucksack.add(secondCompartment[i]);
        }
    }
};

const addSharedItemTypes = (itemTypesPerRucksack) => {
    itemTypesPerRucksack.forEach((itemType) => {
        sharedItemTypesTotal.push(itemType);
    });
};
