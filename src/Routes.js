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
                <Route exact path="/covidproject/" component={CountriesDashboard}></Route>
                {/* <Route path="/CountriesDashboard" exact component={CountriesDashboard}></Route> */}
                <Route exact path="/covidproject/CountriesTable" component={CountriesTable}></Route>
                <Route exact path="/covidproject/IndiaDashboard" component={IndiaDashboard}></Route>
                <Route exact path="/covidproject/StatesTable" component={StatesTable}></Route>
                <Route exact path="/covidproject/StateDistrictsTable" component={StateDistrictsTable}></Route>
                <Route exact path="/covidproject/Faqs" component={Faqs}></Route>
                
            </Switch>
        </Router>
    );
} 

export default Routes;

