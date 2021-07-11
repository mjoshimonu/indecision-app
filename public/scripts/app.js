'use strict';

console.log('App.js is running!');

//JSX -Javascript XML

var app = {
    title: 'Indecision App!',
    subTitle: 'your life in the hands of a computer'
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    React.createElement(
        'p',
        null,
        app.subTitle
    )
);

var user = {
    Name: 'Anish',
    Age: 26,
    Location: 'Banswara'
};
function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location:',
            location
        );
    }
}

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.Name
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.Age
    ),
    getLocation(user.location)
);
var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);
