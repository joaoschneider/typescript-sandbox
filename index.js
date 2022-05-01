var greet = function (name, date) {
    console.log("Hello, ".concat(name, "! It's ").concat(date.toDateString(), "."));
};
greet("Teste", new Date());
