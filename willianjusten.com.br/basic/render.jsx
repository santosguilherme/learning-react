'use strict';

// Sem JSX
ReactDOM.render(
    React.createElement('h1', null, 'Hello1'),
    document.getElementById('hello1')
);

// COM JSX
ReactDOM.render(
    <h1>Hello2</h1>,
    document.getElementById('hello2')
);

// Criando componente reutilizável
var Hello = React.createClass({
    render: function(){
        return (
            <h1>Hello3</h1>
        );
    }
});

// Chamando o componente
ReactDOM.render(
    <Hello />,
    document.getElementById('hello3')
);


// Usando ES6
class HelloES extends React.Component {
    render(){
        return (
            <h1>Hello4</h1>
        )
    }
};

// renderizando o componente do ES6
ReactDOM.render(
    <HelloES />,
    document.getElementById('hello4')
);


// JS inside render
ReactDOM.render(
    <div>
        {
            ['Banana', 'Apple', 'Grape'].map(function (fruit) {
                return <li>{fruit}</li>
            })
        }
    </div>,
    document.getElementById('fruits')
);

//Props
var HelloProp = React.createClass({
    render: function () {
        return (
            <h1>Hello { this.props.name }!</h1>
        );
    }
});

ReactDOM.render(<HelloProp name='Willian' />, document.getElementById('hello'));