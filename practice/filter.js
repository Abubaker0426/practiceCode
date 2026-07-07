const names =  ["abu","baba","khan","khan","kk"]

let nameLength = names.filter((name) => {
    if (name.length >= 3) {
        console.log("Name is big: " + name);
        return true;
    } else {
        console.log("Name is small: " + name);
        return false;
    }
});

console.log(nameLength);