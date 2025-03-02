import React from "react";

function article_1() {
	return {
		date: "Present",
		title: "My Resume",
		description:
			"Here is a PDF document of my resume, feel free to download and look at it.",
		keywords: [
			"Drake Hager",
			"Resume", 
			"Drake Hager Resume",
			"Web Developer",
			"Web Developer Resume"
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<img src={`${process.env.PUBLIC_URL}/Resume-SS.png`} className="randImage" alt="Resume"/>
					<a
						href={process.env.PUBLIC_URL + "/Fixed-Resume.pdf"} target="blank" rel="noopener noreferrer">
					Click here to view
					</a>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "7 May 2023",
		title: "Artificial Intelligence in Healthcare",
		description:
			"AI is transforming the healthcare industry, from improving patient outcomes to streamlining operations. Discover the latest applications of this game-changing technology.",
		style: ``,
		keywords: [
			"Artificial Intelligence in Healthcare",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
