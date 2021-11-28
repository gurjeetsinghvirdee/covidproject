import React from 'react'
import { Link, withRouter } from 'react-router-dom'


const Header = () => {
    return (
        <div class="wrapper" >
            {/* Navbar */}
            <nav class="main-header navbar navbar-expand navbar-dark">
                {/* Left navbar links */}
                <ul class="navbar-nav">
                    <li class="nav-item d-none d-sm-inline-block">
                        <Link to="/covidproject/"><a href="#" class="nav-link">Home</a></Link>
                    </li>
                </ul>

                {/* Right navbar links */}
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-widget="fullscreen" href="#" role="button">
                            <i class="fas fa-expand-arrows-alt"></i>
                        </a>
                    </li>
                </ul>
            </nav>
            {/* /.navbar */}



            {/* Main Footer */}
            <footer class="main-footer">
                <div class="float-right d-block">
                    <strong>Copyright &copy; 2020-2021 <a href="https://nidhipal09.github.io/MyWebsite/">Nidhi pal</a>.</strong>
                </div>
            </footer>

        </div>
    );
}

export default withRouter(Header);