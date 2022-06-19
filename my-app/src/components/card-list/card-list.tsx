import React, { useState, useEffect } from "react";
import { Card } from "../../components/index";
import { ICard } from "../../components/card/types";
import { CardListWrapper } from "./styled";

// const cardObject: ICard = {
//   id: 0,
//   image: "string",
//   text: "string",
//   date: "2021-12-12",
//   lesson_num: 0,
//   title: "string",
//   author: 0,
// };

export const CardList = (): JSX.Element => {
  const [data, setData] = useState<null | Array<ICard>>(null);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const url = "https://studapi.teachmeskills.by/blog/posts/";
      const res = await fetch(url);
      const response = await res.json();
      setData(response.results);
    };
    fetchData();
  }, []);

  return (
    <CardListWrapper>
      {data &&
        data.map((result): JSX.Element => {
          return (
            <Card
              key={result.id}
              image={result.image}
              text={result.text}
              date={result.date}
              title={result.title}
            />
          );
        })}
    </CardListWrapper>
  );
};
