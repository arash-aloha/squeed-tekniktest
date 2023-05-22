import { memo, useEffect } from "react";
import { User } from "../../models/types";
import UserCard from "../UserCard";

interface SearchResultsProps {
  searchResults: User[] | undefined;
}

function SearchResults({ searchResults }: SearchResultsProps) {
  return (
    <>
      <UserCard users={searchResults} />
    </>
  );
}

export default memo(SearchResults);
