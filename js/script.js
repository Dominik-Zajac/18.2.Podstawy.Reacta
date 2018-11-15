var movies = [
	{
        id: 1,
        image: './image/wladca.jpeg',
        title: 'Wladca pierscieni',
        type: 'Fantasy/Akcji',
        desc: 'Film o wojnie o pierscien'
    },
    {
        id: 2,
        image: './image/hobbit.jpg',
        title: 'Hobbit',
        type: 'Fantasy/Przygodowy',
        desc: 'Film o wedrowce hobbita'
    },
    {
        id: 3,
        image: './image/nietykalni.jpeg',
        title: 'Nietykalni',
        type: 'Dramat/Komediodramat',
        desc: 'Historia przyjazni dwoch mezczyzn'
    }
];

var moviesElements = movies.map(function(movie) {
    return React.createElement('li', {
            key: movie.id
        },
        React.createElement('img', {
            src: movie.image
        }),
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.type),
        React.createElement('p', {}, movie.desc)
    );
});

var element =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista filmow'),
        React.createElement('ul', {}, moviesElements)
    );

ReactDOM.render(element, document.getElementById('app'));
