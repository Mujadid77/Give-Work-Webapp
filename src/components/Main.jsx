import Login from './Login';
import ListPage from './ListPage';
import useFirestore from "../hooks/useFirestore";
import Nav from './Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useGlobalContext } from '../context/GlobalStateContext';


const Main = () => {

    const { currentScreen, currentUser } = useGlobalContext();
    const { docs } = useFirestore(currentScreen);

    // console.log(docs);

    return (
        <div className="main">
        <Router>
        {/* //if currentUser is null, then show login page else show list page */}
          {currentUser ? <Nav 
          currentScreen={currentScreen}
          /> : null}
          <Routes>
            <Route path="/" element={currentUser ? <ListPage 
            docs={docs}
            currentScreen={currentScreen}
            /> : <Login />} />
          </Routes>
        </Router>
        </div>
    )
}

export default Main;