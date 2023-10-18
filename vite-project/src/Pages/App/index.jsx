import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Home'
import Contacts from '../Contacts'
import NotFound from '../NotFound'
import Navbar from '../../Components/Navbar'
import './App.css'

const AppRotes = () => {
    let routes = useRoutes([
        { path: '/', element: <Home /> },
        { path: '/contacts', element: <Contacts /> },
        { path: '/*', element: <NotFound /> }

    ])
    return routes
}

const App = () => {
    return (
        <BrowserRouter>
            <Navbar /> <br />
            <AppRotes />
        </BrowserRouter>

    )
}

export default App