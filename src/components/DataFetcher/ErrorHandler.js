import React from 'react'
import { oneOfType, objectOf, arrayOf, node, string, shape } from 'prop-types'

const ErrorHandler = props => {
  return (
    <div>
      {
        Object.entries(props.collections).map(
          ([ name, { label, data, fetching, error } ]) => (
            <div key={name}>
              {
                data !== null ?
                  null :
                  <p>{label}: No data to show</p>
              }

              {
                fetching === false ?
                  null :
                  <p>{label}: Fetching now...</p>
              }

              {
                error === null ?
                  null :
                  <p>{label}: {error.message}</p>
              }
            </div>
          )
        )
      }
      {
        React.Children.map(
          props.children,
          child => React.cloneElement(
            child,
            {
              collections: props.collections
            }
          )
        )
      }
    </div>
  )
}

ErrorHandler.propTypes = {
  collections: objectOf(
    shape({
      url: string.isRequired,
      label: string.isRequired,
    })
  ),
  children: oneOfType([node, arrayOf(node)])
}

export default ErrorHandler