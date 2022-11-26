import React from 'react'

export default function Quote() {
  return (
    <div>
       <section id="ft-contact-page" className="ft-contact-page-section page-padding">
		<div className="container">
			<div className="ft-contact-page-content">
				<div className="row">
					<div className="col-lg-6 text-start">
						<div className="ft-contact-page-text-wrapper">
							<div className="ft-section-title-2 headline pera-content">
								<span className="sub-title">Connect with us </span>
								<h2>
								</h2>
							</div>
							<div className="ft-contact-page-contact-info">
								<div className="ft-contact-cta-items d-flex">
									<div className="ft-contact-cta-icon d-flex align-items-center justify-content-center">
										<i className="fal fa-map-marker-alt"></i>
									</div>
									<div className="ft-contact-cta-text headline pera-content">
										<h3>Office address</h3>
										<p>16/A, NERUL, NAVI MUMBAI 400706.</p>
									</div>
								</div>
								<div className="ft-contact-cta-items d-flex">
									<div className="ft-contact-cta-icon d-flex align-items-center justify-content-center">
										<i className="fas fa-phone-alt"></i>
									</div>
									<div className="ft-contact-cta-text headline pera-content">
										<h3>Telephone number</h3>
										<p>+91 986 723 3487</p>
										
									</div>
								</div>
								<div className="ft-contact-cta-items d-flex">
									<div className="ft-contact-cta-icon d-flex align-items-center justify-content-center">
										<i className="far fa-envelope"></i>
									</div>
									<div className="ft-contact-cta-text headline pera-content">
										<h3>Mail address</h3>
										<p>info@sipcoindia.com</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-6 text-start">
						<div className="ft-contact-page-form-wrapper headline">
							<h3 className="text-center">Get a Quote</h3>
							<form action="https://html.themexriver.com/fastrans/contact.php">
								<div className="row">
									<div className="col-lg-6">
										<input type="text" name="name" placeholder="Your Name"/>
									</div>
									<div className="col-lg-6">
										<input type="email" name="email" placeholder="Your Email"/>
									</div>
									
									<div className="col-lg-12">
										<input type="text" name="number" placeholder="Number"/>
									</div>
									
									
									<div className="col-lg-12">
										<textarea name="message" placeholder="Your Message"></textarea>
									</div>
									<div className="col-lg-12">
										<button> Send Message</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
    </div>
  )
}
