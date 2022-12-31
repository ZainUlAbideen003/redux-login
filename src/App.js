// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import LogIn from './components/LogIn';
// import SignUp from './components/SignUp';
// import Welcome from "./components/Welcome";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn/>} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Welcome" element={<Welcome />} />
      </Routes>
    </BrowserRouter> */}

<div>
			<h1>My Tasks</h1>
			<AddTodo />
			<TodoList />
		</div>
    </>
  );
}

export default App;
