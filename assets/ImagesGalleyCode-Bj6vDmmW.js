import{j as e}from"./index-Cc36IQa3.js";import{B as t}from"./BackToProgram-DzHzA7QB.js";const n=()=>e.jsxs("div",{className:"bg-gray-100 p-8 rounded-md overflow-x-auto w-full ",children:[e.jsx("h1",{children:"Images Gallery Code"}),e.jsx("pre",{className:"whitespace-pre-wrap break-all",children:e.jsx("code",{children:`
import React, { useEffect, useState, useRef } from "react";
import LinkButton from "./commonComponents/LinkButton";
import BackToProgram from './commonComponents/BackToProgram';

const ImagesGallery = () => {
  const [photoDetails, setPhotoDetails] = useState([]);
  const [page, setPage] = useState(1);
  const observerRef = useRef(null);
  const observerInstance = useRef(null);

  useEffect(() => {
    fetch(\`https://picsum.photos/v2/list?page=\${page}&limit=10\`)
      .then((r) => r.json())
      .then((data) => setPhotoDetails((prev) => [...prev, ...data]));
  }, [page]);

  // Runs AFTER DOM renders new images
  useEffect(() => {
    if (
      !photoDetails.length ||
      !observerInstance.current ||
      !observerRef.current
    )
      return;

    requestAnimationFrame(() => {
      const sentinelTop = observerRef.current?.getBoundingClientRect().top;

      if (sentinelTop >= window.innerHeight) {
        // ✅ sentinel is below viewport → safe to observe
        observerInstance.current.observe(observerRef.current);
      } else {
        // 🔁 sentinel still visible → load more to fill viewport
        setPage((prev) => prev + 1);
      }
    });
  }, [photoDetails]);

  useEffect(() => {
    observerInstance.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          observerInstance.current.unobserve(observerRef.current);
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1.0 },
    );
    return () => observerInstance.current.disconnect();
  }, []);

  return (
    <>
      <h1 className="underline">
        Images Gallery - Lazy Loading {photoDetails.length}
      </h1>
      <LinkButton to="/images-gallery-code" />
      <div className="flex w-auto flex-wrap flex-row gap-4">
        {photoDetails.map((photo) => (
          <span key={photo.id}>
            <img
              src={photo.download_url}
              alt={photo.author}
              className="size-80"
            />
            <h4>{photo.title}</h4>
          </span>
        ))}
      </div>
      <div ref={observerRef} className="h-10 w-full" />
    </>
  );
};

export default ImagesGallery;
`})}),e.jsx(t,{to:"/images-gallery"})]});export{n as default};
