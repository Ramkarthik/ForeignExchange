import Dropdown from '../components/Dropdown'
import CurrencyData from '../components/CurrencyData'
class CurrencyForm extends React.Component {
    constructor(){
        super()
        this.state = {
            from: "",
            to: "",
            currencyData: []
        }
        this.selectChangedCallback = this.selectChangedCallback.bind(this)
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
    }

    componentDidMount(){
        const currencyData = CurrencyData
        currencyData.sort(function(a, b){
            if(a.option < b.option) { return -1; }
            if(a.option > b.option) { return 1; }
            return 0;
        })
        this.setState({from: "USD", to: "All", currencyData: currencyData})
    }

    selectChangedCallback = (key, value) => {
        this.setState({[key]: value})
    }

    handleFormSubmit() {
        this.props.currencyFormCallback(this.state)
    }

    render() {
        
        return (
            <div className="columns">
                <div className="column"></div>
                <div className="column is-8">
                        <div className="field is-horizontal">
                            <div className="field-label is-normal">
                                <label className="label">From</label>
                            </div>
                            <div className="field-body">
                                <div className="field">
                                    <Dropdown key="from" selectChangedCallback={this.selectChangedCallback} name="from" selection={this.state.from} currencyData={this.state.currencyData} />
                                </div>
                            </div>
                            <div className="field-label is-normal">
                                <label className="label">To</label>
                            </div>
                            <div className="field-body">
                                <div className="field">
                                    <Dropdown key="to" selectChangedCallback={this.selectChangedCallback} name="to" selection={this.state.to} currencyData={this.state.currencyData} />
                                </div>
                            </div>
                            <div className="field-body ml-5">
                                <div className="field">
                                <button onClick={this.handleFormSubmit} className="button is-primary">
                                    WTF!!
                                </button>
                                </div>
                            </div>
                        </div>
                </div>
                <div className="column"></div>
            </div>
        )
    }
}

export default CurrencyForm