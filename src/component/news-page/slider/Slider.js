import './Slider.css';
import { NavLink } from 'react-router-dom'
import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
	render() {
		const settings = {
			dots: true,
			infinite: true,
			speed: 700,
			slidesToShow: 1,
			slidesToScroll: 1
		};
		return (
			<div className="slider">
				<div className="container">
					<Slider {...settings}>
						<div className="slider__inner">
							<div className="slider__item">
								<div className="slider__item-content">
									<div className="slider__title">
										КОМПЛЕКСНОЕ ЗАКРЫТИЕ ПРЕДПРИЯТИЯ
									</div>
									<div className="slider__text">
										Полное прекращение существования юридического лица с сохранением легальности всей предыдущей деятельности.
 									</div>
									 <NavLink>
									<div className="slider__btn">
											News Post
									</div>
									</NavLink>
								</div>
							</div>
						</div>
						<div className="slider__inner">
							<div className="slider__item">
								<div className="slider__item-content">
									<div className="slider__title">
										КОМПЛЕКСНОЕ ЗАКРЫТИЕ ПРЕДПРИЯТИЯ
									</div>
									<div className="slider__text">
										Полное прекращение существования юридического лица с сохранением легальности всей предыдущей деятельности.
 									</div>
									<div className="slider__btn">

									</div>
								</div>
							</div>
						</div><div className="slider__inner">
							<div className="slider__item">
								<div className="slider__item-content">
									<div className="slider__title">
										КОМПЛЕКСНОЕ ЗАКРЫТИЕ ПРЕДПРИЯТИЯ
									</div>
									<div className="slider__text">
										Полное прекращение существования юридического лица с сохранением легальности всей предыдущей деятельности.
 									</div>
									<div className="slider__btn">

									</div>
								</div>
							</div>
						</div><div className="slider__inner">
							<div className="slider__item">
								<div className="slider__item-content">
									<div className="slider__title">
										КОМПЛЕКСНОЕ ЗАКРЫТИЕ ПРЕДПРИЯТИЯ
									</div>
									<div className="slider__text">
										Полное прекращение существования юридического лица с сохранением легальности всей предыдущей деятельности.
 									</div>
									<div className="slider__btn">

									</div>
								</div>
							</div>
						</div>
						<div className="slider__inner">
							<div className="slider__item">
								<div className="slider__item-content">
									<div className="slider__title">
										КОМПЛЕКСНОЕ ЗАКРЫТИЕ ПРЕДПРИЯТИЯ
									</div>
									<div className="slider__text">
										Полное прекращение существования юридического лица с сохранением легальности всей предыдущей деятельности.
 									</div>
									<div className="slider__btn">

									</div>
								</div>
							</div>
						</div>
					</Slider>
				</div>
			</div>
		);
	}
}