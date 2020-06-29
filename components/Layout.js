import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
class Layout extends React.Component {

    render() {
        return (
            <div>
            <Head>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.0/css/bulma.css" rel="stylesheet" />
                <title>What the Foreign Exchange (WTF)!!</title>
                <meta name="description" content="What the Foreign Exchange is a fun way to know exchange rates based on trends" />
                <meta property="og:url" content="https://wtforeignexchange.netlify.app/" />
                <meta property="og:site_name" content="HackerNews Deck" />
                <meta property="og:title" content="What the Foreign Exchange!!" />
                <meta property="og:description" content="What the Foreign Exchange is a fun way to know exchange rates based on trends" />
                <meta property="og:image" content="https://wtforeignexchange.netlify.app/foreign-exchange.png" />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="500" />
                <meta property="og:image:height" content="500" />
                <meta property="twitter:site" content="foreignexchange" />
                <meta property="twitter:creator" content="ramkarthik" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:title" content="What the Foreign Exchange!!" />
                <meta property="twitter:description" content="What the Foreign Exchange is a fun way to know exchange rates based on trends" />
                <meta property="twitter:image:src" content="https://wtforeignexchange.netlify.app/foreign-exchange.png" />
                <meta property="twitter:image:width" content="500" />
                <meta property="twitter:image:height" content="500" />
            </Head>
            <Navbar />
            <div className="container">
                { this.props.children }
            </div>
            <Footer />
        </div>
        )
    }
}

export default Layout