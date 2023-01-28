import React from "react";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useEffect } from "react";
import { useRef } from "react";

export default function TagsInput() {
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState([]);

  const input = useRef(null);
  const TagsInput = useRef(null);

  useEffect(() => {
    input.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  }, [tags]);

  const handleChange = ({ target }) => {
    const { value } = target;
    if (value !== ",") {
      setTag(value);
    }
  };

  const handleFocus = () => {
    TagsInput.current.classList.remove(
      "dark:border-dark-subtle",
      "border-light-subtle"
    );
    TagsInput.current.classList.add("dark:border-white", "border-primary");
  };

  const handleBlur = () => {
    TagsInput.current.classList.add(
      "dark:border-dark-subtle",
      "border-light-subtle"
    );
    TagsInput.current.classList.remove("dark:border-white", "border-primary");
  };

  const handleKeyDown = ({ key }) => {
    if (key === "," || key === "Enter") {
      if (!tag) return;

      if (tags.includes(tag)) return setTag("");

      setTags([...tags, tag]);
      setTag("");
    }

    if (key === "Backspace" && !tag) {
      const newTags = tags.slice(0, -1);
      setTags(newTags);
    }
  };

  const removeTag = (tagToRemove) => {
    const newTags = tags.filter((tag) => tag !== tagToRemove);
    setTags([...newTags]);
  };
  return (
    <div>
      <div
        ref={TagsInput}
        onKeyDown={handleKeyDown}
        className="border-2 bg-transparent dark:border-dark-subtle border-light-subtle
         px-2 h-10 rounded w-full text-white flex items-center space-x-2 
         overflow-x-auto custom-scroll-bar transition"
      >
        {tags.map((t) => (
          <Tag onClick={() => removeTag(t)} key={t}>
            {t}
          </Tag>
        ))}
        <input
          ref={input}
          type="text"
          className="h-full flex-grow bg-transparent outline-none dark:text-white"
          placeholder="Tag one, Tag two"
          value={tag}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </div>
    </div>
  );
}

const Tag = ({ children, onClick }) => {
  return (
    <span
      className="dark:bg-white bg-primary dark:text-primary
         text-white flex items-center text-sm px-1 whitespace-nowrap"
    >
      {children}
      <button type="button" onClick={onClick}>
        <AiOutlineClose size={12} />
      </button>
    </span>
  );
};
