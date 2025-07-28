// so similar to useTransition but it just delay the thing  to create smooth exp.
// not delaying the response but delaying the value for saving renders
import { useDeferredValue, useState } from "react";

export default function UseDeferredValue() {
  const [query, setQuery] = useState("");
  //   creating the list
  const items = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);

  //   here we're creating some kind of a copy form the query it self (deferred version)
  const defrredQuery = useDeferredValue(query);

  //   search handler
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(defrredQuery.toLowerCase())
  );

  return (
    <>
      <div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="search items..."
        />
        {/* new kind of loading screen */}
        {/*means that result is not up yet */}
        {query !== defrredQuery && <p>loading...</p>}

        {/* result */}
        <ul>
          {filteredItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
