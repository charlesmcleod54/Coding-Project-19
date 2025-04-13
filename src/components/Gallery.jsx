import React, {use, useEffect, useState} from "react";
import TourCard from "./TourCard";
import { fetchModule } from "vite";

// Gallery is responsible for fetching data and rendering the list

const TourList = ({tours, setTours, onRemove}) => {
    // Local state to manage loading and errors
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

// Function to fetch tours from the API
const fetchTours = async () => {
    try {
        const res = await fetch("https://course-api.com/react-tours-project");
        // Map the API data to only the field we need

        const data = await res.json();
        const trimmed = data.results.map((tour) => ({
            id: tour.id,
            name: tour.name,
            info: `Download count: ${tour.download_count}. Sections ${tour.sections.slice(0, 3).join(", ")}`,
            price: tour.price,
            image: tour.image,
        }));
        setTours(trimmed); // Save data to global state
        setLoading(false); // Set loading to false
    } catch (error) {
        setError(true); // If fetch fails, show error
        setLoading(false); 
    }
};

// Run fetchTours once after the component mounts
useEffect(() => {
    fetchTours();
}, []);

// Render loading state

if (loading) {
    return<h2>Loading...</h2>;
};
// Render error state
if (error) {
    return <h2>Something went wrong...</h2>;
};
// Render if no tours remain

if (tours.length === 0) {
    return (
        <>
            <h2>No tours left</h2>
            <button onClick={fetchTours}>Refresh</button>
        </>
    );
}

// Render the list of TourCards

return (
    <section className="tour-list">
        {tours.map((tour) => {
            return (
                <TourCard
                    key={tour.id}
                    {...tour} // Spread operator to pass all tour properties
                    onRemove={onRemove} // Pass the remove function
                />
            );
        })}
    </section>
);
};


export default TourList;