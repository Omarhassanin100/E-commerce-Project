import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./css/components/button.css"
import "./css/components/loading.css"
import "./css/components/alers.css"
import '@fortawesome/fontawesome-free/css/all.min.css';
import App from './AppOld';
import { BrowserRouter} from 'react-router-dom';
import "./css/components/form.css"
import "./Pages/Auth/Auth.css"
import 'bootstrap/dist/css/bootstrap.min.css';
// import MenuContext from './context/MenuContext';
// import WindowContext from './context/WindowContext';
import 'react-loading-skeleton/dist/skeleton.css'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<React.StrictMode>
    {/* <WindowContext>
        <MenuContext> */}
            <BrowserRouter>
                <App />
            </BrowserRouter>
        {/* </MenuContext>
    </WindowContext> */}
</React.StrictMode>
);


