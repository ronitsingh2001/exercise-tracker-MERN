import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar";
import ExerciseList from "./Component/ExerciseList";
import EditExercise from "./Component/EditExercise";
import CreateExercise from "./Component/CreateExercise";
import CreateUser from "./Component/CreateUser";
function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" exact element={<ExerciseList />} />
          <Route path="/edit/:id" element={<EditExercise />} />
          <Route path="/create" element={<CreateExercise />} />
          <Route path="/user" element={<CreateUser />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
