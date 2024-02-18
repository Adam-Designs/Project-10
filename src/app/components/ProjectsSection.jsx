"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
	{
		id: 1,
		title: "React Portfolio Website",
		description:
			"One of my Portfolio designs, showcasing About, Projects, very nice background animation. ",
		image: "/images/projects/1.png",
		tag: ["All", "Web"],
		gitUrl: "/",
		previewUrl: "https://adamdesigns.netlify.app",
	},
	{
		id: 2,
		title: "Portfolio Website",
		description: "Yet another Web Design.",
		image: "/images/projects/2.png",
		tag: ["All", "Web"],
		gitUrl: "/",
		previewUrl: "https://project-codeh.netlify.app",
	},
	{
		id: 3,
		title: "Funky Navbar",
		description: "A website that offers Funky navigation.",
		image: "/images/projects/3.png",
		tag: ["All", "Web"],
		gitUrl: "/",
		previewUrl: "https://funkynav.netlify.app",
	},
	{
		id: 4,
		title: "White & Black - Portfolio",
		description: "A Design using White & Black color as it foundation",
		image: "/images/projects/4.png",
		tag: ["All", "Mobile"],
		gitUrl: "/",
		previewUrl: "https://preview.studio.site/live/EXawdvNwWD",
	},
	{
		id: 5,
		title:
			"Another Portfolio Design, I made in Website builder very nice and unique",
		description: "Authentication and CRUD operations",
		image: "/images/projects/5.png",
		tag: ["All", "Web"],
		gitUrl: "/",
		previewUrl: "https://preview.studio.site/live/M3aA5LKoae",
	},
	{
		id: 6,
		title: "ShopDesign I made for a client",
		description: "Project 5 description",
		image: "/images/projects/6.png",
		tag: ["All", "Web"],
		gitUrl: "/",
		previewUrl: "https://preview.studio.site/live/4yqBmgeJOj",
	},
];

const ProjectsSection = () => {
	const [tag, setTag] = useState("All");
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	const handleTagChange = (newTag) => {
		setTag(newTag);
	};

	const filteredProjects = projectsData.filter((project) =>
		project.tag.includes(tag)
	);

	const cardVariants = {
		initial: { y: 50, opacity: 0 },
		animate: { y: 0, opacity: 1 },
	};

	return (
		<section id="projects">
			<h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
				My Projects
			</h2>
			<div className="text-white flex flex-row justify-center items-center gap-2 py-6">
				<ProjectTag
					onClick={handleTagChange}
					name="All"
					isSelected={tag === "All"}
				/>
				<ProjectTag
					onClick={handleTagChange}
					name="Web"
					isSelected={tag === "Web"}
				/>
				<ProjectTag
					onClick={handleTagChange}
					name="Mobile"
					isSelected={tag === "Mobile"}
				/>
			</div>
			<ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
				{filteredProjects.map((project, index) => (
					<motion.li
						key={index}
						variants={cardVariants}
						initial="initial"
						animate={isInView ? "animate" : "initial"}
						transition={{ duration: 0.3, delay: index * 0.4 }}
					>
						<ProjectCard
							key={project.id}
							title={project.title}
							description={project.description}
							imgUrl={project.image}
							gitUrl={project.gitUrl}
							previewUrl={project.previewUrl}
						/>
					</motion.li>
				))}
			</ul>
		</section>
	);
};

export default ProjectsSection;
