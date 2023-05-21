import { memo } from "react";

function SearchBar() {
  return (
    <>
      <form>
        <input type="text" placeholder="search for a user" />
      </form>
    </>
  );
}

export default memo(SearchBar);
