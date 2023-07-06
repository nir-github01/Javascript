function Debug(name) {
    name = "Test";
    let phrase = `Hello, ${name}`;

    debugger
    for(let i=0; i< 5; i++){
        console.log("Value"+" "+i);
    }
    debugger
    say(phrase);
    debugger
    let x = 5, n=5;
    pow(x, n);
 }

 function say(phrase) 
 {

    alert(`**${phrase} **`);
 }

 function pow(x, n){
    
    let result = 1;
    x=prompt( "Enter value of x", parseInt(x));
    n=prompt( "Enter value of n", parseInt(n));
    debugger
    if(n < 0){
        return ("Power of negative number is not supported");
    }
    for(let i=0; i < n ; i++){
        result *=x;
    }
    return result;
 }
