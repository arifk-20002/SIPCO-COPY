import React from 'react'

export default function Video() {
  return (
    <div>
      <section id="ft-video" className="ft-video-section">
		<div className="container">
			<div className="ft-video-content position-relative">
				<div className="ft-video-img-play-btn">
					<div className="ft-video-img">
						<img src="assets/img/bg/v-bg.jpg" alt=""/>
					</div>
					<div className="ft-video-play">
						<a className="d-flex justify-content-center align-items-center position-relative video_box" href="https://www.youtube.com/watch?v=C4jjFanHZo8">
							<i className="fas fa-play"></i>
							<span className="video_btn_border border_wrap-1"></span>
							<span className="video_btn_border border_wrap-2"></span>
						</a>
					</div>
				</div>
			</div>
		</div>		
	</section>
    </div>
  )
}
