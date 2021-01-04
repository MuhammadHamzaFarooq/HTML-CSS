console.log("Start Asyncronous Programming");

setTimeout(() => {
    for (let index = 0; index < 445; index++) {
        const element = index;
        console.log("This is index number " + index);
    }

}, 4000);

console.log("Done printing")