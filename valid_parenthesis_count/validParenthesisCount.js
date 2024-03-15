let validParenthesis = (input)=>{
    let count =0
    for(let i =0 ; i<input.length ;i++){
       if(input[i]=="("){
           if(input[i+1]){
               count +=2
           }
       }
    }
    return count
   }