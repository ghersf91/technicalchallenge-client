import { Route, Routes } from 'react-router-dom'
import PhonesPage from '../Pages/PhonesPage/PhonesPage'
// import SignupPage from '../Pages/SignupPage/SignupPage'
// import HomePage from './../Pages/HomePage/HomePage'
// import ProjectsPage from './../Pages/ProjectsPage/ProjectsPage'
// import CreateProjectPage from './../Pages/CreateProjectPage/CreateProjectPage'
// import LoginPage from '../Pages/LoginPage/LoginPage'
// import ProfilePage from '../Pages/ProfilePage/ProfilePage'
// import PrivateRoute from './PrivateRoutes'
// import ProjectDetailsPage from '../Pages/ProjectsDetailsPage/ProjectDetails'
// import EditProjectPage from '../Pages/EditProjectPage/EditProjectPage'
// import SearchPage from '../Pages/SearchPage/SearchPage'
// import UsersListPage from '../Pages/UsersListPage/UsersListPage'
// import NotFoundPage from '../Pages/NotFoundPage/NotFoundPage'

const AppRoutes = () => {

    return (
        <>
            <Routes>

                <Route path="/phones" element={<PhonesPage />}>
                    <Route path="" />
                </Route>

                <Route path="/" element={<HomePage />} />

                <Route path="*" element={<NotFoundPage />} />

            </Routes>

        </>

    )
}

export default AppRoutes