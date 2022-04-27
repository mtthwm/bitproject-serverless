// start coding your function here!
const running_late = (date) => {
    const dateObject = new Date(date);
    // Get hour in 24 hour format.
    // 10:00 pm corresponds to 21.
    const hour = dateObject.getHours();

    if (hour >= 22)
    {
        return "It is late!"
    } 
    else
    {
        return "It is still early!"
    }
};

exports.running_late = running_late;