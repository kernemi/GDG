import React, { createContext, useContext, useState, useEffect } from 'react';
import './index.css';

const UserAuthContext = createContext();

export const UserAuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');

    useEffect(() => {
        const storedUser = localStorage.getItem('username');
        if (storedUser) {
            setIsLoggedIn(true);
            setUsername(storedUser);
        }
    }, []);

    const login = (name) => {
        setIsLoggedIn(true);
        setUsername(name);
        localStorage.setItem('username', name);
    };

    const logout = () => {
        setIsLoggedIn(false);
        setUsername('');
        localStorage.removeItem('username');
    };

    return (
        <UserAuthContext.Provider value={{ isLoggedIn, username, login, logout }}>
            {children}
        </UserAuthContext.Provider>
    );
};

export const useUserAuth = () => useContext(UserAuthContext);

const App = () => {
    const { isLoggedIn, username, login, logout } = useUserAuth();
    const [inputName, setInputName] = useState('');

    return (
        <div className="container">
            {isLoggedIn ? (
                <div>
                    <h1>Welcome, {username}!</h1>
                    <button className="logout-btn" onClick={logout}>Logout</button>
                </div>
            ) : (
                <div>
                    <h1>Please log in</h1>
                    <input 
                        type="text" 
                        placeholder="Enter your name" 
                        value={inputName} 
                        onChange={(e) => setInputName(e.target.value)}
                        className="input-box"
                    />
                    <button 
                        className="login-btn" 
                        onClick={() => login(inputName)}
                        disabled={!inputName.trim()}
                    >
                        Login
                    </button>
                </div>
            )}
        </div>
    );
};

const MainApp = () => (
    <UserAuthProvider>
        <App />
    </UserAuthProvider>
);

export default MainApp;
