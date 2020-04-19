import React from 'react';
import ReactDOM from 'react-dom';
import MyList from './MyList';
import MyInfo from './MyInfo';

let novoParagrafo = document.createElement('p');
novoParagrafo.innerHTML = 'Mais um parágrafo';

function formatName(user) {
    return `Meu nome é ${user.name} e tenho ${user.age} anos de idade`;
}

const user = {
    name: 'Heitor Mariano',
    age: 32,
};

ReactDOM.render(
    <div>
        <h1>Hello World!</h1>
        <p>Parágrafo de teste</p>
        novoParagrafo
        <p>Lista não ordenada:</p>
        <MyList />
        <h2>Usando uma função</h2>
        <p>{formatName(user)}</p>
        <MyInfo />
    </div>,
    document.getElementById('root')
);
