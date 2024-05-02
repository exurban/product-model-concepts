"use client";

import { useEffect, useState, useRef } from "react";
import { slugify } from "app/components/mdx";

type heading = {
  id: string;
  text: string;
  tagName: string;
  className: string;
};

export default function TableOfContents() {
  const [headings, setHeadings] = useState<heading[]>([]);
  const [activeId, setActiveId] = useState("");
  var observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const callback = (entries) => {
      if (entries.length > 1 && entries[0].isIntersecting) {
        setActiveId(entries[0].target.id);
      } else {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId("");
            setActiveId(entry.target.id);
          }
        });
      }
    };
    observerRef.current = new IntersectionObserver(callback, {
      rootMargin: "0% 0% -60% 0px",
      threshold: 1,
    });

    const elements = document.querySelectorAll("h2, h3");
    elements.forEach((el) => observerRef.current?.observe(el));
    return () => observerRef.current?.disconnect();
  }, []);

  useEffect(() => {
    // console.log("TableOfContents useEffect");
    const elements = Array.from(document.querySelectorAll("h2, h3")).map(
      (elem) => ({
        id: slugify(elem.textContent),
        text: elem.textContent || "",
        tagName: elem.tagName.toLowerCase(),
        className: elem.className,
      })
    );
    setHeadings(elements);
  }, []);

  return (
    <>
      {headings.length > 0 && (
        <div>
          <div className="text-neutral-900 dark:text-neutral-100 mb-1 mt-[7px] text-sm font-medium">
            On this page
          </div>
          <div className="relative">
            <ul className="styled-scrollbar max-h-[70vh] space-y-2.5 overflow-y-auto py-4 text-sm ">
              {headings.map((heading) => (
                <li
                  key={heading.id}
                  className={`block leading-[1.6] text-neutral-600 ${
                    activeId === heading.id
                      ? "text-rose-500 hover:text-rose-600 hover:text-bold"
                      : "text-neutral-600 hover:text-black hover:text-bold dark:text-neutral-400 hover:dark:text-white"
                  } ${heading.tagName === "h2" ? "ml-2" : "ml-4"}`}
                >
                  <a
                    href={`#${heading.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(`#${heading.id}`)?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                  >
                    {heading.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
