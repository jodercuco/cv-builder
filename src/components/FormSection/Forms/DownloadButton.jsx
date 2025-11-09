import React from "react";
import { useReactToPrint } from "react-to-print";

export const DownloadButton = ({ cvRef }) => {
  const handlePrint = useReactToPrint({
    contentRef: cvRef,
    documentTitle: "Mi_CV",
  });

  return (
    <section>
      <button onClick={handlePrint} className="download-button">Descargar CV</button>

      {/* Estilos específicos para imprimir */}
      <style>
        {`
          @media print {
            body {
              margin: 0;
              padding: 0;
            }
            
            .cv-container {
              scale: 1 !important;
              width: 210mm !important;
              height: 297mm !important;
              box-shadow: none !important;
              margin: 0 !important;
            }
            
            /* Ocultar el formulario al imprimir */
            .forms-container {
              display: none !important;
            }
          }
        `}
      </style>
    </section>
  );
};

export default DownloadButton;