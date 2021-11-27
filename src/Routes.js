import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react'
import CountriesDashboard from './sidebar/CountriesDashboard'
import CountriesTable from './sidebar/CountriesTable'
import IndiaDashboard from './sidebar/IndiaDashboard'
import StatesTable from './sidebar/StatesTable'
import StateDistrictsTable from './sidebar/StateDistrictsTable'
import Faqs from './sidebar/Faqs'



const Routes =()=> {
    return(
        <Router>
            <Switch>
                <Route exact path="/covidproject" component={CountriesDashboard}></Route>
                {/* <Route path="/CountriesDashboard" exact component={CountriesDashboard}></Route> */}
                <Route path="/CountriesTable" exact component={CountriesTable}></Route>
                <Route path="/IndiaDashboard" exact component={IndiaDashboard}></Route>
                <Route path="/StatesTable" exact component={StatesTable}></Route>
                <Route path="/StateDistrictsTable" exact component={StateDistrictsTable}></Route>
                <Route path="/Faqs" exact component={Faqs}></Route>
                
            </Switch>
        </Router>
    );
} 

export default Routes;

