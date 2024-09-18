import { useState } from "react";

const Services = () => {
  useState([
    {
      id: "",
      title: "",
      description: "",
      actionButton: {
        title: "",
        link: "",
      },
    },
  ]);
  return (
    <>
      <div className="main-container py-14">
        <h1 className="text-5xl font-bold text-center underline">
          My Services
        </h1>
        <div className="services-container space-x-5 px-10 flex mt-12">
          <div className=" cursor-pointer hover:bg-gray-100 bg-slate-100 p-5 text-center shadow-lg rounded-xl   service1 space-y-4">
            <i className=" text-5xl fa-brands fa-aws"></i>
            <h1 className="text-4xl">Aws Development</h1>
            <p>
            I’m  a certified AWS Cloud Practitioner offering services in cloud infrastructure setup using EC2, VPC, and EBS, serverless applications with AWS Lambda, database management with RDS, and storage solutions with S3.
            </p>
            <button className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg">
              Check
            </button>
          </div>
          <div className=" cursor-pointer hover:bg-gray-100 space-y-3  bg-slate-100 p-5 text-center shadow-lg rounded-xl">
            <i className=" text-5xl fa-solid fa-mobile"></i>
            <h1 className="text-4xl">Frontend Development</h1>
            <p>
            frontend developer skilled in JavaScript, React, and Tailwind CSS. I specialize in building responsive, user-friendly interfaces that enhance user experience. With a focus on performance and design, I aim to deliver visually appealing applications tailored to your needs. Let’s connect!


            </p>
            <button className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg">
              Check
            </button>
          </div>
          <div className=" cursor-pointer hover:bg-gray-100 space-y-3 bg-slate-100 p-5 text-center shadow-lg rounded-xl">
            <i className=" text-5xl fa-solid fa-server"></i>
            <h1 className="text-4xl">Backend Development</h1>
            <p>
            a backend developer proficient in Java, PHP, and Node.js with Express. I specialize in building robust APIs, implementing server-side logic, and ensuring seamless database interactions. With a focus on performance and scalability, I aim to create efficient backend solutions that drive business success. Let’s connect!
            </p>
            <button className="px-3 py-2 bg-orange-500 text-2xl rounded-full shadow-lg">
              Check
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;