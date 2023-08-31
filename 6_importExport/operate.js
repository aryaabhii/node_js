const add = (a, b) => {
    return a + b;
}


const sub = (a, b) => {
    return a - b;
}

const mult = (a, b) => {
    return a * b;
}

const name = "Abhijeet Kumar";

// if we want to use this in another file then we need to export.
// module.exports = add;


// if we want to paas multiple function then we need to paas like this.
module.exports.add = add;
module.exports.sub = sub;

// we can pass all function using single line i.e:
module.exports = { add, sub, mult, name }