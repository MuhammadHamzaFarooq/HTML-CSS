console.log("learn promises");

// promise: website desgin own company
// - resolve 
// - reject 
// - pending

function func1() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const error = true;
            if (!error) {
                console.log("Function: Your promise has been resolved");
                resolve();
            }
            else {
                console.log("Your promise has not been resolved");
                reject("Sorry not fullfiled");
            }
        }, 1000);
    });
}

func1().then(function () {
    console.log("Hamza: Thanks for resolving")
}).catch(function (error) {
    console.log("Hamza: Very Bad bro "+ error)
})