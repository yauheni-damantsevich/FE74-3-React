import React, { useState } from "react";
import { MainWrapper } from "../all-posts/styled";
import {
  InformationNavigation,
  Ul,
  Li,
  Tab,
  InformationBody,
  Paragraph,
  ParagraphTab1,
  ParagraphTab2,
  ParagraphTab3,
} from "./styled";

const text1 =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim blandit volutpat maecenas volutpat blandit aliquam. Interdum consectetur libero id faucibus. Urna molestie at elementum eu.";

const text2 =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sagittis vitae et leo duis ut diam quam nulla porttitor. Pharetra pharetra massa massa ultricies mi quis hendrerit. Viverra mauris in aliquam sem fringilla ut morbi tincidunt. Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. Vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam.";

const text3 =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut diam quam nulla porttitor massa id neque. Faucibus nisl tincidunt eget nullam non nisi. Faucibus ornare suspendisse sed nisi lacus sed. Malesuada pellentesque elit eget gravida cum sociis natoque. Venenatis a condimentum vitae sapien pellentesque. Lectus nulla at volutpat diam ut venenatis. Feugiat vivamus at augue eget arcu.";

export const Information = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState("tab1");
  const handleTab1 = () => {
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    setActiveTab("tab2");
  };
  const handleTab3 = () => {
    setActiveTab("tab3");
  };
  return (
    <MainWrapper>
      <InformationNavigation>
        <Ul>
          <Li>
            <Tab
              className={activeTab === "tab1" ? "active" : ""}
              onClick={handleTab1}
            >
              Tab 1
            </Tab>
          </Li>
          <Li>
            <Tab
              className={activeTab === "tab2" ? "active" : ""}
              onClick={handleTab2}
            >
              Tab 2
            </Tab>
          </Li>
          <Li>
            <Tab
              className={activeTab === "tab3" ? "active" : ""}
              onClick={handleTab3}
            >
              Tab 3
            </Tab>
          </Li>
        </Ul>
      </InformationNavigation>
      <InformationBody>
        <Paragraph></Paragraph>
        {activeTab === "tab1" ? (
          <ParagraphTab1>{text1}</ParagraphTab1>
        ) : <ParagraphTab1>{text1}</ParagraphTab1> && activeTab === "tab2" ? (
          <ParagraphTab2>{text2}</ParagraphTab2>
        ) : <ParagraphTab1>{text1}</ParagraphTab1> && activeTab === "tab3" ? (
          <ParagraphTab3>{text3}</ParagraphTab3>
        ) : (
          <ParagraphTab1>{text1}</ParagraphTab1>
        )}
      </InformationBody>
    </MainWrapper>
  );
};
