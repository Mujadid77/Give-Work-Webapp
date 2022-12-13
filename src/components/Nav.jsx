
import React from 'react';
import { useGlobalContext } from '../context/GlobalStateContext';
import logo from '../assets/logo.svg';

const Nav = ({currentScreen}) => {

    const {  setCurrentScreen } = useGlobalContext();
    let highlightUser = '', highlightLabour = '';
    if(currentScreen === 'users'){
        highlightUser = 'highlight';
    }else{
        highlightLabour = 'highlight';
    }

    return (
        
        <div className="nav">
            <div className='logoDiv'>
                <img src={logo} alt="Get Work" width={'100px'} height={'100px'}/>
            </div>
    
            <div className="nav-links">
                <p className={highlightUser} onClick={ () => {
                    setCurrentScreen('users');
                } }>Users</p>
                <p className={highlightLabour} onClick={ () => {
                    setCurrentScreen('labours');
                } }>Labours</p>
            </div>
        </div>

    )
}
export default Nav;