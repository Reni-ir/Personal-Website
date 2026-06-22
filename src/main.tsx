import './index.css'
import ReactDom from 'react-dom/client'
import { RouterProvider } from '@tanstack/react-router'
import {router} from "./router"
import React from 'react'

declare module '@tanstack/react-router'{
    interface Register {
        router : typeof router
    }
}


ReactDom.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
 
)
