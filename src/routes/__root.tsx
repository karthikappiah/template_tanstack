/// <reference types="vite/client" />
import type { ReactNode } from "react";

import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";

import stylesheet from "../styles/style.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Kar's Tanstack Starter",
      },
    ],
    links: [
      { rel: "stylesheet", href: stylesheet },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <body className="flex flex-col min-h-screen">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

// <body className='flex flex-col min-h-screen'>:
// making the body a flexbox container makes the children grow.
// flex-col stacks children vertically to revert to non-flexbox default.
// min-h-screen makes the body at least the height of the viewport to define parent height.
