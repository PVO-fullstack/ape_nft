import { Container } from "@/components/Container/Container";
import { Slider } from "@/components/Slider/Slider";
import { Title } from "@/components/Title/Title";
import React from "react";
import arts from "../../data/arts.json";
import { ArtCard } from "@/components/ArtCard/ArtCard";

export const Arts = () => {
  return (
    <Container className="pb-[78px]" id="Arts">
      <Title title="Collection" />
      <Slider>
        {arts.map((art) => (
          <ArtCard key={art.id} img={art.img} alt={art.alt} />
        ))}
      </Slider>
    </Container>
  );
};
