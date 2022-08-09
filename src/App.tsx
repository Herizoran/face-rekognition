import React from 'react';
import './components/formStyle.css'
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="m-5 flex justify-center">
            <form className="flex items-center space-x-6">
                <label className="block">
                    <h1 className="sr-only">Choose profile photo</h1>
                    <br/>
                    <input type={"file"}
                            className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-amber-400 file:text-black hover:file:bg-violet-100"/>
                </label>
            </form>
        </div>
    );
}

export default App;
