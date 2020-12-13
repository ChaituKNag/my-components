import styled from 'styled-components'
import React from 'react'
import PropTypes from 'prop-types'
import useDarkMode from './use-dark-mode.hook'

const FancyWrapper = styled.div`
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => (props.dark ? props.darkColor : props.lightColor)};
  color: ${(props) => (props.dark ? props.darkColor : props.lightColor)};
`

const FancyButton = styled.button`
  background: ${(props) => (props.dark ? 'maroon' : 'magenta')};
  color: white;
  border: none;
  border-radius: 3px;
  padding: 0.5em 1em;
  outline: none;
  cursor: pointer;
`
const DarkModeProviderExample = ({ darkColor, lightColor, onToggle }) => {
  const [darkMode, toggleDarkMode] = useDarkMode()

  const handleToggle = () => {
    onToggle()
    toggleDarkMode()
  }

  return (
    <FancyWrapper darkColor={darkColor} lightColor={lightColor} dark={darkMode}>
      <FancyButton dark={darkMode} onClick={handleToggle}>
        Toggle
      </FancyButton>
      {darkMode ? 'Dark mode enabled' : 'Dark mode disabled'}
    </FancyWrapper>
  )
}

DarkModeProviderExample.propTypes = {
  darkColor: PropTypes.string,
  lightColor: PropTypes.string
}

DarkModeProviderExample.defaultProps = {
  darkColor: 'grey',
  lightColor: 'white'
}

export default DarkModeProviderExample
