import React from "react";
import './App.css';
import Sidebar from './SideBar';
import Feed from './Feed';
import Widgets from './Widgets';
//import { FirebaseDatabaseProvider } from "@react-firebase/database";

function App() {
    return (
        //<FirebaseDatabaseProvider>
      <div className="app">
          {/* sidebar*/}
          <Sidebar /> 

          {/* feed */}
          <Feed />

          {/* widgets */}
          <Widgets />
            </div>
        //</FirebaseDatabaseProvider>

  );
}

export default App;
