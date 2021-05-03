import React from "react";
import Column from "./Column";

import luxury from "../images/icon-luxury.svg";
import sedans from "../images/icon-sedans.svg";
import suvs from "../images/icon-suvs.svg";

const columns = [
	{
		id: 1,
		bgcolor: "hsl(31, 77%, 52%)",
		illustration: sedans,
		title: "SEDANS",
		text:
			"Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the  city or on your next road trip.",
	},
	{
		id: 2,
		bgcolor: "hsl(184, 100%, 22%)",
		illustration: suvs,
		title: "SUVS",
		text:
			"Take an SUV for its spaciousinterior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
	},
	{
		id: 3,
		bgcolor: "hsl(179, 100%, 13%)",
		illustration: luxury,
		title: "LUXURY",
		text:
			"Cruise in the best car brands without the bloated prices. Enjoy the enchanced comfort of a luxury rental and arrive in style.",
	},
];

export default function Columns() {
	return (
		<div className="row">
			{columns.map((column) => (
				<div className="col-lg-4 col-12" key={column.id}>
					<Column
						icon={column.illustration}
						title={column.title}
						text={column.text}
						bgcolor={column.bgcolor}
					/>
				</div>
			))}
		</div>
	);
}
