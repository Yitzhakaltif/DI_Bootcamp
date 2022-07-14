// Exercise # Currying
// Create a curried function, that returns the volume of an object
// the volume is calculated like this length * weight * height
// 1. Call the function twice, for products of length 10cm. Weight and Height can differ
// 2. Call the function twice, for products of length 10cm and weight 2 grams,  height can differ

 function curriedFunction(length){
    return function (weight){
        return function (height){
            return length * weight * height
        }
    }
}
// const curriedFunction = (length) =>{(weight) =>{(height)}}
const curriedFunctionLengthTen = curriedFunction(10)
const productOne = curriedFunctionLengthTen(10)(70)
const productTwo = curriedFunctionLengthTen(10)(90)
// console.log(productOne)
// console.log(productTwo)
const lengthtandweight = curriedFunction(10)(2)
const thirdProduct = lengthtandweight(100)
// console.log(thirdProduct)
curriedFunction(10)(2)(100)