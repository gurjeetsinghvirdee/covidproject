import React from "react";
import { Link, withRouter } from 'react-router-dom'
import Header from "../header/Header";
import Sidebar from "./Sidebar";

import Countries from '../helper/Countries'

import "../css/App.css";


class CountriesDashboard extends React.Component {
    constructor(props) {
        super(props);

    }
    state = {
        c1: [], c2:[], c3:[],  

        totalConfirmed: "",
        totalDeaths: "",
        newConfirmed: "",
        newDeaths: "",

        date: [],
        time: "",
        refresh: false

    };

    RefreshData() {
        this.setState({ refresh: true })
    }

    componentDidMount() {
        (this.state.refresh) || Countries().then((result) => {
            this.setState({ CountriesData: result.Countries })
            this.setState({ totalConfirmed: result.Global.TotalConfirmed })
            this.setState({ totalDeaths: result.Global.TotalDeaths })
            this.setState({ newConfirmed: result.Global.NewConfirmed })
            this.setState({ newDeaths: result.Global.NewDeaths })
            this.setState({ date: (result.Global.Date).split("T")[0] })
            this.setState({ time: (result.Global.Date).split("T")[1].split(".")[0] })

            this.setState({c1: result.Countries[8], c2:result.Countries[23], c3:result.Countries[34]})
            console.log(this.state.c1)

        })
    }

    render() {
        return (
            <>
                <Header />
                <Sidebar />

                <div class="wrapper">

                    <div class="content-header contentHeader" >
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

                    <div class="content-wrapper " id="mainContent">
                        <section class="content">
                            <div class="container-fluid">


                                {/* Info boxes */}
                                <div class="row">
                                    <div class="col-12 col-sm-6 col-md-3">
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
                                    <div class="col-12 col-sm-6 col-md-3">
                                        <div class="info-box">
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

                                    <div class="col-12 col-sm-6 col-md-3  ">
                                        <div class="info-box bg-info">
                                            <span class="info-box-icon"><img src="dist/img/1.png" alt="no"></img></span>

                                            <div class="info-box-content">
                                                <span class="info-box-text">New confirmed</span>
                                                <span class="info-box-number">{this.state.newConfirmed}</span>
                                            </div>
                                            {/* /.info-box-content */}
                                        </div>
                                    </div>
                                    {/* /.info-box */}
                                    <div class="col-12 col-sm-6 col-md-3  " >
                                        <div class=" info-box bg-danger">
                                            <span class="info-box-icon"><img src="dist/img/2.png" alt="no"></img></span>

                                            <div class="info-box-content">
                                                <span class="info-box-text">New deaths</span>
                                                <span class="info-box-number">{this.state.newDeaths}</span>
                                            </div>
                                            {/* /.info-box-content */}
                                        </div>
                                    </div>
                                    {/* /.info-box */}


                                    {/* fix for small devices only */}
                                    <div class="clearfix hidden-md-up"></div>

                                </div>
                                {/* /.row */}

                                <div class="row" >
                                    {/* Left col */}
                                    <div class="col-md-12">

                                        {/* TABLE: LATEST ORDERS */}
                                        <div class="card">
                                            <div class="card-header border-transparent">
                                                <h3 class="card-title">Countries data</h3>

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
                                                                <th>Country</th>
                                                                <th>Total confirmed</th>
                                                                <th>Total deaths</th>
                                                                <th>New confirmed</th>
                                                                <th>New deaths</th>
                                                            </tr>
                                                            <tr>
                                                                <td>{this.state.c1.Country}</td>
                                                                <td>{this.state.c1.TotalConfirmed}</td>
                                                                <td>{this.state.c1.TotalDeaths}</td>
                                                                <td>{this.state.c1.NewConfirmed}</td>
                                                                <td>{this.state.c1.NewDeaths}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>{this.state.c2.Country}</td>
                                                                <td>{this.state.c2.TotalConfirmed}</td>
                                                                <td>{this.state.c2.TotalDeaths}</td>
                                                                <td>{this.state.c2.NewConfirmed}</td>
                                                                <td>{this.state.c2.NewDeaths}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>{this.state.c3.Country}</td>
                                                                <td>{this.state.c3.TotalConfirmed}</td>
                                                                <td>{this.state.c3.TotalDeaths}</td>
                                                                <td>{this.state.c3.NewConfirmed}</td>
                                                                <td>{this.state.c3.NewDeaths}</td>
                                                            </tr>
                                                        </thead>
                                                        <tbody>

                                                        </tbody>
                                                    </table>
                                                </div>
                                                {/* /.table-responsive */}
                                            </div>
                                            {/* /.card-body */}
                                            <div class="card-footer clearfix">
                                                <Link to="/CountriesTable"><button class="btn btn-sm btn-secondary float-right">View all countries data</button></Link>
                                            </div>
                                            {/* /.card-footer */}
                                        </div>
                                        {/* /.card */}

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

export default withRouter(CountriesDashboard);