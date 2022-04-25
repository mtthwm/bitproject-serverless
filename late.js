// start coding your function here!
const running_late = (date) => {
    // Get hour in 24 hour format.
    // 10:00 pm corresponds to 21.
    const hour = date.getHours();

    if (hour >= 21)
    {
        return "It is late!"
    } 
    else
    {
        return "It is still early!"
    }
};

exports.running_late = running_late;