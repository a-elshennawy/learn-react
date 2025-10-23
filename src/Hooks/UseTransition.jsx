// it's used most likely to manage expensive stuff
// in this example we created a list of 10000 items and simple seacrh fucntion for them
// notice the app is so slow and if you increse the 10000 it might actually crash

// useTransition here to start hiding the calculation (search process) and keep it in the background
// displaying something else (e.g: loading screen)
// done when the that big calculation finishes
import { useTransition, useState } from "react";
export default function UseTransition() {
  const [query, setQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  //   calculation is pending & start transition when calculation is done
  const [isPendeng, startTransition] = useTransition();

  //   creating the list
  const items = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);

  //   search handler
  const handleFilter = (e) => {
    const value = e.target.value;
    setQuery(value);

    // here's where we tell the hook what is the expensive thing and we wrap it around it as callback function
    // so it strarts transition when whatever is between the {} is done
    // otherwise keeo isPending true
    startTransition(() => {
      const filtered = items.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredItems(filtered);
    });
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={query}
          onChange={handleFilter}
          placeholder="search items..."
        />
        {/* here displaying something else rather than that hard calculation */}
        {/* u can also put anything like a spinnerLoader if you have it */}
        {isPendeng && <p>loading...</p>}

        {/* the result */}
        <ul>
          {filteredItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

// overall improves user interface and making it smooth and avoids freezing or lagging
