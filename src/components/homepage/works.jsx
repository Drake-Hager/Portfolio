import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src={process.env.PUBLIC_URL + "/Ranken-logo.jpg"}
								alt="Ranken"
								className="work-image"
							/>
							<div className="work-title">Ranken Technical College</div>
							<div className="work-subtitle">
								Web Development Student
							</div>
							<div className="work-duration">2023 - Present</div>
						</div>

						<div className="work">
							<img
								src={process.env.PUBLIC_URL + "/Walmart-logo.jpg"}
								alt="Walmart"
								className="work-image"
							/>
							<div className="work-title">Walmart</div>
							<div className="work-subtitle">
								Online Grocery/Customer Service
							</div>
							<div className="work-duration">2021 - Present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
