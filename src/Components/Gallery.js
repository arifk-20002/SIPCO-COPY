import React from 'react';

export default function Gallery() {
  return (
    <div>
     <section id="ft-breadcrumb" className="ft-breadcrumb-section position-relative" data-background="assets/img/bg/bread-bg.jpg">
		<span className="background_overlay"></span>
		<span className="design-shape position-absolute"><img src="assets/img/shape/tmd-sh.png" alt=""/></span>
		<div className="container">
			<div className="ft-breadcrumb-content headline text-center position-relative">
				<h2>Gallery</h2>
				<div className="ft-breadcrumb-list ul-li">
					<ul>
						<li><a to="/">Home</a></li>
						<li>Gallery</li>
					</ul>
				</div>
			</div>
		</div>
	</section>	
   <section id="ft-contact-page" className="ft-contact-page-section page-padding">
        <div className="container">
          <div className="ft-contact-page-content">
            <div className="row">
              <section className="mbr-gallery mbr-slider-carousel cid-qBK2ZYNhQk" id="gallery2-6s" data-rv-view={1955}>
                <div className="container">
                  <div>
                    {/* Filter */}
                    {/* <div className="mbr-gallery-filter container gallery-filter-active">
         <ul buttons="0">
            <li className="mbr-gallery-filter-all"><a className="btn btn-md btn-primary-outline active display-4" href="">All</a></li>
            <li><a className="btn btn-md btn-primary-outline display-4" href="">Beautiful</a></li>
            <li><a className="btn btn-md btn-primary-outline display-4" href="">Creative</a></li>
            <li><a className="btn btn-md btn-primary-outline display-4" href="">Cool</a></li>
            <li><a className="btn btn-md btn-primary-outline display-4" href="">Awesome</a></li>
         </ul>
      </div> */}
                    {/* Gallery */}
                    <div className="mbr-gallery-row" style={{position: 'relative', height: '391.124px'}}>
                      <div className="mbr-gallery-layout-default">
                        <div>
                          <div>
                            <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Beautiful" style={{position: 'absolute', left: '0%', top: '0px'}}>
                              <div href="#lb-gallery2-6s" data-slide-to={0} data-toggle="modal"><img src="assets/img/service/ser4.3.jpg" alt="" /><span className="icon-focus" /></div>
                            </div>
                            <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Beautiful" style={{position: 'absolute', left: '24.955%', top: '0px'}}>
                              <div href="#lb-gallery2-6s" data-slide-to={1} data-toggle="modal"><img src="assets/img/service/ser4.4.jpg" alt="" /><span className="icon-focus" /></div>
                            </div>
                            <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Creative" style={{position: 'absolute', left: '50%', top: '0px'}}>
                              <div href="#lb-gallery2-6s" data-slide-to={2} data-toggle="modal"><img src="assets/img/service/ser4.2.jpg" alt="" /><span className="icon-focus" /></div>
                            </div>
                            <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Creative" style={{position: 'absolute', left: '74.955%', top: '0px'}}>
                              <div href="#lb-gallery2-6s" data-slide-to={3} data-toggle="modal"><img src="assets/img/service/ser4.jpg" alt="" /><span className="icon-focus" /></div>
                            </div>
                            <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Cool" style={{position: 'absolute', left: '74.955%', top: '195px'}}>
                              <div href="#lb-gallery2-6s" data-slide-to={4} data-toggle="modal"><img src="assets/img/service/ser4.6.jpg" alt="" /><span className="icon-focus" /></div>
                            </div>
                            <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Awesome" style={{position: 'absolute', left: '0%', top: '195px'}}>
                              <div href="#lb-gallery2-6s" data-slide-to={5} data-toggle="modal"><img src="assets/img/service/ser4.8.jpg" alt="" /><span className="icon-focus" /></div>
                            </div>
                            <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Cool" style={{position: 'absolute', left: '24.955%', top: '195px'}}>
                              <div href="#lb-gallery2-6s" data-slide-to={6} data-toggle="modal"><img src="assets/img/service/ser6.1.jpg" alt="" /><span className="icon-focus" /></div>
                            </div>
                            <div className="mbr-gallery-item mbr-gallery-item--p2" data-video-url="false" data-tags="Cool" style={{position: 'absolute', left: '50%', top: '195px'}}>
                              <div href="#lb-gallery2-6s" data-slide-to={7} data-toggle="modal"><img src="assets/img/service/ser4.7.jpg" alt="" /><span className="icon-focus" /></div>
                            </div>
                          </div>
                        </div>
                        <div className="clearfix" />
                      </div>
                    </div>
                    {/* Lightbox */}
                    <div data-app-prevent-settings className="mbr-slider modal fade carousel slide" tabIndex={-1} data-keyboard="true" data-interval="false" id="lb-gallery2-6s" style={{display: 'none'}} aria-hidden="true">
                      <div className="modal-dialog" style={{width: '406px', top: '10px'}}>
                        <div className="modal-content">
                          <div className="modal-body">
                            <div className="carousel-inner">
                              <div className="carousel-item active"><img src="assets/img/service/ser4.3.jpg" alt="" /></div>
                              <div className="carousel-item "><img src="assets/img/service/ser4.4.jpg" alt="" /></div>
                              <div className="carousel-item"><img src="assets/img/service/ser4.2.jpg" alt="" /></div>
                              <div className="carousel-item"><img src="assets/img/service/ser4.jpg" alt="" /></div>
                              <div className="carousel-item"><img src="assets/img/service/ser4.6.jpg" alt="" /></div>
                              <div className="carousel-item"><img src="assets/img/service/ser4.5.jpg" alt="" /></div>
                              <div className="carousel-item"><img src="assets/img/service/ser4.8.jpg" alt="" /></div>
                              <div className="carousel-item"><img src="assets/img/service/ser6.1.jpg" alt="" /></div>
                              <div className="carousel-item"><img src="assets/img/service/ser4.7.jpg" alt="" /></div>
                            </div>
                            <a className="carousel-control carousel-control-prev" role="button" data-slide="prev" href="#lb-gallery2-6s"><span className="mbri-left mbr-iconfont" aria-hidden="true" /><span className="sr-only">Previous</span></a><a className="carousel-control carousel-control-next" role="button" data-slide="next" href="#lb-gallery2-6s"><span className="mbri-right mbr-iconfont" aria-hidden="true" /><span className="sr-only">Next</span></a><a className="close" href="#" role="button" data-dismiss="modal"><span className="sr-only">Close</span></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>	
      
    </div>
     
  )
}
