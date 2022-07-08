import React from 'react'
import ReactDOM from 'react-dom'
import { NavigationCard } from '../dist/index'

const App = () => {
  return (
    <div>
      <NavigationCard title="ddd" desc="ddd"></NavigationCard>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
