import React from "react";
import { Link } from "react-router-dom";
// import img4 from "/src/assets/img4.jpg";
import img1 from "/src/assets/image1.jpg";
import img2 from "/src/assets/image2.jpg";
import img3 from "/src/assets/image3.jpg";
import img4 from "/src/assets/image4.jpg";
import img5 from "/src/assets/image5.jpg";
import img6 from "/src/assets/image6.jpg";

const images = [
  { id: 1, src: img4, alt: "Image 1" },
  { id: 2, src: img2, alt: "Image 2" },
  { id: 3, src: img1, alt: "Image 3" },
  // { id: 4, src: img4, alt: "Image 4" },
  { id: 5, src: img5, alt: "Image 5" },
  // { id: 6, src: img1, alt: "Image 6" },
];

const Gallery = () => {
  return (
    <div className="bg-[#191a1d] min-h-screen">
      <main className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image) => (
            <div key={image.id} className="relative group">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center rounded-lg transition">
                <p className="text-white font-semibold">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Gallery;
