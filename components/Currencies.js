import CurrencyData from '../components/CurrencyData'
import Currency from '../components/Currency'
class Currencies extends React.Component {
    render(){
        CurrencyData.forEach(c => {
            c.today = 0;
            c.todayDate = '';
            c.total = 0;
            c.rate = 0;
            c.count = 0;
        })
        let currencyData = CurrencyData
        let dates = []
        for (const [key, value] of Object.entries(this.props.currencies)) {
            dates.push(key)
        }
        dates.sort()
        const latestDate = dates[dates.length - 1]
        
        for (const [key, value] of Object.entries(this.props.currencies)) {
            for (const [iKey, iValue] of Object.entries(value)) {
                currencyData.find((i, o) => {
                    if(i.short === iKey){
                        currencyData[o].count = currencyData[o].count + 1
                        currencyData[o].total = (currencyData[o].total + iValue)
                        currencyData[o].rate = currencyData[o].total / currencyData[o].count
                        if(key === latestDate){
                            currencyData[o].today = iValue
                            currencyData[o].todayDate = latestDate
                        }
                    }
                })
            }   
            
        }
        
        currencyData.sort(function(a, b){
            if(a.option < b.option) { return -1; }
            if(a.option > b.option) { return 1; }
            return 0;
        })

        
        return (
            <div className="columns is-multiline">
             {
             
                currencyData.map(k => {
                    if(k.short !== this.props.base && k.rate !== 0){
                        return <Currency base={this.props.base} key={k.short} currency={k} />
                    }
                })
            }  
            </div>
        )
    }
}

export default Currencies