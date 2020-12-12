import DarkModeProvider from './DarkModeProvider'
import useDarkMode from './use-dark-mode.hook'
import styled from 'styled-components'

const FancyWrapper = styled.div`
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => (props.dark ? props.bg : props.fg)};
  color: ${(props) => (props.dark ? props.fg : props.bg)};
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
const Hello = ({ bg, fg }) => {
  const [darkMode, toggleDarkMode] = useDarkMode()

  return (
    <FancyWrapper fg={fg} bg={bg} dark={darkMode}>
      <FancyButton dark={darkMode} onClick={() => toggleDarkMode()}>
        Toggle
      </FancyButton>
    </FancyWrapper>
  )
}

export default {
  title: 'Features/Dark-Mode',
  component: DarkModeProvider,
  argTypes: {
    bg: { control: 'color' },
    fg: { control: 'color' }
  }
}

export const Default = (args) => (
  <DarkModeProvider>
    <Hello {...args} />
  </DarkModeProvider>
)

Default.args = {
  bg: 'grey',
  fg: 'white'
}
