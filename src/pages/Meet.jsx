import React, { useState, useEffect } from "react";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Meet() {
  const [showToast, setShowToast] = useState(false);
  const [showInstruction, setShowInstruction] = useState(true);
  const [animateClass, setAnimateClass] = useState("animate-slideDown");
  const [menuAction, setMenuAction] = useState(3);

  const navigate = useNavigate();

  const instructions = [
    {
      id: 1,
      svg: "/icons/instr1.svg",
      title: "Лайк",
      description:
        "Если вам понравился человек и вы хотели бы начать общение – поставтье лайк",
    },
    {
      id: 2,
      svg: "/icons/instr2.svg",
      title: "Супер-Лайк",
      description:
        "Супер-лайк отобразится в уведомлениях человека, который вам понравился, и не останется незамеченным",
    },
    {
      id: 3,
      svg: "/icons/instr3.svg",
      title: "Дизлайк",
      description: "Если анкета вам не интересна – поставтье дизлайк",
    },
    {
      id: 4,
      svg: "/icons/instr4.svg",
      title: "Начать переписку",
      description:
        "Вы уверены в своих силах и не хотите дожидаться симпатии? Напишите первым",
    },
    {
      id: 5,
      svg: "/icons/instr5.svg",
      title: "Вернуть предыдущую анкету",
      description: "Верните предыдущую анкету человека, вдруг это ваша судьба",
    },
    {
      id: 6,
      svg: "/icons/instr6.svg",
      title: "Просмотр фотографий",
      description:
        "Чтобы листать фотографии нажмите на левую или правую область фото",
    },
    {
      id: 7,
      svg: "/icons/instr7.svg",
      title: "Просмотр анкеты",
      description:
        "Листайте анкету вниз, чтобы увидеть дополнительную информацию о человеке",
    },
  ];

  useEffect(() => {
    // const result = window.confirm("Поделиться геопозицией?");
    // if (result) {
    console.log("Пользователь нажал OK");
    setShowToast(true); // Показываем уведомление
    setAnimateClass("animate-slideDown");
    setTimeout(() => {
      setAnimateClass("animate-slideUp");
      // После окончания анимации скрытия (1 секунда), убираем тост из DOM
      setTimeout(() => {
        setShowToast(false);
      }, 900);
    }, 3000);
    //
    // } else {
    //     console.log("Пользователь отменил");
    // }
  }, []);

  // const showNotification = () => {
  //     setShowToast(true);
  //     setTimeout(() => setShowToast(false), 3000); // Скрываем через 3 секунды
  // };

  return (
    <div className="w-[100%] flex flex-col !items-center overflow-x-hidden">
      {showInstruction && (
        <div
          className={`z-40 w-[100vw] h-[auto] absolute flex justify-center items-center flex-col bg-black/80 backdrop-blur-[10px]`}
        >
          <h1 className="font-raleway font-bold mt-6 text-white text-[26px]">
            Инструкция
          </h1>
          <h1 className="font-raleway font-light mt-2 text-white text-center text-[18px]">
            Основные функции и жесты
          </h1>
          <div className="grid gric-cols-1 justify-center flex-wrap items-center gap-[16px] mt-[16px]">
            {instructions.map((ins) => (
              <div
                key={ins.id}
                className={`w-[343px] h-[100px] gap-[12px] border-b border-[#6D6D6D] flex text-white cursor-pointer`}
              >
                <div className="h-[89px] flex justify-center items-center">
                  <img src={ins.svg} className="w-[40px] h-[40px]" />
                </div>
                <div className={`flex flex-col gap-[4px]`}>
                  <span className={`w-[270px] text-[18px] font-semibold`}>
                    {ins.title}
                  </span>
                  <span className={`w-[268px] text-[14px] font-light`}>
                    {ins.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <Button
            className={"mt-[20px] mb-6"}
            onclick={() => setShowInstruction(false)}
          >
            Понятно
          </Button>
        </div>
      )}
      <div className="z-0 w-[100%] flex justify-center align-center flex-col">
        <div className="w-[100%] flex flex-row ">
          <img
            src="/icons/Button-menu.svg"
            className="mt-3 ml-3 w-[44px] h-[44px]"
          />
          <div className="flex flex-row justify-end flex-grow mr-3">
            <img
              src="/icons/Button-filters.svg"
              className="mt-3 ml-3 w-[119px] h-[44px]"
            />

            <img
              src="/icons/Button-instruction.svg"
              className="mt-3 ml-3 w-[44px] h-[44px]"
            />

            <img
              src="/icons/Button-notifications.svg"
              className="mt-3 ml-3 w-[44px] h-[44px]"
            />
          </div>
        </div>
        <div></div>
        <div className="w-[100%] flex justify-center align-center mt-4">
          <div className="relative w-[343px] rounded-[16px]">
            <img
              src="/mock/user_1/mock_user_avatar_1_1.png"
              className="z-[1] w-[363px] h-[544px] rounded-[16px] object-cover"
            />
            <div></div>
            <div className="rounded-[16px] relative z-[5] flex flex-col pl-[24px] pr-[24px] bg-[#010D0D] translate-y-[-27px] drop-shadow-[0_0_30px_0_rgb(0,0,0)]">
              <h1 className="font-raleway font-bold mt-6 text-white text-[26px]">
                Наташа, 26 лет
              </h1>
              <h1 className="font-raleway font-light mt-2 text-white text-[18px]">
                Минск, Беларусь
              </h1>
              <div className="border-b-2 border-white/30 pt-5" />
              <h1 className="font-raleway font-bold mt-6 text-white text-[18px]">
                Цель знакомства
              </h1>
              <h1 className="font-raleway font-light mt-2 text-white text-[18px]">
                Серьезные отношения
              </h1>
              <h1 className="font-raleway font-bold mt-6 text-white text-[18px]">
                Аудио визитка
              </h1>
              <img
                src="/icons/user_voice_message.svg"
                className="w-[295px] h-[64px] mt-2"
              />
              <h1 className="font-raleway font-bold mt-6 text-white text-[18px]">
                Интересы
              </h1>
              <h1 className="font-raleway font-light mt-2 text-white text-[18px]">
                Джин с тоником, Гимнастика, Горячая йога, Spotify, Суши{" "}
              </h1>
              <h1 className="font-raleway font-bold mt-6 text-white text-[18px]">
                Подарки
              </h1>
              <div>
                <Swiper
                  modules={[]}
                  spaceBetween={10}
                  slidesPerView={2}
                  className="h-[170px]"
                >
                  <SwiperSlide className="w-[130px] !h-[130px] rounded-[16px] mt-2 !flex justify-center items-center bg-[#FFFFFF1A]">
                    <img
                      src="/icons/present.svg"
                      className="w-[80px] h-[80px]"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="w-[130px] !h-[130px] rounded-[16px] mt-2 !flex justify-center items-center bg-[#FFFFFF1A]">
                    <img
                      src="/icons/present.svg"
                      className="w-[80px] h-[80px]"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="w-[130px] !h-[130px] rounded-[16px] mt-2 !flex justify-center items-center bg-[#FFFFFF1A]">
                    <img
                      src="/icons/present.svg"
                      className="w-[80px] h-[80px]"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="w-[130px] !h-[130px] rounded-[16px] mt-2 !flex justify-center items-center bg-[#FFFFFF1A]">
                    <img
                      src="/icons/present.svg"
                      className="w-[80px] h-[80px]"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100%] flex items-center justify-center">
          <div className="w-[338px] h-[70px] mb-4 bg-[#FFFFFF1A] flex flex-row justify-evenly items-center rounded-[400px]">
            <div
              className={`w-[64px] h-[64px] rounded-[50%] flex justify-center items-center ${
                menuAction === 1 ? "bg-[#FFFFFF1A]" : "bg-transparent"
              }`}
              onClick={() => {
                setMenuAction(1);
              }}
            >
              <img
                src="/icons/bottom_bar_button_1.svg"
                className="w-[24px] h-[24px]"
              />
            </div>
            <div
              className={`w-[64px] h-[64px] rounded-[50%] flex justify-center items-center ${
                menuAction === 2 ? "bg-[#FFFFFF1A]" : "bg-transparent"
              }`}
              onClick={() => {
                setMenuAction(2);
              }}
            >
              <img
                src="/icons/bottom_bar_button_2.svg"
                className=" w-[24px] h-[24px]"
              />
            </div>
            <div
              className={`w-[64px] h-[64px] rounded-[50%] flex justify-center items-center ${
                menuAction === 3 ? "bg-[#FFFFFF1A]" : "bg-transparent"
              }`}
              onClick={() => {
                setMenuAction(3);
                navigate("/streams");
              }}
            >
              <img
                src="/icons/bottom_bar_button_3.svg"
                className=" w-[24px] h-[24px]"
              />
            </div>
            <div
              className={`w-[64px] h-[64px] rounded-[50%] flex justify-center items-center ${
                menuAction === 4 ? "bg-[#FFFFFF1A]" : "bg-transparent"
              }`}
              onClick={() => {
                setMenuAction(4);
              }}
            >
              <img
                src="/icons/bottom_bar_button_4.svg"
                className="w-[24px] h-[24px]"
              />
            </div>
            <div
              className={`w-[64px] h-[64px] rounded-[50%] flex justify-center items-center ${
                menuAction === 5 ? "bg-[#FFFFFF1A]" : "bg-transparent"
              }`}
              onClick={() => {
                setMenuAction(5);
              }}
            >
              <img src="/icons/myta-coin.svg" className="w-[24px] h-[24px]" />
            </div>
          </div>
        </div>
      </div>
      {showToast && (
        <div
          className={`z-[150] w-[343px] fixed font-light mt-2  text-white flex justify-center items-center flex-wrap font-raleway gap-[5px] text-[16px] px-4 py-2 rounded-lg bg-[#043939] border-[1.5px] border-[#a1f69e] ${animateClass}`}
        >
          Вам начислено: <span className="text-[18px] font-medium">+100</span>{" "}
          <img src="/icons/myta-coin.svg" alt="" />
        </div>
      )}
    </div>
  );
}

export default Meet;
