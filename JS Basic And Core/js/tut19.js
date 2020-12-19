let str = "python";
let links = document.links;

let href ;
Array.from(links).forEach(element => {
         href = element.href;
         if(href.includes(str)){
             console.log(href);
        }
});
