const data = [
    { id: 1, title: 'IRON MAN', year: '2000'},
    { id: 2, title: 'Thor', year: '2011'},
    { id: 3, title: 'Captain America', year: '2011'},
]

export function listAction(req, res){
    res.send(data);
}