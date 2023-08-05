const fibonacci = function(position) {
    let pos = parseInt(position);

    if (pos < 1) return "OOPS";
    else if (pos == 1 || pos == 2) return 1;
    else return fibonacci(pos - 1) + fibonacci(pos- 2);
};

// Do not edit below this line
module.exports = fibonacci;
