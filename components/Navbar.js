class Navbar extends React.Component {
    render() {
        return (
            <div className="columns mt-4">
                <div className="column"></div>
                <div className="column is-8">
                    <h3 className="title is-3 has-text-centered is-form-title">What the Foreign Exchange (WTF)!!</h3>
                    <p className="has-text-centered pt-2 pb-2">A fun way to know exchange rates and help decide if you should transfer money now or not based on 6 months trend.</p>
                    <p className="has-text-centered is-size-7">Follow me on Twitter: <a href="https://twitter.com/Ramkarthik">@Ramkarthik</a></p>
                </div>
                <div className="column"></div>
            </div>
        )
    }
}

export default Navbar