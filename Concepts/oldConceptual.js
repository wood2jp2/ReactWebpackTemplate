console.log("App.js is running!")
// import Clicker from '../Components/Clicker';
let count = 0

const makeAdecision = () => {
    let randomNumber = Math.floor(Math.random()*app.options.length)
    let decision = app.options[randomNumber]
    console.log(decision)
    removeAll()
    render()
}

const 
    getFirstName = fullName => fullName.split(' ')[0],
    checkForLocation = location => location ? <p>Location: {location}</p> : <p>Location: Unknown</p>,
    appRoot = document.getElementById('app'),
    app = {
        header: 'React Template with WebPack',
        subtitle: 'Built upon Node, Babel, and including SCSS',
        options: []
    },
    user = {
        name: 'Josh Wood',
        age: 25,
        location: 'Arlington'
    },
    addOption = e => {
        e.preventDefault()
        let option = e.target.option.value
        app.options.push(option)
        e.target.option.value = ""
        render()
    },
    removeAll = () => {
        app.options = []
        render()
    },
    render = () => {
        // let counter = (
        //     <div>
        //     <p>{count}</p>
        //     <button
        //         // make sure you pass the function event 'e' to the function to have access to the event
        //         onClick={e => iterate(e)}
        //         id="addButton">Add One</button> 
        //     <button 
        //         onClick={e => iterate(e)}
        //         id="subtractButton">Subtract One</button> 
        //     <button
        //         onClick={e => iterate(e)}
        //         id="resetButton">Reset</button>
        //     </div>
        // ),    // Three ways to render: Ternary, logical and operator, function returning JSX
        // templateTwo = (
        //     <div>
        //         <h1>{user.name ? getFirstName(user.name) : 'Anonymous'}'s Template</h1>
        //         {
        //             user.age > 18 &&
        //             <p>{user.age}</p>
        //         }
        //         {checkForLocation(user.location)}
        //         {counter}
        //         {/* <Clicker /> */}
        //     </div>
        // );
        
        let template = (
            <div>
                <h1>{app.header}</h1>
                {app.subtitle && <h4>{app.subtitle}</h4>}
                <p>{app.options.length > 0 ? 'Here are your options' : 'There are no options'}</p>
                <ol>
                {
                    app.options.length > 0 && app.options.map( (option, i) => <li key={i}>{option}</li>)
                }
                </ol>
                <form onSubmit={addOption}>
                {/* Giving the input a 'name' allows you to access the value with the e.target.option.value call. */}
                    <input type="text" name="option">

                    </input>
                    <button>Add Option</button>
                </form>
                <button onClick={removeAll}>Remove All Options</button>
                <button disabled={app.options.length === 0} onClick={makeAdecision}>What should I do?</button>
            </div>
        )
        ReactDOM.render(template, appRoot)
    };
    // },
    // iterate = e => {
    //     e.target.id === "addButton" ? count += 1 : e.target.id === "subtractButton" ? count -= 1 : count = 0
    //     loadOrReloadDOM()
    // };

render()

// state
// changes with the following

this.setState(() => {
    return {
        stateKeyToChange: reassignVal
    }
})

// if you need to access a value in the state and manipulate to a new value based off of that...
// pass in previous state
// Remember: setState UPDATES state, does NOT replace it.
this.setState(prevState => {
    return {
        stateKeyToChange: prevState.reassignVal++
    }
})

// shorthand

this.setState(prevState => ({stateKeyToChange: prevState.reassignVal++}))