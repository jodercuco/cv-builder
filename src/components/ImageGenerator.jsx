import React, { useState, useEffect, useCallback } from 'react';
import html2canvas from 'html2canvas';

// El componente recibe la 'ref' del CV como prop
function ImageGenerator({ targetRef, cvData }) {
  const [thumbnailSrc, setThumbnailSrc] = useState(null);

  // Función de captura, usando la 'targetRef' proporcionada por el padre
  const generateThumbnail = useCallback(async () => {
    if (!targetRef.current) return;

    try {
      const canvas = await html2canvas(targetRef.current, {
          scale: 2, // Escalar para obtener una miniatura (ejemplo: 30%)
          logging: false,
      });

      const dataUrl = canvas.toDataURL('image/png');
      setThumbnailSrc(dataUrl);
    } catch (error) {
        console.error("Error al generar la imagen:", error);
    }
    
  }, [targetRef]);

  // Vuelve a generar la imagen cada vez que cambian los datos del CV
  useEffect(() => {
    // Aplicamos un 'debounce' (retraso) de 100ms
    const handler = setTimeout(() => {
      generateThumbnail();
    }, 0); 

    return () => clearTimeout(handler);
  }, [cvData, generateThumbnail]);

  return (
    <div className="cv-thumbnail-container">
      {thumbnailSrc ? (
        <img 
          src={thumbnailSrc} 
          alt="Miniatura del CV" 
          
        />
      ) : (
        <p>Cargando miniatura...</p>
      )}
    </div>
  );
}

export default ImageGenerator;