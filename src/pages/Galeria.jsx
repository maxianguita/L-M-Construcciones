import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, X } from "lucide-react";

/* IMPORT IMAGES */
import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.jpg";
import img4 from "../img/img4.jpg";
import img5 from "../img/img5.jpg";
import img6 from "../img/img6.jpg";
import img7 from "../img/img7.jpg";
import img8 from "../img/img8.jpg";
import img9 from "../img/img9.jpg";
import img10 from "../img/img10.jpg";
import img11 from "../img/img11.jpg";
import img12 from "../img/img12.jpg";
import img13 from "../img/img13.jpg";
import img14 from "../img/img14.jpg";
import img15 from "../img/img15.jpg";
import img16 from "../img/img16.jpg";
import img17 from "../img/img17.jpg";
import img18 from "../img/img18.jpg";
import img19 from "../img/img19.jpg";
import img20 from "../img/img20.jpg";
import img21 from "../img/img21.jpg";
import img22 from "../img/img22.jpg";
import img23 from "../img/img23.jpg";
import img24 from "../img/img24.jpg";
import img25 from "../img/img25.jpg";
import img26 from "../img/img26.jpg";
import img27 from "../img/img27.jpg";
import img28 from "../img/img28.jpg";
import img29 from "../img/img29.jpg";
import img30 from "../img/img30.jpg";
import img31 from "../img/img31.jpg";
import img32 from "../img/img32.jpg";
import img33 from "../img/img33.jpg";
import img34 from "../img/img34.jpg";
import img35 from "../img/img35.jpeg";
import img36 from "../img/img36.jpeg";
import img37 from "../img/img37.jpeg";
import img38 from "../img/img38.jpeg";
import img39 from "../img/img39.jpeg";
import img40 from "../img/img40.jpeg";
import img41 from "../img/img41.jpeg";
import img42 from "../img/img42.jpeg";
import img43 from "../img/img43.jpeg";
import img44 from "../img/img44.jpeg";
import img45 from "../img/img45.jpeg";
import img46 from "../img/img46.jpeg";
import img47 from "../img/img47.jpeg";
import img48 from "../img/img48.jpeg";
import img49 from "../img/img49.jpeg";
import img50 from "../img/img50.jpeg";
import img51 from "../img/img51.jpeg";
import img52 from "../img/img52.jpeg";
import img53 from "../img/img53.jpeg";

/* ARRAY IMAGES */
const images = [
  img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,
  img11,img12,img13,img14,img15,img16,img17,img18,img19,img20,
  img21,img22,img23,img24,img25,img26,img27,img28,img29,img30,
  img31,img32,img33,img34,img35,img36,img37,img38,img39,img40,
  img41,img42,img43,img44,img45,img46,img47,img48,img49,img50,
  img51,img52,img53
];

const Gallery = () => {

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">

      {/* BOTON VOLVER */}
      <Link
        to="/"
        className="fixed top-24 left-6 z-50 bg-white p-2 rounded-full shadow hover:bg-amber-500 hover:text-white transition"
      >
        <ArrowLeft size={18}/>
      </Link>

      <h2 className="text-4xl font-bold text-center mb-14 mt-10">
        Galería de Proyectos
      </h2>

      {/* GRID DE IMAGENES */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

        {images.map((img, index) => (

          <div
            key={index}
            onClick={() => setSelectedImage(img)}
            className="cursor-pointer overflow-hidden rounded-lg group"
          >

            <img
              src={img}
              alt={`Proyecto ${index+1}`}
              className="w-full h-60 object-cover transition duration-300 group-hover:scale-110"
            />

          </div>

        ))}

      </div>

      {/* MODAL IMAGEN GRANDE */}
      {selectedImage && (

        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >

          <button
            className="absolute top-6 right-6 text-white"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32}/>
          </button>

          <img
            src={selectedImage}
            alt="Imagen ampliada"
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg"
          />

        </div>

      )}

    </section>
  );
};

export default Gallery;