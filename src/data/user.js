const INFO = {
	main: {
		title: "Web Portfolio - Drake Hager",
		name: "Drake Hager",
		email: "hagerdrake@gmail.com",
		logo:  process.env.PUBLIC_URL + "/Logo-Selfie.png",
	},

	socials: {
		twitter: "",
		github: "https://github.com/Drake-Hager",
		linkedin: "https://linkedin.com/in/drake-hager-0b1102352",
		instagram: "",
		stackoverflow: "",
		facebook: "",
	},

	homepage: {
		title: "My name is Drake Hager, I'm a Full-stack web and mobile app developer.",
		description:
			"I am a backend developer with expertise in Node.js. I have experience in building scalable, secure and reliable web applications using various frameworks and technologies. I enjoy solving complex problems and learning new skills. I am passionate about creating high-quality code that follows best practices and industry standards. I am always looking for new challenges and opportunities to grow as a developer.",
	},

	about: {
		title: "My name is Drake Hager, a very focused web developer who wants to do something big with his skills.",
		description:
			"I've worked on a variety of projects over the years and I'm proud of the progress I've made. Many of these projects are open-source and available for others to explore and contribute to. If you're interested in any of the projects I've worked on, please feel free to check out the code and suggest any improvements or enhancements you might have in mind. Collaborating with others is a great way to learn and grow, and I'm always open to new ideas and feedback.",
	},

	articles: {
		title: "I'm passionate about pushing the boundaries of what's possible and inspiring the next generation of innovators.",
		description:
			"Chronological collection of my long-form thoughts on programming, leadership, product design, and more.",
	},

	projects: [
		{
			title: "One Piece CRUD Wanted Board",
			description:
				"A React CRUD app that simulates a pirate bounty board where you can add or remove posters",
			logo: process.env.PUBLIC_URL + "/React-logo.jpg",
			linkText: "View Project",
			link: "https://drake-hager.github.io/react-project/",
			linkPhoto: process.env.PUBLIC_URL +  "/OnePiece.png",
		},

		{
			title: "C# Card Search and Gameplay application",
			description:
				"Simply click the link, extract the file, and open Final-Mockup.exe to locate the app. This is an C# application for searching, adding, and reading either MTG, Yu-gi-oh, or Pokemon cards.",
			logo: process.env.PUBLIC_URL + "/CSharp-logo.jpg",
			linkText: "View Project",
			link:  process.env.PUBLIC_URL + "/Final/CardFinal.zip",
			linkPhoto: process.env.PUBLIC_URL + "/CardFinal-SS.png",
		},

	//	{
		//	title: "Project 3",
		//	description:
		//		"Lorem ipsum dolor sit amet. Et incidunt voluptatem ex tempore repellendus qui dicta nemo sit deleniti minima.",
	//		logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png",
		//	linkText: "View Project",
	//		link: "https://github.com",
	//	},
	],
};

export default INFO;
