var data = require('./public/data/MOCK_DATA.json')

console.log(JSON.stringify(data.reduce((result, next) => ({...result, [next.id]: {
    address: next.adress,
    age: next.age,
    city: next.city,
    email: next.email,
    first_name: next.first_name,
    last_name: next.last_name,
    phone: next.phone,
    proffesion: next.proffesion,
    photo: 'http://lorempixel.com/400/200/people',
    isFavorite: false
} }), {})))