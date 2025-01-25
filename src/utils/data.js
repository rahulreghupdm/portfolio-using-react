import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";
export const projectExperience = [
  {
    name: "Website Design",
    projects: 76,
    icon: HiOutlineDesktopComputer,
    bg: "#286F6C",
  },
  {
    name: "Mobile App Design",
    projects: 63,
    icon: CiMobile1,
    bg: "#EEC048",
  },
  {
    name: "Brand Identity",
    projects: 47,
    icon: MdWorkspacesOutline,
    bg: "#F26440",
  },
];

export const WhatDoIHelp = [
  "I will help you with finging a solution and solve your problem, We use process design to create digital products. Besides that also help their business.",
  "We use process design to create digital products. Besides that also help their business",
];

export const workExp = [
  {
    place: "Neurocode International Pvt Ltd",
    tenure: "Aug 2024 - Present",
    role: "CTO & Project Manager",
    detail:
      "Led the development and management of innovative technology solutions, overseeing multiple teams and projects. Successfully implemented strategies to enhance efficiency, scalability, and product delivery while ensuring alignment with business goals.",
  },
  {
    place: "Notech Tricon Pvt Ltd",
    tenure: "Aug 2022 - Aug 2024",
    role: "App Developer and Project Manager",
    detail:
      "Developed and managed mobile and web applications, ensuring seamless user experiences and robust functionality. Coordinated cross-functional teams, managed project timelines, and delivered high-quality solutions within budget.",
  },

  {
    place: "Avodha",
    tenure: "Jan 2022 - Apr 2022",
    role: "Flutter Developer",
    detail:
      "The starting point of my development journey, where I built cross-platform mobile apps with Flutter, focusing on interactive UIs, state management, and API integration.",
  },
];

export const skills = [
  {
    name: "Flutter",
    post: "UI Toolkit",
    comment:
      "A UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase.",
    img: "./flutter.png",
  },
  {
    name: "SwiftUI",
    post: "Apple UI Framework",
    comment:
      "A declarative framework for building user interfaces across all Apple platforms.",
    img: "./swiftui.png",
  },
  {
    name: "Django",
    post: "Web Framework",
    comment:
      "A high-level Python web framework that encourages rapid development and clean, pragmatic design.",
    img: "./django.png",
  },
  {
    name: "Docker",
    post: "Containerization Tool",
    comment:
      "A platform designed to develop, ship, and run applications inside containers.",
    img: "./docker.png",
  },
  {
    name: "Kubernetes",
    post: "Container Orchestration",
    comment:
      "An open-source system for automating deployment, scaling, and management of containerized applications.",
    img: "./kubernetes.png",
  },
  {
    name: "React/Next.js",
    post: "JavaScript Library",
    comment:
      "A JavaScript library for building user interfaces.",
    img: "./nextjs.jpeg",
  },
  {
    name: "PostgreSQL",
    post: "Database",
    comment:
      "A powerful, open-source object-relational database system.",
    img: "./postgresql.png",
  },
  {
    name: "Python",
    post: "Programming Language",
    comment:
      "A versatile programming language known for its simplicity and wide range of applications.",
    img: "./python.png",
  },
  {
    name: "Linux",
    post: "Operating System",
    comment:
      "An open-source operating system widely used for servers and development environments.",
    img: "./Linux.png",
  },
  {
    name: "CI/CD",
    post: "Automation Pipeline",
    comment:
      "Continuous Integration and Continuous Deployment pipelines for automating software delivery.",
    img: "./jenkins.jpeg",
  },
  {
    name: "RabbitMQ",
    post: "Message Broker",
    comment:
      "A message broker for facilitating communication between different parts of an application.",
    img: "./rabbitmq.png",
  },
  {
    name: "MariaDB",
    post: "Database",
    comment:
      "An open-source relational database system that is highly compatible with MySQL.",
    img: "./mariadb.png",
  },
  {
    name: "Google Cloud Platform (GCP)",
    post: "Cloud Services",
    comment:
      "A suite of cloud computing services for deploying, managing, and scaling applications.",
    img: "./gcp.png",
  },
];



export const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  autoplay: true,    
  touchMove: true,
  useCSS: true,
  autoplaySpeed: 3000, 

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
