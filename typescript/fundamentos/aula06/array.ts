// {const array: Array<number>  = [1, 2, 3, 4, 5]

// const stringArray: string[] = ['a', 'b', 'c']

// // console.log(array[0])

// console.log('array original ', array)

// array.pop()

// console.log('array retirando o ultimo elemento ', array)
// }


const array: Array<number> = [1, 2, 3, 4, 5]

const stringArray: string[] = ['a', 'b', 'c', 'd']

const buscaNum = array.find(num => num > 2)

console.log(buscaNum)

array.forEach(num => {
    if(num > 2 && num % 2 === 0){
        console.log.apply(num * 2)
    }
})

array.map(num => console.log(num))