import React from 'react'

import Header from "../header/Header";
import Sidebar from "./Sidebar";

import Countries from '../helper/Countries'

import "../css/App.css";

export default class CountriesTable extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        summary: [],
        date: "",
        time: "",
        refresh: false
    }

    RefreshData() {
        this.setState({ refresh: true })
    }
    componentDidMount() {
        (this.state.refresh) || Countries().then((result) => {
            this.setState({ summary: result.Countries })
            this.setState({ date: (result.Global.Date).split("T")[0] })
            this.setState({ time: (result.Global.Date).split("T")[1].split(".")[0] })

        })

    }
    render() {
        return (
            <>
                <Header />
                <Sidebar />

                <div class="content-header contentHeader " >
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

                <div class="wrapper" >
                    <div class="content-wrapper " id="mainContent">
                        <section class="content" >
                            <div class="container-fluid">

                                <div class="row">
                                    <div class="col-12">
                                        <div class="card">
                                            <div class="card-header">
                                                <h3 class="card-title">Countries data</h3>


                                            </div>
                                            {/*  .card-header */}
                                            <div class="card-body table-responsive p-0">
                                                <table class="table table-hover text-nowrap">
                                                    <thead>
                                                        <tr>
                                                            <th>Country</th>
                                                            <th>Total confirmed</th>
                                                            <th>Total deaths</th>
                                                            <th>New confirmed</th>
                                                            <th>New deaths</th>
                                                        </tr>
                                                        {
                                                            this.state.summary ?
                                                                this.state.summary.map((Country) =>
                                                                    <tr>
                                                                        <td>{Country.Country}</td>
                                                                        <td>{Country.TotalConfirmed}</td>
                                                                        <td>{Country.TotalDeaths}</td>
                                                                        <td>{Country.NewConfirmed}</td>
                                                                        <td>{Country.NewDeaths}</td>
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