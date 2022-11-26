import React from 'react';
import {Link} from 'react-router-dom';

export default function Header() {
  return (
    <div>
       
       <header id="ft-header" className="ft-header-section header-style-two">
		<div className="ft-header-top">
			<div className="container">
				<div className="ft-header-top-content d-flex justify-content-between align-items-center">
					<div className="ft-header-top-cta ul-li">
						<ul>
							<li><i className="fal fa-envelope"></i>info@sipcoindia.com</li>
							<li><i className="fal fa-map-marker-alt"></i>16/A, NERUL, NAVI MUMBAI 400706</li>
						</ul>
					</div>
					<div className="ft-header-cta-info d-flex">
						<div className="ft-header-cta-icon d-flex justify-content-center align-items-center">
							<i className="flaticon-call"></i>
						</div>
						<div className="ft-header-cta-text headline pera-content">
							<p>Get In Touch At</p>
							<h3>+91 9867 233 487</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="ft-header-main-menu-wrapper">
			<div className="container">
				<div className="ft-header-main-menu-area position-relative">
					<div className="ft-header-main-menu d-flex align-items-center justify-content-between position-relative">
						<div className="ft-site-logo-area">
							<div className="ft-site-logo position-relative">
								<a href="index.html"><img src="assets/img/logo/logo3.png" alt=""/></a>
							</div>
						</div>
						<div className="ft-main-navigation-area">
							<nav className="ft-main-navigation clearfix ul-li">
								<ul id="ft-main-nav" className="nav navbar-nav clearfix">
									<li className="dropdown">
										<Link to="/">Home</Link>
										<ul className="dropdown-menu clearfix">
											
										</ul>
									</li>
									<li><Link to="/about">About Us</Link></li>
									<li className="dropdown">
										<Link to="/">Service</Link>
										<ul className="dropdown-menu clearfix">
											{/* <!-- <li><a href="service.html">Service Page </a></li>
											<li><a href="service-single.html">Service Details</a></li> --> */}
										</ul>
									</li>
									<li><Link to="/gallery">Gallery</Link></li>
									<li className="dropdown">
										<Link to="/contact">Contact</Link>
										<ul className="dropdown-menu clearfix">
										</ul>
									</li>
								
								</ul>
							</nav>
						</div>
						<div className="ft-header-cta-btn">
							<a className="d-flex justify-content-center align-items-center" href="/">Get Free Quote</a>
						</div>
					</div>
					<div className="mobile_menu position-relative">
						<div className="mobile_menu_button open_mobile_menu">
							<i className="fal fa-bars"></i>
						</div>
						<div className="mobile_menu_wrap">
							<div className="mobile_menu_overlay open_mobile_menu"></div>
							<div className="mobile_menu_content">
								<div className="mobile_menu_close open_mobile_menu">
									<i className="fal fa-times"></i>
								</div>
								<div className="m-brand-logo">
									<a href="index.html"><img src="assets/img/logo/logo4.png" alt=""/></a>
								</div>
								<nav className="mobile-main-navigation  clearfix ul-li">
									<ul id="m-main-nav" className="navbar-nav text-capitalize clearfix">
										<li>
											<Link to="/">Home</Link>
											
										</li>
										<li><Link to="/about">About</Link></li>
										<li className="dropdown">
											<Link to="/">Service</Link>
											
										</li>
										<li>
											<Link to="/gallery">Gallery</Link>
											
										</li>
										<li>
											<Link to="/contact">Contact Us</Link>
											
										</li>
										
									</ul>
								</nav>
							</div>
						</div>
						
					</div>
				</div>
			</div>
		</div>
	</header>
	

	
	
    
   
    </div>
  )
}
