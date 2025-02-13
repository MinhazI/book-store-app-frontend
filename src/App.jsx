import { Outlet } from "react-router";

function App() {
  return (
    <>
      <nav>Navbar</nav>
      <main className="min-h-sreen max-w-screen-2xl mx-auto px-4 py-6">
        <Outlet />
      </main>
      <footer>Footer</footer>
    </>
  );
}

export default App;
