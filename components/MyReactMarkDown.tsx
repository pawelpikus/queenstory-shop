import Link from "next/link";
import React from "react";
import ReactMarkdown from "react-markdown";

const MyReactMarkDown = ({ children }: { children: string }) => {
  return (
    <ReactMarkdown
      components={{
        a: ({ href, ...restProps }) => {
          if (!href) {
            return <a {...restProps}></a>;
          }
          return (
            <Link href={href}>
              <a {...restProps}></a>
            </Link>
          );
        },
      }}
    >
      {children}
    </ReactMarkdown>
  );
};

export default MyReactMarkDown;
