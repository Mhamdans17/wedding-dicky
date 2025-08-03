import React from "react";
import bg from "../assets/bg.jpeg";
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
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "1.5rem 1rem",
        boxSizing: "border-box",
        color: "#fff",
        backdropFilter: "blur(2px) brightness(0.9)",
        overflowY: "auto",
      }}
    >
      <h1 className="fade-up greeting-title" style={{ marginBottom: "0.4rem" }}>
        Happy Wedding
      </h1>

      <h2 className="fade-up greeting-names" style={{ marginBottom: "0.6rem" }}>
        Dicky Wahyudi & Indah Neni Rohana
      </h2>

      <div className="fade-up" style={{ maxWidth: "600px", marginTop: "1rem" }}>
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
            color: "#d4af37",
            fontFamily: "Cinzel, serif",
            marginBottom: "0.6rem",
          }}
        >
          (QS. Al-Furqan: 74)
        </p>
      </div>

      <p
        className="fade-up greeting-wish"
        style={{
          marginTop: "0.8rem",
          marginBottom: "0.6rem",
          lineHeight: "1.5",
          maxWidth: "600px",
        }}
      >
        Semoga cinta kalian tumbuh semakin kuat di setiap langkah.<br />
        Bersama menapaki hari-hari penuh berkah dan kebahagiaan.<br />
        Saling mencintai, saling mendukung, hingga akhir hayat.<br />
        Doa terbaik untuk cinta yang indah ini.
      </p>

      <p
        className="fade-up"
        style={{
          fontSize: "0.8rem",
          color: "#d4af37",
          fontFamily: "Merriweather",
          marginBottom: "0.3rem",
        }}
      >
        Dari Anak Kosan Ghofurian Brotherhood
      </p>

      <p
        className="fade-up"
        style={{
          fontSize: "0.65rem",
          color: "#b4b1aeff",
          fontFamily: "Merriweather",
          marginTop: "0rem",
        }}
      >
        Klik untuk memainkan musik
      </p>
    </div>
  );
}
