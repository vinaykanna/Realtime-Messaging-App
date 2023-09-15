import Auth from "./Auth/Auth";
import Chat from "./Chat/Chat";

function App() {
  const isAuthenticated = localStorage.getItem("token");

  if (!isAuthenticated) {
    return <Auth />;
  }

  return <Chat />;
}

export default App;
