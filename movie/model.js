let data = [
    { id: 1, title: 'IRON MAN', year: '2000'},
    { id: 2, title: 'Thor', year: '2011'},
    { id: 3, title: 'Captain America', year: '2011'},
]


export function getAll(){
    return Promise.resolve(data);
}

export function remove(id){
    data = data.filter(movie => movie.id !== id);
    return Promise.resolve();
}