"use client";

import { Conteiner } from "@/components/Conteiner/Conteiner";
import { MapCard } from "@/components/MapCard/MapCard";
import { Slider } from "@/components/Slider/Slider";
import { Title } from "@/components/Title/Title";
import React, { useEffect, useState } from "react";
import cardsData from "../../data/mapCard.json";
import { useWindowWidth } from "@/hooks/getWindowWidth.jsx";

export const MindMap = () => {
  const [width, setWidth] = useState();

  const windowWidth = useWindowWidth();

  useEffect(() => {
    if (windowWidth) setWidth(windowWidth);
  }, [windowWidth]);

  return (
    <Conteiner id="M-map" className="pt-[50px]">
      <Title title="mind map" />
      {width < 767 ? (
        <Slider className="mt-6">
          {cardsData.map((card) => (
            <MapCard
              key={card.title}
              descr={card.descr}
              title={card.title}
              img={card.arrow || false}
            />
          ))}
        </Slider>
      ) : (
        <div className="grid grid-cols-2 gap-6">
          {cardsData.map((card) => (
            <MapCard
              key={card.title}
              descr={card.descr}
              title={card.title}
              img={card.arrow || false}
            />
          ))}
        </div>
      )}
    </Conteiner>
  );
};
