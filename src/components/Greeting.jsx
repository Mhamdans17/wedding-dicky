import React from "react";
import bg from "../assets/image.png";
import "../styles/animation.css";

export default function Greeting() {
  return (
    <div
      className="greeting-container"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "1.5rem 1rem",
        boxSizing: "border-box",
        color: "#fff",
        overflowY: "auto",
      }}
    >
      {/* Kotak putih transparan */}
      <div
        className="fade-up"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.15)",
          borderRadius: "1rem",
          padding: "1.2rem",
          backdropFilter: "blur(4px)",
          boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
          maxWidth: "700px",
          width: "100%",
          color: "#d4af37",
        }}
      >
        <h1 className="greeting-title" style={{ marginBottom: "0.4rem" }}>
          Happy Wedding
        </h1>

        <h2 className="greeting-names" style={{ marginBottom: "0.6rem" }}>
          Dicky Wahyudi<br />&<br />Indah Neni Rohana
        </h2>

        <div style={{ marginTop: "1rem" }}>
          <p
            className="greeting-doa"
            style={{ direction: "rtl", marginBottom: "0.4rem", lineHeight: "1.8" }}
          >
            اللَّهُمَّ هَبْ لَهُمَا مِنْ أَزْوَاجِهِمَا وَذُرِّيَّاتِهِمَا قُرَّةَ أَعْيُنٍ، وَاجْعَلْهُمَا لِلْمُتَّقِينَ إِمَامًا
          </p>

          <p
            className="greeting-wish"
            style={{ marginBottom: "0.4rem", lineHeight: "1.6" }}
          >
            “Ya Allah, anugerahkanlah kepada mereka pasangan dan keturunan
            sebagai penyejuk hati mereka, dan jadikanlah mereka pemimpin bagi
            orang-orang yang bertakwa.”
          </p>

          <p
            style={{
              fontSize: "0.8rem",
              fontStyle: "italic",
              fontFamily: "Cinzel, serif",
              marginBottom: "0.6rem",
            }}
          >
            (QS. Al-Furqan: 74)
          </p>
        </div>

        <p
          className="greeting-wish"
          style={{
            marginTop: "0.8rem",
            marginBottom: "0.6rem",
            lineHeight: "1.5",
          }}
        >
          Semoga cinta kalian tumbuh semakin kuat di setiap langkah, bersama menapaki hari-hari penuh berkah dan kebahagiaan. Saling mencintai, saling mendukung, hingga akhir hayat. Doa terbaik untuk cinta yang indah ini.
        </p>

        <p
          style={{
            fontSize: "0.8rem",
            fontFamily: "Merriweather",
            marginBottom: "0.3rem",
          }}
        >
          Dari Anak Kosan Ghofurian Brotherhood
        </p>

        <p
          style={{
            fontSize: "0.65rem",
            color: "#d4af37",
            fontFamily: "Merriweather",
            marginTop: "0rem",
          }}
        >
          Klik untuk memainkan musik
        </p>
      </div>
    </div>
  );
}
