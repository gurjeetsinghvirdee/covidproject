import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div class="wrapper">
            {/* Main Sidebar Container */}
            <aside class="main-sidebar sidebar-dark-primary elevation-4">
                <h3><span class="brand-text font-weight">Welcome</span></h3>

                {/* Sidebar */}
                <div class="sidebar">

                    {/* Sidebar Menu */}
                    <nav class="mt-2">
                        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            {/* Add icons to the links using the .nav-icon class
                             with font-awesome or any other icon font library */}
                            <li class="nav-item menu-open">
                                <a href="#" class="nav-link active">
                                    <i class="nav-icon"><img src="dist/img/4.ico"></img></i>
                                    <p>
                                        World cases
                                        <i class="right fas fa-angle-left"></i>
                                    </p>
                                </a>
                                <ul class="nav nav-treeview">
                                    <li class="nav-item">
                                        <div class="nav-link">
                                            <i class="fa fa-circle nav-icon"></i>
                                            <Link to="/covidproject/"><p>Dashboard</p></Link>
                                        </div>
                                    </li>
                                    <li class="nav-item">

                                    <a href="#" class="nav-link">
                                            <i class="fa fa-circle nav-icon"></i>
                                            <Link to="/covidproject/CountriesTable"><p>Countries data</p></Link>
                                        </a>

                                    </li>

                                </ul>
                            </li>

                            <li class="nav-item">
                                <a href="#" class="nav-link">
                                    <i class="nav-icon"><img src="dist/img/9.ico"></img></i>
                                    <p>
                                        India cases
                                        <i class="fas fa-angle-left right"></i>

                                    </p>
                                </a>
                                <ul class="nav nav-treeview">
                                    <li class="nav-item">
                                    <a href="#" class="nav-link">
                                            <i class="fa fa-circle nav-icon"></i>
                                            <Link to="/covidproject/IndiaDashboard"><p>Dashboard</p></Link>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                    <a href="#" class="nav-link">
                                            <i class="fa fa-circle nav-icon"></i>
                                            <Link to="/covidproject/StatesTable"><p>India data</p></Link>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                    <a href="#" class="nav-link">
                                            <i class="fa fa-circle nav-icon"></i>
                                            <Link to="/covidproject/StateDistrictsTable"><p>States data</p></Link>
                                        </a>
                                    </li>

                                </ul>
                            </li>

                            <li class="nav-item">
                                <a href="#" class="nav-link">
                                    <i class="nav-icon"><img src="dist/img/8.ico"></img></i>
                                    <p>
                                    <Link to="/covidproject/Faqs"><p>FAQs</p></Link>

                                    </p>
                                </a>
                            </li>

                        </ul>
                    </nav>
                    {/* /.sidebar-menu */}
                </div>
                {/* /.sidebar */}
            </aside>
        </div>
    );
}

export default withRouter(Sidebar);