import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Button } from '../.'

window.React = React

const App = () => {
  return (
    <div>
      <Button>Hello</Button>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
