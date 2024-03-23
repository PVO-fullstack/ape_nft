import { Conteiner } from "@/components/Conteiner/Conteiner";
import { Slider } from "@/components/Slider/Slider";
import { Title } from "@/components/Title/Title";
import React from "react";
import arts from "../../data/arts.json";
import { ArtCard } from "@/components/ArtCard/ArtCard";

export const Arts = () => {
  return (
    <Conteiner className="pb-[78px]" id="Arts">
      <Title title="Collection" />
      <Slider>
        {arts.map((art) => (
          <ArtCard key={art.id} img={art.img} />
        ))}
      </Slider>
    </Conteiner>
  );
};
