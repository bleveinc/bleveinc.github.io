
import React from 'react';

class Quotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  componentDidMount() {
    this.setState({
      interval: setInterval(() => this.changeQuote(), 5000),
    });
  }

  changeQuote() {
    let _nextQuote = this.state.index + 1;
    let _index = _nextQuote < this.props.quotes.length ? _nextQuote : 0;
    this.setState({index: _index });
  }

  render() {
    let _quote = this.props.quotes[this.state.index];

    return (
      <section className='quotes'>
        <div className='overlay offset'>
          <div className='container clearfix'>
            <div className='sixteen columns'>
              <div className='quotes-icon'></div>
              <blockquote>{_quote.text}</blockquote>
              <h2 style={{ color: 'white'}}>{_quote.author}</h2>
            </div>
          </div>
        </div>
      </section>
    );
   }
}

export default Quotes;

