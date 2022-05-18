import Link from "next/link";
import React from "react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

const externalLinkRegex = /https?:\/\/((?:[\w\d-]+\.)+[\w\d]{2,})/i;

const MyReactMarkDown = ({
  children,
}: {
  children: MDXRemoteSerializeResult<Record<string, unknown>>;
}) => {
  return (
    <MDXRemote
      {...children}
      components={{
        a: ({ href, ...restProps }) => {
          if (!href) {
            return <a {...restProps}></a>;
          }
          if (externalLinkRegex.test(href)) {
            return (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer nofollow"
                {...restProps}
              ></a>
            );
          }
          return (
            <Link href={href}>
              <a {...restProps}></a>
            </Link>
          );
        },
      }}
    ></MDXRemote>
  );
};

export default MyReactMarkDown;
