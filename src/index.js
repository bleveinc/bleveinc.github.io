import React from 'react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'
import App from './App'
import data from './data'
import './css/base.css'
import './css/bodhi.css'
import './css/skeleton.css'

//console.log(ReactDOMServer.renderToString(<App data={data} />))

ReactDOM.render(<App data={data} />, document.getElementById('root'))
