function removeNullAndUndefined(obj) {
    for (let key in obj) {
        if (obj[key] === null || obj[key] === undefined) {
            delete obj[key];
        }
    }
    return obj;
}

// نمونه استفاده:
let data = {
    name: "Mohadeseh",
    age: 22,
    city: null,
    country: undefined,
    job: "Developer"
};

let cleanedData = removeNullAndUndefined(data);
console.log(cleanedData);
