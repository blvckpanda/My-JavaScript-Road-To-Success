//for loop
for(let i= 0; i<5; i++){
    console.log(i)
}

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

for(let n=0; n<names.length;n++){
    let html = `
    <div>${names[n]}</div>`
    console.log(html)
}