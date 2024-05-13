import { Card } from './components/card'

function App() {
  return (
    <div>Olá Mundo
      <Card 
        id={1}
        paragraph='Samukinha é barril'
        details='teixandu'
      />
      <Card 
        id={2}
        paragraph='Samukinha é barril'
        details='teixandu'
      />
      <Card 
        id={3}
        paragraph='Samukinha é barril'
        details='teixandu'
      />
    </div>
  );
}

export default App;
