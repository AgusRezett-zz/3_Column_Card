import React from "react";
import PropTypes from "prop-types";

export default function Column({ icon, title, text, bgcolor }) {
	return (
		<div className="card rounded-0 border border-0 " style={{ backgroundColor: bgcolor }}>
			<div className="card-body">
				<img src={icon} className="card-img-top" alt="" />
				<h5 className="card-title">{title}</h5>
				<p className="card-text">{text}</p>
				<a href="#!" className="btn btn-outline-light border-2">
					Learn More
				</a>
			</div>
		</div>
	);
}

Column.propTypes = {
	icon: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
};
