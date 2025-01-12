import React from "react";
import achievements from '../assets/data/achievements.json'
export const Achievements = () => {
    return <>
        <div className="block h-auto w-[100%] md:pt-[20px] pl-[20px] md:pl-[40px] ">
            <div className="text-white font-customFont text-[20px] md:text-[50px]">
                <span className="cursor-default">Achievements</span>
            </div>
            <div className="ineline-flex">
                {
                    achievements.map((achievement) => {
                        return <div className="inline-flex">
                            <div className="h-auto w-auto mt-[70px] md:mt-[20px] md:ml-[50px]">
                                <img src={achievement.images} alt="" className="w-[350px] h-[100px] md:w-[400px] md:h-[200px]"/>
                            </div>
                            <div className="text-white font-customFont ml-[40px] mt-[70px] cursor-default">
                                <div className="h-[auto] pt-[10px] text-[10px] md:text-[20px]"><span>Award: {achievement.award}</span></div>
                                <div className="h-[auto] pt-[10px] text-[10px] md:text-[20px]"><span>Description: {achievement.desc}</span></div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    </>
}