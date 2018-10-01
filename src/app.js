console.log("App.js is running!")

var template = 
    (<div>
        <h1>This is a header</h1>
        <p>hey.</p>
    </div>)

var templateTwo = (
    <div>
        <h1>Josh's Template</h1>
        <p>25</p>
        <p>Location: Arlington</p>
    </div>
)

var appRoot = document.getElementById('app')

ReactDOM.render(templateTwo, appRoot)