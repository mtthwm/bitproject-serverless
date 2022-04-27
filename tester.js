// This is a function for extremely basic, non-automated testing for my functions.
const main = () => {
    console.log("=== TESTING late.js... ===")
    const running_late = require('./late.js').running_late;
    const dates_to_try = [
        "December 17, 1995 03:24:00",
        "December 17, 1995 21:24:00",
        "December 17, 1995 23:24:00",
        "December 17, 1995 07:00:00",
    ];
    
    for (let i = 0; i < dates_to_try.length; i++)
    {
        const dateString = dates_to_try[i];
        console.log(dateString, "->", running_late(dateString));
    }

    console.log("=== TESTING max_nums.js... ===")
    const find_max = require('./max_nums.js').find_max;
    const testArray = [14, 64, 246, 56, 246.7];

    console.log(testArray, find_max(testArray));
};

main();