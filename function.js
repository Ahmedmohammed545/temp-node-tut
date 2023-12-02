names_obj= require ('./names.js')

const greeting=(name)=>{
    console.log(`Hello ${name},What's up ?`)


}
greeting(names_obj.my_name)
greeting(names_obj.other)
greeting(names_obj.another)

module.exports = greeting


