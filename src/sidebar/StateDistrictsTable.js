import React from "react";
import Header from "../header/Header";
import Sidebar from "./Sidebar";

import StatesAPI from "../helper/StatesAPI";
import IndiaStates from "../helper/IndiaStates";
import Districts from "../helper/Districts";

import "../css/App.css";


class StateDistrictsTable extends React.Component {
    constructor(props) {
        super(props);

    }
    state = {

        totalConfirmed: "",
        totalDeaths: "",
        totalRecovered: "",

        selectedState: "",
        districts: [],
        selectedDistrict: "",
       
        date: "",
        time: "",

        refresh: false
    };

    RefreshData(){
        this.setState({ refresh: true })
    }

    handleChange(e) {
        this.setState({ selectedState: e.target.value });

    }

    getDistricts() {
        this.setState({ districts: StatesAPI()[this.state.selectedState] })
    }
    
    getDistrictData(val){
        this.setState({selectedDistrict: val.dist,
            totalConfirmed: Districts()[this.state.selectedState]["districtData"][val.dist]["confirmed"],
            totalDeaths: Districts()[this.state.selectedState]["districtData"][val.dist]["deceased"],
            totalRecovered: Districts()[this.state.selectedState]["districtData"][val.dist]["recovered"]

        })

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
                                <button type="button" class="btn btn-outline-primary" onClick={() =>this.RefreshData()}>Refresh data</button>
                            </div>

                        </div>
                        {/* /.row */}
                    </div>
                    {/* /.container-fluid */}
                </div>

                <div class="wrapper">
                    <div class="content-wrapper" id="mainContent">
                        <section class="content">
                            <div class="container-fluid">


                                {/* Info boxes */}
                                <div class="row">
                                    <div class="col-12 col-sm-12 col-md-4">
                                        <div class="info-box mb-3">
                                            <span class="info-box-icon bg-info elevation-1"><img src="dist/img/15.png" /></span>
                                            <div class="info-box-content">
                                                <span style={{ fontWeight: "650" }} class="info-box-text">Enter State</span>
                                                <input class="form-control" list="state" onChange={(value) => this.handleChange(value)} />
                                                <datalist id="state" >
                                                    <option>Andaman and Nicobar Islands</option>
                                                    <option>Andhra Pradesh</option>
                                                    <option>Arunachal Pradesh</option>
                                                    <option>Assam</option>
                                                    <option>Bihar</option>
                                                    <option>Chandigarh</option>
                                                    <option>Chhattisgarh</option>
                                                    <option>Delhi</option>
                                                    <option>Goa</option>
                                                    <option>Gujarat</option>
                                                    <option>Himachal Pradesh</option>
                                                    <option>Haryana</option>
                                                    <option>Jharkhand</option>
                                                    <option>Jammu and Kashmir</option>
                                                    <option>Karnataka</option>
                                                    <option>Kerala</option>
                                                    <option>Ladakh</option>
                                                    <option>Lakshadweep</option>
                                                    <option>Maharashtra</option>
                                                    <option>Meghalaya</option>
                                                    <option>Manipur</option>
                                                    <option>Madhya Pradesh</option>
                                                    <option>Mizoram</option>
                                                    <option>Nagaland</option>
                                                    <option>Odisha</option>
                                                    <option>Punjab</option>
                                                    <option>Puducherry</option>
                                                    <option>Rajasthan</option>
                                                    <option>Sikkim</option>
                                                    <option>Telangana</option>
                                                    <option>Tamil Nadu</option>
                                                    <option>Tripura</option>
                                                    <option>Uttar Pradesh</option>
                                                    <option>Uttarakhand</option>
                                                    <option>West Bengal</option>
                                                </datalist>
                                            </div>
                                        </div>
                                        {/* /.info-box */}
                                    </div>

                                    <div class="col-12 col-sm-12 col-md-4">
                                        <div class="info-box mb-3">
                                            <span class="info-box-icon bg-info elevation-1"><img src="dist/img/17.png" /></span>
                                            <div class="info-box-content">
                                                <span style={{ fontWeight: "650" }} class="info-box-text">Click The Button</span>
                                                <button type="button" class="btn btn-block btn-outline-info"
                                                    onClick={() => this.getDistricts()}>Click To Get District</button>
                                            </div>
                                        </div>
                                        {/* /.info-box */}
                                    </div>

                                    <div class="col-12 col-sm-12 col-md-4">
                                        <h2 class="info-box-number">
                                            <span class="right badge badge-secondary">
                                                {this.state.selectedState}
                                            </span>&nbsp;/  &nbsp;
                                            <span class="right badge badge-secondary">
                                                 {this.state.selectedDistrict}
                                            </span>
                                        </h2>
                                    </div>

                                </div>
                                {/* /.row */}

                                <div class="row">
                                    {/* Left col */}
                                    <div class="col-md-8">
                                        {/* MAP & BOX PANE */}
                                        {/* TABLE: LATEST ORDERS */}
                                        <div class="card">
                                            <div class="card-header border-transparent">
                                                <h3 class="card-title">Select District </h3>
                                                <div class="card-tools">
                                                    <button type="button" class="btn btn-tool" data-card-widget="collapse">
                                                        <i class="fas fa-minus"></i>
                                                    </button>
                                                </div>
                                            </div>
                                            {/* /.card-header */}
                                            <div class="card-body p-0">
                                                <div class="table-responsive table-hover">
                                                    <table class="table m-0">
                                                        <tbody>

                                                            {this.state.districts.map(dist => (
                                                                <tr>
                                                                    <td onClick={() => this.getDistrictData({dist})}>{dist}</td>
                                                                    
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                                {/* /.table-responsive */}
                                            </div>
                                            {/* /.card-body */}
                                        </div>
                                        {/* /.card */}
                                    </div>
                                    <div class="col-md-4">
                                        {/* Info Boxes Style 2 */}
                                        <div class="info-box mb-3 bg-info">
                                            <span class="info-box-icon"><img src="dist/img/1.png" alt="no"></img></span>

                                            <div class="info-box-content">
                                                <span class="info-box-text">Total confirmed</span>
                                                <span class="info-box-number">{this.state.totalConfirmed}</span>
                                            </div>
                                            {/* /.info-box-content */}
                                        </div>
                                        {/* /.info-box */}
                                        <div class="info-box mb-3 bg-danger">
                                            <span class="info-box-icon"><img src="dist/img/2.png" alt="no"></img></span>

                                            <div class="info-box-content">
                                                <span class="info-box-text">Total deaths</span>
                                                <span class="info-box-number">{this.state.totalDeaths}</span>
                                            </div>
                                            {/* /.info-box-content */}
                                        </div>
                                        {/* /.info-box */}
                                        <div class="info-box mb-3 bg-success">
                                            <span class="info-box-icon"><img src="dist/img/3.png" alt="no"></img></span>

                                            <div class="info-box-content">
                                                <span class="info-box-text">Total recovered</span>
                                                <span class="info-box-number">{this.state.totalRecovered}</span>
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

export default StateDistrictsTable;