import React, { useState, useEffect } from "react";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  const fetchData = async () => {
    const res = await fetch(
      `https://pixabay.com/api/?key=33950169-f8aac3544c8b2c00d3eca2ab0&q=${term}&image_type=photo`
    );
    const data = await res.json();
   
    setImages(data.hits);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, [term]);

  return (
    <>
      <Navbar />
    <div className="mx-auto  container ">
      <div className="flex py-10">
        <ImageSearch searchText={(text) => setTerm(text)} />
      </div>

      {!isLoading && images.length === 0 && (
        <h1 className=" text-6xl text-center mx-auto mt-32">No Images Found</h1>
      )}

      {isLoading ? (
        <h1 className="text-teal-500 text-center text-9xl">Loading...</h1>
      ) : (
        <div className=" mx-5 grid grid-cols-1 gap-5 md:grid-cols-3  ">
          {images.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      )}
      </div>
      <Footer />
    </>
  );
}

export default App;
