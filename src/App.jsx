import CartList from "./components/CartList";

function App() {
  return (
    <div className="relative before:fixed before:top-1/2 before:left-1/2 before:skew-y-[-8deg] before:animate-wave before:rounded-[100%] before:translate-x-[-50%] before:bg-[#f6c90e] before:w-[300%] before:h-full before:r w-full h-[100vh] bg-white">
      <CartList />
    </div>
  );
}

export default App;
