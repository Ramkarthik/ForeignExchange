import date from '../components/DateHelper'
import Currencies from '../components/Currencies'
import Layout from '../components/Layout'
import CurrencyForm from '../components/CurrencyForm'
class Index extends React.Component {

    constructor() {
        super()
        this.state = {
            loading: false,
            currencies: [],
            base: ''
        }
        this.currencyFormCallback = this.currencyFormCallback.bind(this)
    }

    componentDidMount(){
        const today = date.today()
        const previousDay = date.previousDay()
        this.setState({loading: false})
        const api = "https://api.exchangeratesapi.io/history?start_at=" + previousDay + "&end_at=" + today + "&base=USD"
        fetch(api).then(res => {
           return res.json()
            
        }).then(data => {
            this.setState({currencies: data.rates, loading: false, base: "USD" })
        })
    }

    currencyFormCallback = (data) => {
        const today = date.today()
        const previousDay = date.previousDay()
        const api = "https://api.exchangeratesapi.io/history?start_at=" + previousDay + "&end_at=" + today + "&base=" + data.from + (data.to === "All" ? "" : "&symbols=" + data.to)
        this.setState({loading: true})
        fetch(api).then(res => {
           return res.json()
            
        }).then(currencyData => {
            this.setState({currencies: currencyData.rates, loading: false, base: data.from})
        })
        
    }

    render() {
        return (
            <div>
                <Layout>
                    <CurrencyForm currencyFormCallback={this.currencyFormCallback} />
                    <div style={{display: this.state.loading ? 'none' : 'block'}}>
                        <Currencies base={this.state.base} currencies={this.state.currencies} />
                    </div>
                    <div style={{display: this.state.loading ? 'block' : 'none'}}>
                        <progress className="progress is-small is-primary" max="100">15%</progress>
                    </div>
                </Layout>
            </div>
        )
    }
}


export default Index