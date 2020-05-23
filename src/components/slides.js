import React, { useState, useEffect } from 'react';
import './layout.css';
import uberClone from '../images/portifolio/uber.gif';

const Slides = () => {
	const [slideIndex, setSlideIndex] = useState(0);

	const slides = [{
		name: "Courier App",
		image: uberClone,
		description: "Courier solution to facilitate customers delivery schedule with a Uber-like interface"
	}];

	useEffect(() => {
		//showSlides(slideIndex);
	}, []);


	const plusSlides = (n) => {
		let index = slideIndex + n;
		if (index > slides.length - 1) {
			index = 0;
		}

		if (index < 0) {
			index = slides.length -1;
		}
		setSlideIndex(index);
	}


	const currentSlide = (n) => {
		setSlideIndex(n);
	}

	return (
		<div className="portifolio">
			<div className="title">Portfolio</div>
			<div className="slideshow-container">

				{slides &&
					<div key={slideIndex} className="mySlides fade">
						<div className="numbertext">{slideIndex + 1} / {slides.length}</div>
						<div className="product">
							<img src={slides[slideIndex].image} style={{ width: '30%' }} />
							<div className="description">
								<h1>{slides[slideIndex].name}</h1>
								{slides[slideIndex].description}
							</div>
						</div>

						<div className="text">{slides[slideIndex].name}</div>
					</div>

				}

				<a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
				<a className="next" onClick={() => plusSlides(1)}>&#10095;</a>

			</div>
			<br />

			<div style={{ textAlign: 'center' }}>
				{slides &&
					slides.map((slide, i) =>
						<span key={i} className={`dot ${i === slideIndex ? 'active' : ''}`} onClick={() => currentSlide(i)}></span>
					)
				}
			</div>

		</div>
	);
};

export default Slides;