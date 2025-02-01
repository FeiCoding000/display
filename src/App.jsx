import './App.css'
import OrderList from './components/orderList'
import { Login } from './pages/login'

function App() {
  return (
    <>
    <Login />
    <h1>Orders</h1>
    <OrderList />

    </>
  )
}

export default App
