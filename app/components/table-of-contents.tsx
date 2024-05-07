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
          <div className="text-neutral-900 dark:text-neutral-100 mb-3 mt-[7px] text-sm font-medium">
            On this page
          </div>
          <div className="relative">
            <ul className="styled-scrollbar max-h-[70vh] overflow-y-auto text-sm ">
              {headings.map((heading) => (
                <li
                  key={heading.id}
                  className={`block leading-[1.6] text-neutral-600 py-2.5 ${
                    activeId === heading.id
                      ? "text-rose-500 hover:text-rose-600 hover:text-bold border-l-2 border-rose-500"
                      : "text-neutral-400 hover:text-neutral-900 hover:text-bold dark:text-neutral-400 hover:dark:text-white border-l-2 border-neutral-300"
                  } ${heading.tagName === "h2" ? "pl-4" : "pl-6"}`}
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
