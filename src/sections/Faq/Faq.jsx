import { Conteiner } from "@/components/Conteiner/Conteiner";
import { TabItem } from "@/components/TabItem/TabItem";
import { Title } from "@/components/Title/Title";
import React from "react";
import faqData from "../../data/faq.json";

export const Faq = () => {
  return (
    <Conteiner id="Faq">
      <Title title="faq" />
      <ul>
        {faqData.map((item) => (
          <TabItem
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
          />
        ))}
      </ul>
    </Conteiner>
  );
};
