import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'

import {useAuth} from '../hooks/useAuth'

import {routes} from './routes.data'
import Layout from "../components/ui/layout/Layout.jsx";
import Loader from "../components/ui/loader/Loader.jsx";
import {Suspense} from "react";

const Router = () => {
    const {isAuth} = useAuth()

    return (
        <BrowserRouter>
            <Layout isAuth={isAuth}>
                <Suspense fallback={<Loader/>}>
                    <Routes>
                        {routes.map(route => {
                            if (route.isAuth && !isAuth) {
                                return <Route key={route.path}
                                              path={route.path}
                                              element={<Navigate to="/login"/>}/>
                            }

                            return (
                                <Route
                                    key={route.path}
                                    path={route.path}
                                    element={<route.component/>}
                                />
                            )
                        })}
                    </Routes>
                </Suspense>
            </Layout>
        </BrowserRouter>
    )
}

export default Router
