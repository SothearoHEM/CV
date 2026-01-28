import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import CV from "./components/CV";

function App() {

  const cvRef = useRef();

  const handlePrint = useReactToPrint({
    contentRef: cvRef,
    documentTitle: "HEM_SOTHEARO_CV",
    pageStyle: `
      @page {
        size: A4;
        margin: 0;
      }
      @media print {
        * {
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
        }
        .bg-gray-300 {
          background: white !important;
          padding: 0 !important;
        }
      }
    `,
  });

  return (
    <>
      <div className="flex flex-col items-center gap-4 p-6 print:hidden">
        <button
          onClick={handlePrint}
          className="bg-blue-600 text-white px-5 py-2 rounded shadow hover:bg-blue-700 transition-colors active:scale-95"
        >
          Download CV PDF
        </button>
      </div>
      
      <CV ref={cvRef} />
    </>
  );
}

export default App;
