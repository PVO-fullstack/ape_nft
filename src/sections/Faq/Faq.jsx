"use client";

import { Container } from "@/components/Container/Container";
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
    <Container id="Faq">
      <Title title="faq" />
      <ul className=" mb-4 last:mb-0">
        {faqData.map((item) => (
          <TabItem
            getCurrent={getCurrent}
            current={current}
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            img={item.img}
            alt={item.alt}
          />
        ))}
      </ul>
    </Container>
  );
};
