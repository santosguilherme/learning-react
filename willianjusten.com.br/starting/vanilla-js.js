'use strict';

var ExampleApplication = React.createClass({
    render: function () {
        var elapsed = Math.round(this.props.elapsed / 100);
        var seconds = elapsed / 10 + (elapsed % 10 ? '' : '.0' );
        var message =
            'O React está rodando com sucesso há ' + seconds + ' seconds.';
        return React.DOM.p(null, message);
    }
});

var ExampleApplicationFactory = React.createFactory(ExampleApplication);
var start = new Date().getTime();

setInterval(function () {
    ReactDOM.render(
        ExampleApplicationFactory({elapsed: new Date().getTime() - start}),
        document.getElementById('container')
    );
}, 50);