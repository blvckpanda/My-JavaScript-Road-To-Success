let names = [
    'Jack',
    'Tom',
    'Alvin',
    'Ninja',
    'person1',
    'person2',
    'person3',
    'person4',
    'person5',
    'person6',
    'person7',
    'person8',
    'person9',
    'person10',
    'person11',
    'person12',
]
let n = 0

while (n < names.length) {
    let html = `
    <div>${names[n]}</div>`
    console.log(html)
    n++
}