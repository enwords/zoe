import React, { Component } from 'react'
import { Text } from 'react-native';

class Word extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: props.value,
      transcription: props.transcription,
    }
  }

  render() {
    const {
      value,
      transcription,
    } = this.state

    return (
      <>
        <Text>{value}</Text>
        <Text>{transcription}</Text>
      </>
    )
  }
}

export default Word
