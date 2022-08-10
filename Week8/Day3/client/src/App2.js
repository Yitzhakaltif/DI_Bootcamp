import './App.css'
import Counter from './components/Counter';
import ErrorBoundary from './ErrorBoundary'
const App2 = (props) => {
  return(
    <div className="App">
      <header className="App-header">
        <h1>Counter</h1>
        <ErrorBoundary>
        <Counter/>
        </ErrorBoundary>
        <ErrorBoundary>
        <Counter/>
        </ErrorBoundary>
        
      </header>
    </div>
  )
}
export default App2