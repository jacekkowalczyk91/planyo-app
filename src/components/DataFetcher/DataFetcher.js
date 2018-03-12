import React from 'react'
import { oneOfType, objectOf, arrayOf, node, string, shape } from 'prop-types'

class DataFetcher extends React.Component {

  state = {
    collections: Object.entries(this.props.collections).reduce(
      (result, [name, attributes]) => ({
        ...result,
        [name]: {
          ...attributes,
          data: null,
          fetching: false,
          error: null
        }
      }),
      {}
    )
  }

  componentDidMount() {
    const { collections } = this.state

    this.setState({
      collections: Object.entries(collections).reduce(
        (result, [name, attributes]) => ({
          ...result,
          [name]: {
            ...attributes,
            fetching: true
          }
        }),
        {}
      )
    })

    Object.entries(collections).forEach(
      ([name, attributes]) => fetch(
        attributes.url
      ).then(
        response => response.json()
      ).then(
        data => this.setState({
          collections: {
            ...collections,
            [name]: {
              ...attributes,
              fetching: false,
              data
            }
          }
        })
      ).catch(
        error => this.setState({
          collections: {
            ...collections,
            [name]: {
              ...attributes,
              fetching: false,
              error
            }
          }
        })
      )
    )
  }

  render() {
    const { collections } = this.state
    return React.Children.map(
      this.props.children,
      child => React.cloneElement(
        child,
        {
          collections
        }
      )
    )
  }
}

DataFetcher.propTypes = {
  collections: objectOf(
    shape({
      url: string.isRequired,
      label: string.isRequired,
    })
  ),
  children: oneOfType([node, arrayOf(node)])
}

export default DataFetcher