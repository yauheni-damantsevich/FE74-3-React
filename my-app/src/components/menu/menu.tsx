import React from "react";
import { IMenu } from "./types";
import {
  MenuWrapper,
  UnorderedListWrapper,
  UnorderedList,
  ListItem,
} from "./styled";

export function Menu({
  allPosts,
  myPosts,
  addPosts,
  logOut,
}: IMenu): JSX.Element {
  return (
    <MenuWrapper>
      <UnorderedListWrapper className="flex gap-8">
        <UnorderedList className="min-w-max font-normal">
          <ListItem>{allPosts}</ListItem>
        </UnorderedList>
        <UnorderedList className="min-w-max">
          <ListItem className="mb-6">{myPosts}</ListItem>
          <ListItem>{addPosts}</ListItem>
        </UnorderedList>
      </UnorderedListWrapper>
      <UnorderedListWrapper>
        <UnorderedList className="min-w-max">
          <ListItem>{logOut}</ListItem>
        </UnorderedList>
      </UnorderedListWrapper>
    </MenuWrapper>
  );
}
