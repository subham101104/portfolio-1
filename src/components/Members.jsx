import React from "react";
import data from "../assets/data/data.json"
export const Members = () => {
    return <>
        <div className="block w-[100%] h-[200px] md:pt-[20px] lg:pt-[20px] text-white font-customFont">
            <div className="text-[20px] md:text-[50px] lg:text-[50px] w-[250px] h-[80px] font-customFont cursor-default">Members</div>
                <div className=" h-[700px] pt-[20px] block justify-between md:px-[50px]">
                {data.map((member) => {
                    return <div className="inline-flex w-[100%] h-[200px]">
                                {/* ImageSection */}
                                <div className="w-[150px] h-[150px] text-center mt-[35px]">
                                    <img src={member.image} alt="" className="rounded-[50%] w-[80px] h-[80px] md:w-[200px] md:h-[120px] lg:w-[200px] lg:h-[120px]"/>
                                </div>
                                <div className="text-[7px] md:text-[15px] ml-[0px] mt-[23px] md:ml-[60px] md:mt-[7px] font-customFont cursor-default">
                                    <div className="h-[auto] pt-[10px]"><span>Name: {member.name}</span></div>
                                    <div className="h-[auto] pt-[10px]"><span>Role: {member.role}</span></div>
                                    <div className="h-[auto] pt-[10px]"><span>Education: {member.college}</span></div>
                                    <div className="h-[auto] pt-[10px]"><span>Experience: {member.experience}</span></div>  
                                    <div className="h-[auto] pt-[10px]"><span>Email: {member.email}</span></div>
                                </div>
                    </div>
                })}
                </div>
        </div>
    </>
}