import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Container from '@material-ui/core/Container'
import Word from '../Word/index'
import Spinner from '../Spinner/index'
import * as wordsActions from '../../actions/wordsActions'

const mapStateToProps = (state) => {
  return {
    collection: state.words.collection,
    success: state.words.success,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    wordsActions: bindActionCreators(wordsActions, dispatch),
  }
}

class Words extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collection: [],
      success: true,
    }
  }

  componentWillMount() {
    const { wordsActions: action } = this.props

    action.getWords()
  }

  render() {
    const { success, collection } = this.props

    return (
      <>
          {
            (
              success && (
                <>
                  {collection.map((word) => (
                    <Word
                      key={word.id}
                      value={word.value}
                      transcription={word.transcription}
                    />
                  ))}
                </>
              )
            ) || <Spinner/>
          }
      </>
    )
  }
}

Words.propTypes = {
  wordsActions: PropTypes.object,
  collection: PropTypes.array,
  success: PropTypes.bool,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Words)
