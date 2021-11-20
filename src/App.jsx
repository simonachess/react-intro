
import Hello from './Components/Start/Hello';

const element = <i>Labas</i>

const data = [
  { to: 'Europe', color: 'blue', size: '44px' },
  { to: 'America', color: 'red', size: '14px' },
  { to: 'Antarctica', color: 'green', size: '54px' }
]

function App() {
  return (
    <>
      <div className="App">
        <Hello element={element} to={'Madagascar'} color={'red'} size={'15px'} />
        <Hello to={6 * 9} color={'blue'} size={'25px'} />
        <Hello to={'Lietuva'} color={'green'} size={'35px'} />

        {
          data.map((d, i) => <Hello key={i} element={element} to={d.to} color={d.color} size={d.size} />)
        }

      </div>
    </>
  );
}

export default App;
