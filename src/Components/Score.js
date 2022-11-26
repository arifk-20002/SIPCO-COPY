import React from 'react'

export default function Score() {
  return (
    <div>
      <section id="ft-funfact" className="ft-funfact-section">
		<div className="container">
			<div className="ft-funfact-content">
				<div className="row">
					<div className="col-lg-4 col-md-6">
						<div className="ft-funfact-innerbox text-center">
							<div className="ft-funfact-icon">
								<i className="fal fa-clipboard-list-check"></i>
							</div>
							<div className="ft-funfact-text headline pera-content">
								<h3><span className="counter">4500</span></h3>
								<p>Project Completed</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div className="ft-funfact-innerbox text-center">
							<div className="ft-funfact-icon">
								<i className="fal fa-users"></i>
							</div>
							<div className="ft-funfact-text headline pera-content">
								<h3><span className="counter">54</span>+</h3>
								<p>Active Members</p>
							</div>
						</div>
					</div>
					{/* <!-- <div className="col-lg-4 col-md-6">
						<div className="ft-funfact-innerbox text-center">
							<div className="ft-funfact-icon">
								<i className="fas fa-trophy-alt"></i>
							</div>
							<div className="ft-funfact-text headline pera-content">
								<h3><span className="counter">14</span>+</h3>
								<p>Award Winning</p>
							</div>
						</div>
					</div> --> */}
					<div className="col-lg-4 col-md-6">
						<div className="ft-funfact-innerbox text-center">
							<div className="ft-funfact-icon">
								<i className="fal fa-medal"></i>
							</div>
							<div className="ft-funfact-text headline pera-content">
								<h3><span className="counter">100</span>%</h3>
								<p>Satisfaction Rate</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
    </div>
  )
}
