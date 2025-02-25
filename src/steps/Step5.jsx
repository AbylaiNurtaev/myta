import React, { useState, useEffect } from "react";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";

function Step4({ setStep }) {
  const navigate = useNavigate();
  console.log("step5");
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { id: "Harry Potter", title: "Harry Potter" },
    { id: "Дети 90-x", title: "Дети 90-x" },
    { id: "Хеви-метал", title: "Хеви-метал" },
    { id: "Вечеринки дома", title: "Вечеринки дома" },
    { id: "Джин с тоником", title: "Джин с тоником" },
  ];

  return (
    <div className="flex flex-col items-center w-[343px] h-[100%] overflow-x-hidden ">
      <h1 className="font-raleway font-semibold mt-6 text-white text-[20px]">
        Добавьте ваши интересы
      </h1>
      <h1 className="font-raleway font-light mt-2 text-white text-center text-[16px]">
        Выберите не менее 5 интересов, чтобы поделиться ими с другими
        пользователями
      </h1>
      <div className="flex flex-wrap  gap-[16px] mt-[16px]">
        {options.map((option) => (
          <div
            key={option.id}
            onClick={() => setSelectedOption(option.id)}
            className={`w-[auto] p-3 h-[48px] rounded-[400px] flex justify-center items-center text-[18px] font-light text-white gap-[8px] cursor-pointer transition-all 
            ${
              selectedOption === option.id
                ? "bg-[#043939] border-[1.5px] border-[#a1f69e]"
                : "bg-[#022424] border-[1px] border-[#233636]"
            }`}
          >
            <span>{option.title}</span>
          </div>
        ))}
      </div>
      <Button className={"mt-[170px] mb-6"} onclick={() => navigate("/meet")}>
        Далее
      </Button>
    </div>
  );
}

export default Step4;
