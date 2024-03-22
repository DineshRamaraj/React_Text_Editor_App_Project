import styled from 'styled-components'

export const TextCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #25262c;
  width: 60%;
  border-radius: 10px;
`

export const TextListContainer = styled.ul`
  padding-left: 0px;
  list-style: none;
  display: flex;
  border: 1px solid #334155;
  margin: 0;
  padding: 10px 20px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`

export const TextItem = styled.li`
  margin-right: 30px;
`

export const TextButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-weight: ${props => (props.textBold ? 'bold' : 'normal')};
  font-style: ${props => (props.textItalic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.textUnderline ? 'underline' : 'none')};
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => (props.isActive ? '#faff00' : '#f1f5f9')};
`

export const TextAreaContainer = styled.textarea`
  border: 1px solid #334155;
  font-weight: ${props => (props.isBold ? 'bold' : 'normal')};
  font-style: ${props => (props.isItalic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.isUnderline ? 'underline' : 'normal')};
  width: 100%;
  margin: 0;
  height: 100%;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 10px 20px;
  color: #f8fafc;
  background-color: transparent;
  font-size: 16px;
  outline: none;
`
