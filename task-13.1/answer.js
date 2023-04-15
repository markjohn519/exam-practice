function answer(input){
    try{
        return JSON.parse(input)
    }
    catch(err){
        return null
    }

}