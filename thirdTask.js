var result = []

result.forEach(result => {
});

// function yugioh(integer){

//     if(integer % 2 == 0){
//         console.log("yo");
//         result.push("yo")
//     }
//     else if(integer % 3 == 0){
//         console.log("gi");
//         result.push("gi")
//     }
//     else if(integer % 5 == 0){
//         console.log("oh");
//         result.push("oh")
//     }
// }

function yugioh(integer){
    for(let i =1; i <= integer; i++){
         if(i % 2== 0 && i % 3 == 0){
            // console.log("yo gi");
            result.push("yo gi");
            //  console.log(i)
        }
        else if(i % 2 == 0 && i % 5 == 0){
            // console.log("yo oh");
            result.push("yo oh");
            // console.log(i)
        }
        else if(i % 3 == 0 && i % 5 == 0){
            // console.log("gi oh");
            result.push("gi oh");
            // console.log(i)
        }
        else if(i % 2 == 0){
            // console.log("yo");
            result.push("yo")
            // console.log(i)
        }
        else if(i % 3 == 0){
            // console.log("gi");
            result.push("gi")
            // console.log(i)
        }
        else if(i % 5 == 0){
            // console.log("oh");
            result.push("oh")
            // console.log(i)
        }
        else{
            result.push(i)
        }
       
    }
  
}

yugioh(100);




// yugioh(10)

console.log(result)