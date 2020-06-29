import reactions from "../components/Reactions"
class Currency extends React.Component {
    render() {
        const currency = this.props.currency
        let gif = this.getReaction(currency)
        return (
            <div className="column is-4">
                <div className="card">
                    <div className="card-image">
                        <figure className="image is-4by3">
                            <img src={gif} width="300" height="225" />
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="media-content">
                            <p className="title is-4">{currency.name} ({currency.short})</p>
                            <p className=""><strong>Rate:</strong> 1 {this.props.base} = {Math.round((currency.today + Number.EPSILON) * 10000) / 10000} { currency.short }</p>
                            <p className=""><strong>Date:</strong> {currency.todayDate}</p>
                        </div>
                    </div>
                </div>
            </div>  
        )
    }

    getReaction(currency) {
        const performance = ((currency.today - currency.rate) * 100 / currency.today)
        
        let reaction = reactions.filter(r => performance <= r.end && performance > r.start)
        let gif = ''
        if(reaction.length){
            const id = this.getRandomInt(reaction[0].count) + 1
            gif = "./" + reaction[0].category + "-" + id + ".gif"
        }
        return gif
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

}

export default Currency