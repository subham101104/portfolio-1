import React from "react";
import Typewriter from "typewriter-effect";
export const Introduction = () => {
    return (
        <>
            <div className="text-white p-2 w-[70%] h-[350px] absolute top-[5%] md:top-[15%] left-[10%]  block">
                <div className="flex items-center h-[100px] text-[20px] md:text-[50px] relative">
                    <span className="pt-[20px] leading-none font-customFont cursor-default">
                        Namaste! We are
                    </span>
                    <div className="text-customGreen cursor-default font-customFont absolute ml-[100px] md:ml-[440px] w-[250px] md:w-[580px] pt-[50px] md:pt-[22px] leading-none text-nowrap">
                        <Typewriter
                            options={{
                                loop: true,
                                autoStart: true,
                                delay: 75,
                            }}
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString(" Software Developers...")
                                    .pauseFor(2000)
                                    .deleteAll()
                                    .typeString(" Full Stack Developers...")
                                    .pauseFor(2000)
                                    .deleteAll()
                                    .typeString(" Tech Enthusiasts...")
                                    .pauseFor(2000)
                                    .start();
                            }}
                        />
                    </div>
                </div>
                <div className="w-[350px] md:w-[600px] lg:w-[800px] mt-[30px]">
                    <span className="text-white font-customFont text-[15px] md:text-[20px] cursor-default">
                        We are a dynamic team of three passionate developers specializing in
                        building innovative software solutions, cutting-edge websites, and
                        intelligent AI tools. Our combined expertise empowers us to craft
                        customized solutions for businesses, firms, and individuals, driving
                        efficiency and growth. With a strong foundation in technology and
                        creativity, we've proudly secured 4 hackathon wins demonstrating our
                        ability to solve real-world problems with innovative solutions. From
                        intuitive business tools to scalable web applications and advanced
                        AI systems, we are dedicated to turning ideas into powerful digital
                        products. Let’s build the future, together.
                    </span><br />
                    <span className="text-white font-customFont text-[15px] md:text-[20px] cursor-default">
                        Check out projects:
                        <a href="https://virtual-tour-seven.vercel.app/" target="_blank">  Project 1,</a>
                        <a href="https://cvmu.edu.in/ddcet" target="_blank">  Project 2</a>
                    </span>
                </div>
            </div>
        </>
    );
};
