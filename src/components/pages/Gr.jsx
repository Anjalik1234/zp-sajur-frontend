import React, { useState } from "react";
import "./Gr.css";
import grData from "../../data/grData.json";

const ITEMS_PER_PAGE = 10;

export default function Gr({ language = "mr" }) {
  const lang = language;

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredGRs = grData
    .filter((gr) =>
      gr.title[lang].toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  const totalPages = Math.ceil(filteredGRs.length / ITEMS_PER_PAGE);

  const displayedGRs = filteredGRs.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <section className="gr-section" id="gr">
      <div className="gr-hero">
        <h1>
          {lang === "mr"
            ? "शासन निर्णय"
            : "Government Resolutions"}
        </h1>
      </div>

      <div className="gr-controls">
        <input
          type="text"
          placeholder={lang === "mr" ? "शोधा..." : "Search..."}
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          className="gr-search"
        />
      </div>

      <div className="gr-table-wrapper">
        <table className="gr-table">
          <thead>
            <tr>
              <th>{lang === "mr" ? "क्र." : "Sr No"}</th>
              <th>{lang === "mr" ? "शीर्षक" : "Title"}</th>
              <th>{lang === "mr" ? "संदर्भ क्र." : "Reference No."}</th>
              <th>{lang === "mr" ? "दिनांक" : "G.R Date"}</th>
              <th>{lang === "mr" ? "आकार" : "Size (KB)"}</th>
              <th>{lang === "mr" ? "डाउनलोड" : "Download"}</th>
            </tr>
          </thead>

          <tbody>
            {displayedGRs.map((gr, index) => (
              <tr key={gr.id}>
                <td>{(currentPage - 1) * ITEMS_PER_PAGE + index + 1}</td>
                <td>{gr.title[lang]}</td>
                <td>{gr.referenceNo}</td>
                <td>{gr.date}</td>
                <td>{gr.size}</td>
                <td>
                  <a
                    href={gr.link}
                    download={`GR-${gr.referenceNo}.pdf`}
                    className="pdf-btn"
                  >
                    📄 PDF
                  </a>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
        >
          {lang === "mr" ? "मागील" : "Previous"}
        </button>

        <span>
          {currentPage} / {totalPages}
        </span>

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((p) => p + 1)}
        >
          {lang === "mr" ? "पुढील" : "Next"}
        </button>
      </div>
    </section>
  );
}
