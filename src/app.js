console.log("App.js is running!")

const 
    app = {
        header: 'React Template with WebPack',
        subtitle: 'Built upon Node, Babel, and including SCSS',
        options: ['one', 'two', 'three']
    },
    user = {
        name: 'Josh',
        age: 25,
        location: 'Arlington'
    };
var template = 
    (<div>
        <h1>{app.header}</h1>
        {app.subtitle && <h4>{app.subtitle}</h4>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'There are no options'}</p>
        <ol>
        {
            app.options.length > 0 && app.options.map( (option, i) => <li key={i}>{option}</li>)
        }
        </ol>
    </div>)

let checkForLocation = location => location ? <p>Location: {location}</p> : <p>Location: Unknown</p>
// Three ways to render: Ternary, logical and operator, function returning JSX
var templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}'s Template</h1>
        {
            user.age > 18 &&
            <p>{user.age}</p>
        }
        {checkForLocation(user.location)}
    </div>
)

var appRoot = document.getElementById('app')

ReactDOM.render(template, appRoot)