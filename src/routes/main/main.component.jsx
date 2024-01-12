import './main.styles.scss'
import Eras from '../../components/eras/eras.component'
import Era from '../era/era.component'
import { Outlet } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'

const Main = () => {
    return (
        <Routes>
            <Route index element={<Eras />} />
            <Route path=":eraId/*" element={<Era />} />
        </Routes>
    )
}

export default Main