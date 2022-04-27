// start coding your function here!
const find_max = (arr) => {
    let currentMax = null;
    arr.forEach(element => {
        if (currentMax == null || currentMax < element)
        {
            currentMax = element
        }
    });

    return currentMax;
};

exports.find_max = find_max;