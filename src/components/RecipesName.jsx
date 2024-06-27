import React, { useEffect, useState } from 'react';

const RecipesName = ({ data }) => {
  const [search, setSearch] = useState("");
  const [matchedVal, setMatchedVal] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  useEffect(() => {
    setMatchedVal(data);
  }, [data]);


  const getHighlightedText = (text, highlight) => {
    if (!highlight) return text;
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return parts.map((part, i) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <span key={i} className="text-blue-400">{part}</span>
      ) : (
        part
      )
    );
  };
console.log(selectedIndex)
  const filteredVal = matchedVal.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown') {
        setSelectedIndex((prevIndex) =>
          prevIndex < filteredVal.length - 1 ? prevIndex + 1 : prevIndex
        );
      } else if (e.key === 'ArrowUp') {
        setSelectedIndex((prevIndex) =>
          prevIndex > 0 ? prevIndex - 1 : prevIndex
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [filteredVal]);

  return (
    <div className='h-screen w-full bg-gray-200 flex justify-center'>
      <div className='w-[550px] mt-10'>
        <input
          type="text"
          placeholder='Search recipe'
          className='p-2 h-fit rounded w-full'
          onChange={(e) => {
            setSearch(e.target.value);
            setSelectedIndex(-1); // Reset selected index on new search
          }}
          value={search}
        />

        {search && (
          <ul className='w-full py-2 bg-white'>
            {filteredVal.map((item, i) => (
              <li
                key={i}
                className={`hover:bg-gray-100 my-1 px-2 py-1 ${i === selectedIndex ? 'bg-blue-100' : ''}`}
              >
                {getHighlightedText(item, search)}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default RecipesName;
