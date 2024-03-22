import {
  TextCardContainer,
  TextListContainer,
  TextItem,
  TextButton,
  TextAreaContainer,
} from './styledComponents'

const TextContainer = props => {
  const {
    isBold,
    isItalic,
    isUnderline,
    textAreaInput,
    changeTextArea,
    clickBold,
    clickItalic,
    clickUnderline,
  } = props

  const changeTextAreaInput = event => {
    changeTextArea(event.target.value)
  }

  const onClickBold = () => {
    clickBold()
  }

  const onClickItalic = () => {
    clickItalic()
  }

  const onClickUnderline = () => {
    clickUnderline()
  }

  return (
    <TextCardContainer>
      <TextListContainer>
        <TextItem>
          <TextButton
            textBold="true"
            isActive={isBold}
            onClick={onClickBold}
            data-testid="bold"
          >
            B
          </TextButton>
        </TextItem>
        <TextItem>
          <TextButton
            textItalic="true"
            isActive={isItalic}
            onClick={onClickItalic}
            data-testid="italic"
          >
            i
          </TextButton>
        </TextItem>
        <TextItem>
          <TextButton
            textUnderline="true"
            isActive={isUnderline}
            onClick={onClickUnderline}
            data-testid="underline"
          >
            U
          </TextButton>
        </TextItem>
      </TextListContainer>
      <TextAreaContainer
        value={textAreaInput}
        isBold={isBold}
        isItalic={isItalic}
        isUnderline={isUnderline}
        onChange={changeTextAreaInput}
      />
    </TextCardContainer>
  )
}

export default TextContainer
