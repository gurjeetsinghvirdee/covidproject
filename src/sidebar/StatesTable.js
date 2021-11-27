import React from 'react'

import Header from "../header/Header";
import Sidebar from "./Sidebar";

import IndiaStates from '../helper/IndiaStates'

import "../css/App.css";



export default class StatesTable extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        states: [],
        date: "",
        time: "",
        refresh: false
    }


    RefreshData() {
        this.setState({ refresh: true })
    }

    componentDidMount() {
        this.setState({ states: IndiaStates().statewise })
        this.setState({ date: (IndiaStates().statewise[0].lastupdatedtime).split(" ")[0] })
        this.setState({ time: (IndiaStates().statewise[0].lastupdatedtime).split(" ")[1] })

    }



    render() {
        return (
            <>
                <Header />
                <Sidebar />
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
                            <div class="col-12 col-sm-4 col-md-2">
                                <button type="button" class="btn btn-outline-primary" onClick={() => this.RefreshData()}>Refresh data</button>
                            </div>

                        </div>
                        {/* /.row */}
                    </div>
                    {/* /.container-fluid */}
                </div>

                <div class="wrapper" >
                    <div class="content-wrapper " id="mainContent">
                        <section class="content" >
                            <div class="container-fluid">

                                <div class="row">
                                    <div class="col-12">
                                        <div class="card">
                                            <div class="card-header">
                                                <h3 class="card-title">States data</h3>


                                            </div>
                                            {/*  .card-header */}
                                            <div class="card-body table-responsive p-0">
                                                <table class="table table-hover text-nowrap">
                                                    <thead>
                                                        <tr>
                                                            <th>State</th>
                                                            <th>Total confirmed</th>
                                                            <th>Total deaths</th>
                                                            <th>Total recovered</th>
                                                        </tr>
                                                        {
                                                            this.state.states ?
                                                                this.state.states.map((stateData) =>
                                                                    <tr>
                                                                        <td>{stateData.state}</td>
                                                                        <td>{stateData.confirmed}</td>
                                                                        <td>{stateData.deaths}</td>
                                                                        <td>{stateData.recovered}</td>
                                                                    </tr>

                                                                )
                                                                : null
                                                        }
                                                    </thead>
                                                    <tbody>

                                                    </tbody>
                                                </table>
                                            </div>
                                            {/*  .card-body */}
                                        </div>
                                        {/*  .card */}
                                    </div>
                                </div>

                            </div>
                        </section>
                    </div>
                </div>
            </>
        );
    }
}