function example(){
    document.write("Welcome to my first function");

}//end
function whileloop(){
    let limit =prompt("How many times do you want?");
    let count =1;
    while (count < parseInt(limit)){
     //   document.write("Looping"+count+ "<br/>");
        // document.write("<button type='submit'>"+count+" </button>");
        let radius = prompt("Enter the radius");
        let area = 3.14 * parseFloat(radius) *parseFloat(radius);
        document.write("The area is "+area);

        if (area > 10){
            break;
        }
        else{
            continue;
        }
        count ++;
    }//end loop

}//end

function forloop(){
    let limit = prompt("How many times");
    for(let count = 0; count < parseInt(limit); count++){
        document.write("Looping" +count+"<br/>");
        let usd = prompt ("Enter Money in USD");
        let kes = parseInt(usd) * 110.36;
        document.write("Equal to "+kes+"<br/>");
    }

}//end

// for in....looop through JS objects
// for of ...loop through an array

function forOf (){
    let fruits = ["Apple","Orange","Mango","Passion"];
    let marks = ["20,23,45,36,37,86,73,00,22,"];
    document.write(fruits);
    document.write("<br/>");
    document.write(fruits[3]);
    document.write("<br/>");
    document.write(marks[3]);
    document.write("<br/>");
    document.write(fruits.sort()); //sorts alphabetically a-z
    document.write("<br/>");
    document.write(fruits.reverse()); //sorts alphabetically z -a
    document.write("<br/> <br/> <br/>");

    //print arrays using for loops
    for (let fruit of fruits){
        document.write(fruit);
    }
}



// call it
// example();