import { Conteiner } from "@/components/Conteiner/Conteiner";
import { MapCard } from "@/components/MapCard/MapCard";
import { Slider } from "@/components/Slider/Slider";
import { Title } from "@/components/Title/Title";
import React from "react";
import cardsData from "../../data/mapCard.json";

export const MindMap = () => {
  return (
    <Conteiner id="M-map" className="pt-[50px]">
      <Title title="mind map" />
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
    </Conteiner>
  );
};
