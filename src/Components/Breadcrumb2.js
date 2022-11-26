import React from 'react'

export default function Breadcrumb2() {
  return (
    <div>
      <section id="ft-breadcrumb" className="ft-breadcrumb-section position-relative" data-background="assets/img/bg/bread-bg.jpg">
		<span className="background_overlay"></span>
		<span className="design-shape position-absolute"><img src="assets/img/shape/tmd-sh.png" alt=""/></span>
		<div className="container">
			<div className="ft-breadcrumb-content headline text-center position-relative">
				<h2>Contact</h2>
				<div className="ft-breadcrumb-list ul-li">
					<ul>
						<li><a href="/">Home</a></li>
						<li>Contact</li>
					</ul>
				</div>
			</div>
		</div>
	</section>	
    </div>
  )
}
