import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button } from "../../dds-core-react/src/components/Button/Button";
window.React = React

const App = () => {
  return (
    <div>
        <Button variation="secondary">Hello</Button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
