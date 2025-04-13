import React, {useState} from "react";
import TourList from "./components/Gallery";

// Root component of the app
function app() {
  // Global state to hold the list of tours
  const [tours, setTours] = useState([]);

  // Function to remove a Tour by its ID
  const removeTour = (id) => {
    setTours((preTours) => preTours.filter((tour) => tour.id !== id));
  };

  return (
    <main>
      <h1>Tour Explorer</h1>
      {/* Pass state and handlers down to the TourList component */}
      <TourList tours={tours} setTours={setTours} onRemove={removeTour}/>
    </main>
  )
}

export default app;