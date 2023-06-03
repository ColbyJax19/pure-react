const Person = (props) => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, props.name),
    React.createElement('p', {}, props.occupation),
  ]);
};

const App = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', { className: 'title' }, 'React is rendered'),
    React.createElement(
      Person,
      {
        name: 'Colby',
        occupation: 'I am a developer',
      },
      null
    ),
    React.createElement(
      Person,
      {
        name: 'Mikael',
        occupation: 'I am an instructor',
      },
      null
    ),
    React.createElement(
      Person,
      {
        name: 'Emily',
        occupation: 'I am a UI Engineer',
      },
      null
    ),
  ]);
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
