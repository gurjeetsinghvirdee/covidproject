import React from "react";
import { Link, withRouter } from 'react-router-dom'
import Header from "../header/Header";
import Sidebar from "./Sidebar";
import IndiaStates from '../helper/IndiaStates'

import "../css/App.css";

class IndiaDashboard extends React.Component {
    constructor(props) {
        super(props);

    }
    state = {
        s1n: "", s1c: "", s1d: "", s1r: "",
        s2n: "", s2c: "", s2d: "", s2r: "",
        s3n: "", s3c: "", s3d: "", s3r: "",

        totalConfirmed: "",
        totalDeaths: "",
        totalRecovered: "",
        newConfirmed: "",
        newDeaths: "",
        newRecovered: "",

        date: "",
        time: "",
        refresh: false

    };

    RefreshData() {
        this.setState({ refresh: true })
    }
    componentDidMount() {
            this.setState({
                totalConfirmed: IndiaStates().statewise[0].confirmed,
                totalDeaths: IndiaStates().statewise[0].deaths,
                totalRecovered: IndiaStates().statewise[0].recovered,
                newConfirmed: IndiaStates().statewise[0].deltaconfirmed,
                newDeaths: IndiaStates().statewise[0].deltadeaths,
                newRecovered: IndiaStates().statewise[0].deltarecovered,

                s1n: IndiaStates().statewise[4].state, s1c: IndiaStates().statewise[4].confirmed,
                s1d: IndiaStates().statewise[4].deaths, s1r: IndiaStates().statewise[4].recovered,

                s2n: IndiaStates().statewise[14].state, s2c: IndiaStates().statewise[14].confirmed,
                s2d: IndiaStates().statewise[14].deaths, s2r: IndiaStates().statewise[14].recovered,

                s3n: IndiaStates().statewise[27].state, s3c: IndiaStates().statewise[27].confirmed,
                s3d: IndiaStates().statewise[27].deaths, s3r: IndiaStates().statewise[27].recovered,

                date: (IndiaStates().statewise[0].lastupdatedtime).split(" ")[0],
                time: (IndiaStates().statewise[0].lastupdatedtime).split(" ")[1]

            })
        
    }

    render() {
        return (
            <>
                <Header />
                <Sidebar />

                <div class="content-header contentHeader">
                    <div class="container-fluid">
                        <div class="row mb-2">
                            <div class="col-12 col-sm-8 col-md-10">
                                <h1 class="m-0">Data is refreshed on &nbsp;
                                    <span class="right badge badge-primary">
                                        {this.state.date}
                                    </span>
                                    &nbsp; at &nbsp;
                                    <span class="right badge badge-primary">
                                        {this.state.time}
                                    </span>
                                </h1>
                            </div>
                            <div class="col-12 col-sm-4 col-md-2" id="refreshData">
                                <button type="button" class="btn btn-outline-primary" onClick={() => this.RefreshData()}>Refresh data</button>
                            </div>

                        </div>
                        {/* /.row */}
                    </div>
                    {/* /.container-fluid */}
                </div>

                <div class="wrapper">
                    <div class="content-wrapper"  id="mainContent">
                        <section class="content">
                            <div class="container-fluid">


                                {/* Info boxes */}
                                <div class="row">
                                    <div class="col-12 col-sm-6 col-md-4">
                                        <div class="info-box">
                                            <span class="info-box-icon bg-info elevation-1"><img src="dist/img/1.png" alt="no"></img></span>

                                            <div class="info-box-content">
                                                <span class="info-box-text">Total confirmed</span>
                                                <h4 class="info-box-number"><span class="right badge badge-info">{this.state.totalConfirmed}</span></h4>
                                            </div>
                                            {/* /.info-box-content */}
                                        </div>
                                        {/* /.info-box */}
                                    </div>
                                    {/* /.col */}
                                    <div class="col-12 col-sm-6 col-md-4">
                                        <div class="info-box mb-3">
                                            <span class="info-box-icon bg-danger elevation-1"><img src="dist/img/2.png" alt="no"></img></span>

                                            <div class="info-box-content">
                                                <span class="info-box-text">Total deaths</span>
                                                <h4 class="info-box-number"><span class="right badge badge-danger">{this.state.totalDeaths}</span></h4>
                                            </div>
                                            {/* /.info-box-content */}
                                        </div>
                                        {/* /.info-box */}
                                    </div>
                                    {/* /.col */}

                                    {/* fix for small devices only */}
                                    <div class="clearfix hidden-md-up"></div>

                                    <div class="col-12 col-sm-6 col-md-4">
                                        <div class="info-box mb-3">
                                            <span class="info-box-icon bg-success elevation-1"><img src="dist/img/3.png" alt="no"></img></span>

                                            <div class="info-box-content">
                                                <span class="info-box-text">Total recovered</span>
                                                <h4 class="info-box-number"><span class="right badge badge-success">{this.state.totalRecovered}</span></h4>
                                            </div>
                                            {/* /.info-box-content */}
                                        </div>
                                        {/* /.info-box */}
                                    </div>
                                    {/* /.col */}

                                </div>
                                {/* /.row */}

                                <div class="row">
                                    {/* Left col */}
                                    <div class="col-md-8">

                                        {/* TABLE: LATEST ORDERS */}
                                        <div class="card">
                                            <div class="card-header border-transparent">
                                                <h3 class="card-title">States data</h3>

                                                <div class="card-tools">
                                                    <button type="button" class="btn btn-tool" data-card-widget="collapse">
                                                        <i class="fas fa-minus"></i>
                                                    </button>
                                                    <button type="button" class="btn btn-tool" data-card-widget="remove">
                                                        <i class="fas fa-times"></i>
                                                    </button>
                                                </div>
                                            </div>
                                            {/* /.card-header */}
                                            <div class="card-body p-0">
                                                <div class="table-responsive">
                                                    <table class="table m-0">
                                                        <thead>
                                                            <tr>
                                                                <th>State</th>
                                                                <th>Total confirmed</th>
                                                                <th>Total deaths</th>
                                                                <th>Total recovered</th>
                                                            </tr>

                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>{this.state.s1n}</td>
                                                                <td>{this.state.s1c}</td>
                                                                <td>{this.state.s1d}</td>
                                                                <td>{this.state.s1r}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>{this.state.s2n}</td>
                                                                <td>{this.state.s2c}</td>
                                                                <td>{this.state.s2d}</td>
                                                                <td>{this.state.s2r}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>{this.state.s3n}</td>
                                                                <td>{this.state.s3c}</td>
                                                                <td>{this.state.s3d}</td>
                                                                <td>{this.state.s3r}</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                {/* /.table-responsive */}
                                            </div>
                                            {/* /.card-body */}
                                            <div class="card-footer clearfix">
                                                <Link to="/covidproject/StatesTable"><button class="btn btn-sm btn-secondary float-right">View all states data</button></Link>
                                            </div>
                                            {/* /.card-footer */}
                                        </div>
                                        {/* /.card */}

                                    </div>

                                    <div class="col-md-4">
                                        {/* Info Boxes Style 2 */}
                                        <div class="info-box mb-3 bg-info">
                                            <span class="info-box-icon"><img src="dist/img/1.png" alt="no"></img></span>

                                            <div class="info-box-content">
                                                <span class="info-box-text">New confirmed</span>
                                                <span class="info-box-number">{this.state.newConfirmed}</span>
                                            </div>
                                            {/* /.info-box-content */}
                                        </div>
                                        {/* /.info-box */}
                                        <div class="info-box mb-3 bg-danger">
                                            <span class="info-box-icon"><img src="dist/img/2.png" alt="no"></img></span>

                                            <div class="info-box-content">
                                                <span class="info-box-text">New deaths</span>
                                                <span class="info-box-number">{this.state.newDeaths}</span>
                                            </div>
                                            {/* /.info-box-content */}
                                        </div>
                                        {/* /.info-box */}
                                        <div class="info-box mb-3 bg-success">
                                            <span class="info-box-icon"><img src="dist/img/3.png" alt="no"></img></span>

                                            <div class="info-box-content">
                                                <span class="info-box-text">New recovered</span>
                                                <span class="info-box-number">{this.state.newRecovered}</span>
                                            </div>
                                            {/* /.info-box-content */}
                                        </div>
                                        {/* /.info-box */}

                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </>
        )
    }
}

export default withRouter(IndiaDashboard);