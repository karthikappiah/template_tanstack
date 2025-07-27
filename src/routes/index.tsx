import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RootLayout,
});

function RootLayout() {
  return (
    <div className="flex flex-col flex-1">
      <header className="flex items-center justify-between p-4">
        <div>Kar's Tanstack Starter</div>
        <nav className="space-x-4">
          <Link to="/">Landing</Link>
          <Link to="/app">App</Link>
        </nav>
      </header>
      <main className="flex justify-center grow items-center">
        <h1>Landing Page</h1>
      </main>
    </div>
  );
}
