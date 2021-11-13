import React from 'react';
import {FormRegister} from "./components/organisms/FormRegister";
import {RegisterUser} from "./pages/register";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AppStateProvider} from "./state/AppStateContext";
import {Categories} from "./pages/categories";
import {gql, useQuery} from "@apollo/client";
import {useAppState} from "./state/AppStateContext";
import {setCategories} from "./state/actions";
import {Questions} from './pages/questions'

const GET_CATEGORIES = gql`
    query{
        getCategories{
            id
            name
        }
    }
`

function App() {
    const {dispatch} = useAppState()
    const {loading, error, data} = useQuery(GET_CATEGORIES, {
        onCompleted: (data) => {
            const categories = data.getCategories.map((e: any) => ({name: e.name, id: e.id}))
            dispatch(setCategories(categories))
        }
    })
    if (loading) return <div/>;
    if (error) return <p>Error</p>
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<RegisterUser/>}/>
                <Route path="/categories" element={<Categories/>}/>
                {data.getCategories.map((e: any) => <Route key={e.id} path={'/' + e.name} element={<Questions/>}/>)}
                <Route
                    path="*"
                    element={
                        <div>not found</div>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
