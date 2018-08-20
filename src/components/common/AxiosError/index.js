import React from 'react'

import './index.css'

const AxiosErrorContainer = props => (
  <div className="axios-error">
    <h1>{props.message}</h1>
    <p>Method: {props.config.method.toUpperCase()}</p>
    <p>URL: {props.config.url}</p>
    <p>Headers: {JSON.stringify(props.config.headers)}</p>
    {props.children}
  </div>
)

const AxiosError = props => {
  if (props.response) {
    return (
      <AxiosErrorContainer {...props}>
        <p>{JSON.stringify(props.response.data)}</p>
        <p>{JSON.stringify(props.response.status)}</p>
        <p>{JSON.stringify(props.response.headers)}</p>
      </AxiosErrorContainer>
    )
  } else if (props.request) {
    return (
      <AxiosErrorContainer {...props}>
        <p>{JSON.stringify(props.request)}</p>
      </AxiosErrorContainer>
    )
  } else {
    return (
      <AxiosErrorContainer {...props}>
        <p>Unknown cause of error.</p>
      </AxiosErrorContainer>
    )
  }
}

export default AxiosError
