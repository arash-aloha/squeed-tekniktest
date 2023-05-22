import { memo, useEffect } from "react";
import { User } from "../../models/types";

interface SearchResultsProps {
  searchResults: User[] | undefined;
}

function SearchResults({ searchResults }: SearchResultsProps) {
  return (
    <>
      {searchResults?.map((result) => (
        <div key={result.id}>
          <p>{result.firstName}</p>
        </div>
      ))}
    </>
  );
}

export default memo(SearchResults);
