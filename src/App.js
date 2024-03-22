import {Component} from 'react'
import TextContainer from './components/TextContainer'
import './App.css'

class App extends Component {
  state = {
    isBold: false,
    isItalic: false,
    isUnderline: false,
    textAreaInput: '',
  }

  changeTextArea = value => {
    this.setState({textAreaInput: value})
  }

  clickBold = () => {
    this.setState(prevState => ({
      isBold: !prevState.isBold,
    }))
  }

  clickItalic = () => {
    this.setState(prevState => ({
      isItalic: !prevState.isItalic,
    }))
  }

  clickUnderline = () => {
    this.setState(prevState => ({
      isUnderline: !prevState.isUnderline,
    }))
  }

  render() {
    const {isBold, isItalic, isUnderline, textAreaInput} = this.state
    return (
      <div className="app-container">
        <div className="main-container">
          <div className="app-image-container">
            <h1 className="app-heading">Text Editor</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
              className="app-image"
            />
          </div>
          <TextContainer
            isBold={isBold}
            isItalic={isItalic}
            isUnderline={isUnderline}
            textAreaInput={textAreaInput}
            changeTextArea={this.changeTextArea}
            clickBold={this.clickBold}
            clickItalic={this.clickItalic}
            clickUnderline={this.clickUnderline}
          />
        </div>
      </div>
    )
  }
}

export default App
