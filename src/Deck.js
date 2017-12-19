import React, { Component } from 'react'
import { View, Animated } from 'react-native'

class Deck extends Component {
  renderCards = () => this.props.data.map(item => this.props.renderCard(item))

  render() {
    return (
      <View>
        {this.renderCards()}
      </View>
    )
  }
}

export default Deck
