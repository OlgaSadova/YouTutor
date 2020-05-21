import React from 'react';

class CalendlyEmbed extends React.Component {

  buildCalendlyUrl = (account, eventName) =>
    `https://calendly.com/${account}/${eventName}`

  componentDidMount() {
    const head = document.querySelector('head')
    const script = document.createElement('script')
    script.setAttribute('src', this.calendlyScriptSrc)
    head.appendChild(script)
  }

  componentWillUnmount() {
    const head = document.querySelector('head')
    const script = document.querySelector('script')
    head.removeChild(script)
  }
  render() {
    const { account, eventName } = this.props
    return (
      <div id="schedule_form">
        <div
          className="calendly-inline-widget"
          data-url={this.buildCalendlyUrl(account, eventName)}
          style={{ minWidth: '480px', height: '640px' }}
        />
      </div>
    )
  }
}
//how to export the code 
{/* */}

export default CalendlyEmbed