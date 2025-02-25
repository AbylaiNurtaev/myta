import React, { useState, useEffect } from "react";
import { Button } from "../components/Button";

function Step4({ setStep }) {
  console.log("step4");
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    {
      id: 1,
      title: "Флирт и свидания",
      description: "Ходить на свидания и хорошо проводить время",
      emoji: "🔥",
    },
    {
      id: 2,
      title: "Серьеёзные отношения",
      description: "Найти вторую половинку и создать счастливые отношения",
      emoji: "💍",
    },
    {
      id: 3,
      title: "Дружеское общение",
      description:
        "Найти друзей и знакомых, общаться и договариватся о встречах",
      emoji: "✌️",
    },
    {
      id: 4,
      title: "Обовсём и ни о чём",
      description: "Общаться, делиться мыслями и идями без ограничений",
      emoji: "🥂",
    },
  ];

  return (
    <div className="flex flex-col items-center w-[343px] h-[100%] overflow-x-hidden ">
      <h1 className="font-raleway font-semibold mt-6 text-white text-[20px]">
        Расскажите, для чего вы здесь
      </h1>
      <h1 className="font-raleway font-light mt-2 text-white text-center text-[16px]">
        Можно изменить в любой момент
      </h1>
      <div className="grid gric-cols-1 justify-start flex-wrap items-center gap-[16px] mt-[16px]">
        {options.map((option) => (
          <div
            key={option.id}
            onClick={() => setSelectedOption(option.id)}
            className={`w-[343px] h-[89px] rounded-[8px] flex text-white cursor-pointer transition-all 
            ${
              selectedOption === option.id
                ? "bg-[#043939] border-[1.5px] border-[#a1f69e]"
                : "bg-[#022424] border-[1px] border-[#233636]"
            }`}
          >
            <span className="flex items-center justify-center text-[32px] w-[60px] h-[89px] text-center">
              {option.emoji}
            </span>
            <div
              className={`flex items-center justify-center flex-col gap-[4px]`}
            >
              <span className={`w-[270px] text-[18px] font-semibold`}>
                {option.title}
              </span>
              <span className={`w-[268px] text-[14px] font-light`}>
                {option.description}
              </span>
            </div>
          </div>
        ))}
      </div>
      <Button className={"mt-[170px] mb-6"} onclick={() => setStep(5)}>
        Далее
      </Button>
    </div>
  );
}

export default Step4;
