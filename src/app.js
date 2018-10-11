console.log("App.js is running!")
// import Clicker from '../Components/Clicker';
let count = 0, counter;

const 
    getFirstName = fullName => fullName.split(' ')[0],
    checkForLocation = location => location ? <p>Location: {location}</p> : <p>Location: Unknown</p>,
    appRoot = document.getElementById('app'),
    app = {
        header: 'React Template with WebPack',
        subtitle: 'Built upon Node, Babel, and including SCSS',
        options: ['one', 'two', 'three']
    },
    user = {
        name: 'Josh Wood',
        age: 25,
        location: 'Arlington'
    },
    // Three ways to render: Ternary, logical and operator, function returning JSX
    templateTwo = (
        <div>
            <h1>{user.name ? getFirstName(user.name) : 'Anonymous'}'s Template</h1>
            {
                user.age > 18 &&
                <p>{user.age}</p>
            }
            {checkForLocation(user.location)}
            {counter}
            {/* <Clicker /> */}
        </div>
    ),
    loadOrReloadDOM = () => {
        counter = (
            <div>
            <p>{count}</p>
            <button
                // make sure you pass the function event 'e' to the function to have access to the event
                onClick={e => iterate(e)}
                id="addButton">Add One</button> 
            <button 
                onClick={e => iterate(e)}
                id="subtractButton">Subtract One</button> 
            <button
                onClick={e => iterate(e)}
                id="resetButton">Reset</button>
            </div>
        )
        ReactDOM.render(counter, appRoot)
    },
    iterate = e => {
        e.target.id === "addButton" ? count += 1 : e.target.id === "subtractButton" ? count -= 1 : count = 0
        loadOrReloadDOM()
    },
    template = (
        <div>
            <h1>{app.header}</h1>
            {app.subtitle && <h4>{app.subtitle}</h4>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'There are no options'}</p>
            <ol>
            {
                app.options.length > 0 && app.options.map( (option, i) => <li key={i}>{option}</li>)
            }
            </ol>
        </div>
    );

loadOrReloadDOM()