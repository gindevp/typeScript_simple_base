let money = 10000;
const buyACar = (car) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (money >= 10000) {
                resolve("can buy " + car);
            }
            else {
                reject("do not money");
            }
        }, 100);
    });git
};
money = 1001;
const promise = buyACar("Vinfat")
    .then(value => { console.log(value); }, error => { console.log(error); });
//# sourceMappingURL=promise.js.map
