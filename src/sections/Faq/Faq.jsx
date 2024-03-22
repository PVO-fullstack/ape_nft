"use client";

import { Conteiner } from "@/components/Conteiner/Conteiner";
import { TabItem } from "@/components/TabItem/TabItem";
import { Title } from "@/components/Title/Title";
import React, { useState } from "react";
import faqData from "../../data/faq.json";

export const Faq = () => {
  const [current, setCurrent] = useState("1");

  const getCurrent = (data) => {
    setCurrent(data);
  };

  return (
    <Conteiner id="Faq">
      <Title title="faq" />
      <ul>
        {faqData.map((item) => (
          <TabItem
            getCurrent={getCurrent}
            current={current}
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
