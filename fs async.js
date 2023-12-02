const { readFile, writeFile } = require('fs');

readFile('./content/subfolder/first.txt','utf8', (err,result)=>{
    
    if(err){
        console.log(err)
        return
    }
   
   const first = result
  readFile('./content/subfolder/second.txt','utf8', (err,result)=>{
    
    if(err){
        console.log(err)
        return}
    const second = result
    writeFile('./content/subfolder/result_async.txt',`Here is the async result of ${first} and ${second}`,
     
    (err,result)=>{
        if(err){
            console.log(err)
            return
        console.log(result)}    

    })
    })
})


