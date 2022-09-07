import Router from "./routes/Router"
import { Provider, store } from './app/store'
import './styles/styles.css'

const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}

export default App