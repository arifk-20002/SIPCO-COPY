import React from 'react'

export default function Faq() {
  return (
    <div>
      <section id="ft-faq-why-choose-us" className="ft-faq-why-choose-us-section">
        <div className="container ">
          <div className="ft-faq-why-choose-content">
            <div className="row">
              <div className="col-lg-6">
                <div className="ft-faq-content">
                  <div className="ft-section-title-2 headline pera-content text-start">
                    <span className="sub-title">Frequently Asked Questions</span>
                    <h2 className=''>Have Any Question?</h2>
                  </div>
                  <div className="accordion text-start" id="accordionExample">
                    <div className="accordion-item headline pera-content">
                      <h2 className="accordion-hear" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          1. Do I need to pay a Registration Fee/Subscription Fee?
                        </button>
                      </h2>
                      <div id="collapseOne" className="accordion-collapse collapse show text-start" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          No, there is no registration fee or any other monthly subscription charges.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item headline pera-content">
                      <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          2. What happens if my shipment is lost or damaged in transit?
                        </button>
                      </h2>
                      <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          We assure you that all shipments in our network will reach you untampered and in the same condition as handed over to us.There is no chance of losing any shipments while working on it. we are best to give our end to end support to the client at all circumstances.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item headline pera-content">
                      <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          3. What is the mode of payment for shipping charges?
                        </button>
                      </h2>
                      <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          The payment mode is prepaid through SAFE BANKING PROCEDURE NEFT, RTGS, etc. It is a safe and secure way to pay for your shipments.
                        </div>
                      </div>
                    </div>
                    {/* <div className="accordion-item headline pera-content">
									<h2 className="accordion-header" id="headingFour">
										<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
											How can I Track My Shipments?
										</button>
									</h2>
									<div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida Risus commodo viverra. 
										</div>
									</div>
								</div> */}
                  </div>	
                </div>
              </div>
              <div className="col-lg-6">
                <div className="ft-why-choose-content-2">
                  <div className="ft-section-title-2 headline pera-content wow fadeInUp text-start" data-wow-delay="0ms" data-wow-duration="1500ms" style={{visibility: 'visible', animationDuration: '1500ms', animationDelay: '0ms', animationName: 'fadeInUp'}}>
                    <span className="sub-title">Why Choose Us?</span>
                    <h2>Why Do You Like SIPCO?</h2>
                  </div>
                  <div className="ft-why-choose-feature-wrapper-2">
                    <div className="row">
                      <div className="col-lg-6 wow fadeInUp text-start" data-wow-delay="200ms" data-wow-duration="1500ms" style={{visibility: 'visible', animationDuration: '1500ms', animationDelay: '200ms', animationName: 'fadeInUp'}}>
                        <div className="ft-why-choose-feature-list-item-2">
                          <div className="ft-why-choose-feature-icon">
                            <i className="flaticon-logistics" />
                          </div>
                          <div className="ft-why-choose-feature-text headline pera-content">
                            <h3>Safe Packing</h3>
                            {/* <p>Do eiusmod tempor incididunt ut labore et dolore aliqua.
												</p> */}
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 wow fadeInUp text-start" data-wow-delay="400ms" data-wow-duration="1500ms" style={{visibility: 'visible', animationDuration: '1500ms', animationDelay: '400ms', animationName: 'fadeInUp'}}>
                        <div className="ft-why-choose-feature-list-item-2">
                          <div className="ft-why-choose-feature-icon">
                            <i className="flaticon-delivery-truck" />
                          </div>
                          <div className="ft-why-choose-feature-text headline pera-content">
                            <h3>Right Time Delivery</h3>
                            {/* <p>Do eiusmod tempor incididunt ut labore et dolore aliqua.
												</p> */}
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 wow fadeInUp text-start" data-wow-delay="600ms" data-wow-duration="1500ms" style={{visibility: 'visible', animationDuration: '1500ms', animationDelay: '600ms', animationName: 'fadeInUp'}}>
                        <div className="ft-why-choose-feature-list-item-2">
                          <div className="ft-why-choose-feature-icon">
                            <i className="flaticon-boat" />
                          </div>
                          <div className="ft-why-choose-feature-text headline pera-content">
                            <h3>Ship everywhere</h3>
                            {/* <p>Do eiusmod tempor incididunt ut labore et dolore aliqua.
												</p> */}
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 wow fadeInUp text-start" data-wow-delay="800ms" data-wow-duration="1500ms" style={{visibility: 'visible', animationDuration: '1500ms', animationDelay: '800ms', animationName: 'fadeInUp'}}>
                        <div className="ft-why-choose-feature-list-item-2">
                          <div className="ft-why-choose-feature-icon">
                            <i className="flaticon-free-shipping" />
                          </div>
                          <div className="ft-why-choose-feature-text headline pera-content">
                            <h3>Fastest Shipping</h3>
                            {/* <p>Do eiusmod tempor incididunt ut labore et dolore aliqua.
												</p> */}
                          </div>
                        </div>
                      </div>
                    </div>
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
