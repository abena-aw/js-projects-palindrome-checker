function toCamelCase(str){
    for(let i=0; i<str.length;i++){
        if(str[i]=="-"||str[i]=="_"){
            let newString=str.replace(str[i],"");
        }

    }
    console.log(newString)    
}
toCamelCase("the_stealth_warrior")