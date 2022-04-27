// This is a function for extremely basic, non-automated testing for my functions.
const main = () => {
    console.log("=== TESTING late.js... ===")
    const running_late = require('./late.js').running_late;
    const dates_to_try = [
        "December 17, 1995 03:24:00",
        "December 17, 1995 21:24:00",
        "December 17, 1995 23:24:00",
        "December 17, 1995 07:00:00"
    ];
    
    for (let i = 0; i < dates_to_try.length; i++)
    {
        const dateString = dates_to_try[i];
    }
};

main();