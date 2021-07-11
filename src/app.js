console.log('App.js is running!')

//JSX -Javascript XML

var app={
    title:'Indecision App!',
    subTitle:'your life in the hands of a computer'
}

var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subTitle}</p>
    </div>
);

var user={
    Name:'Anish',
    Age:26,
    Location:'Banswara'
}
function getLocation(location){
    if (location) {
        return <p>Location:{location}</p>
    }
}

var templateTwo=(
    <div>
        <h1>{user.Name}</h1>
        <p>Age: {user.Age}</p>
        {getLocation(user.location)}
    </div>
);
var appRoot=document.getElementById('app');
ReactDOM.render(templateTwo,appRoot);