 import AxiosDataComponent from "./components/AxiosFetchComponents"
 import FetchDataComponent from "./components/Fetch";
 import UserListManipulated from "./components/DataManipulation";
import AbortFetchComponent from "./components/AbortFetch";

 function App() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Data Pengguna</h1>
      <AxiosDataComponent />
      <UserListManipulated />
      <FetchDataComponent />
      <AbortFetchComponent />
    </div>
  );
}

export default App
