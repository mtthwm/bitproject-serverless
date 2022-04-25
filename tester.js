const main = () => {
    console.log("=== TESTING late.js... ===")
    const running_late = require('./late.js').running_late;
    const dates_to_try = [
        new Date(2022, 3, 25, 17, 49),
        new Date(2022, 3, 25, 23, 42),
        new Date(2022, 3, 25, 21, 26)
    ];
    
    for (let i = 0; i < dates_to_try.length; i++)
    {
        const date = dates_to_try[i];
        console.log(date.toLocaleString(), running_late(date));
    }
};

main();