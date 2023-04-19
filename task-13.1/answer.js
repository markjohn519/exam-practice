function answer(input){
  try {
    return decodeURI(input)
  } catch (error) {
    return null
  }
}
