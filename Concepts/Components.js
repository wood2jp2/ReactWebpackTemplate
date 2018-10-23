class Header extends React.Component {
    constructor(props) {
        super()
        this.name = props.name
    }

    render() {
        console.log(this.props) // access props like so.
        return <p>This is a header for {this.name}</p>
    }
}

// returns straight JSX
var Footer = props => <footer>Thank you for visiting the site. Copyright {props.year}</footer>

// enclose pure JSX in parentheses
const jsx = (
    <div>
        {/* pass props by outlining them on components like html attributes. */}
        <Header name="Josh" something={19}/>
        <Footer year={new Date().getFullYear()}/>
    </div>
)