class Dropdown extends React.Component {
    constructor(){
        super()
        this.selectionChange = this.selectionChange.bind(this)
    }

    selectionChange(event){
        const {name, value} = event.target
        this.props.selectChangedCallback(name, value)
    }

    render() {
        let currencyData = this.props.currencyData
        const allOption = [{id: 0, short: "All", option: "All"}]
        
        return (
            <div className="select is-fullwidth">
                <select onChange={this.selectionChange} value={this.props.selection} name={this.props.name}>
                    {
                        allOption.map(a => {
                            if(this.props.name === "to") {
                                return <option key={a.short} value={a.short}>{a.option}</option>
                            }
                        })
                    }
                    {
                        currencyData.map(c => {
                            return <option key={c.short} value={c.short}>{c.option}</option>
                        })
                    }
                </select>
            </div>
        )
    }

}

export default Dropdown