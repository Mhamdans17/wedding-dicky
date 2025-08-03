import React from "react";
import bg from "../assets/bg.jpeg";
import "../styles/animation.css";

export default function Greeting() {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "1.5rem",
        color: "#fff",
        backdropFilter: "blur(2px) brightness(0.9)",
      }}
    >
      <h1
        className="fade-up"
        style={{
          fontFamily: "Great Vibes",
          fontSize: "5rem",
          marginTop: "0rem",
          marginBottom: "0.2rem",
          color: "#d4af37",
          textShadow: "0 1px 4px rgba(0,0,0,0.2)",
        }}
      >
        Happy Wedding
      </h1>

      <h2
        className="fade-up"
        style={{
          fontSize: "1.6rem",
          fontWeight: "400",
          marginTop:"1.1rem",
          marginBottom: "0rem",
          fontFamily: "Libertinus Serif, serif",
          color: "#d4af37",
          textShadow: "0 1px 3px rgba(0,0,0,0.15)",
        }}
      >
        Dicky Wahyudi & Indah Neni Rohana
      </h2>
        <div className="fade-up" style={{ marginTop: "2.5rem", textAlign: "center", maxWidth: "90%" }}>
            <p
                style={{
                fontSize: "1.5rem",
                fontFamily: "'Amiri', serif",
                color: "#d4af37",
                direction: "rtl",
                lineHeight: "2",
                marginTop:"0.5rem",
                marginBottom: "1rem",
                }}
            >
                اللَّهُمَّ هَبْ لَهُمَا مِنْ أَزْوَاجِهِمَا وَذُرِّيَّاتِهِمَا قُرَّةَ أَعْيُنٍ، وَاجْعَلْهُمَا لِلْمُتَّقِينَ إِمَامًا
            </p>

            <p
                style={{
                fontSize: "0.95rem",
                color: "#d4af37",
                fontFamily: "Libertinus Serif, serif",
                lineHeight: "1.5",
                }}
            >
                “Ya Allah, anugerahkanlah kepada mereka pasangan dan keturunan sebagai penyejuk hati mereka,<br />
                dan jadikanlah mereka pemimpin bagi orang-orang yang bertakwa.”
            </p>

            <p
                style={{
                fontSize: "0.85rem",
                color: "#d4af37",
                fontStyle: "italic",
                marginTop: "0.5rem",
                fontFamily: "Cinzel, serif",
                }}
            >
                (QS. Al-Furqan ayat 74)
            </p>
            </div>


      <p
        className="fade-up"
        style={{
          fontSize: "1rem",
          maxWidth: "90%",
          lineHeight: "1.2",
          fontWeight: "400",
          color: "#d4af37",
          fontFamily: "Libertinus Serif, serif",
          textShadow: "0 1px 2px rgba(0,0,0,0.1)",
        }}
      >
        Semoga cinta kalian tumbuh semakin kuat di setiap langkah.<br />
        Bersama menapaki hari-hari penuh berkah dan kebahagiaan.<br />
        Saling mencintai, saling mendukung, hingga akhir hayat.<br />
        Doa terbaik untuk cinta yang indah ini
      </p>

      <p
        className="fade-up"
        style={{
          fontSize: "0.8rem",
          maxWidth: "90%",
          lineHeight: "1.2",
          fontWeight: "400",
          color: "#d4af37",
          fontFamily: "Merriweather",
          textShadow: "0 1px 2px rgba(0,0,0,0.1)",
        }}
      >
        Dari Anak Kosan Ghofurian Brotherhood<br />
      </p>

      <p
        className="fade-up"
        style={{
          fontSize: "0.6rem",
          marginTop:"0rem",
          maxWidth: "90%",
          lineHeight: "1.2",
          fontWeight: "100",
          color: "#b4b1aeff",
          fontFamily: "Merriweather",
          textShadow: "0 1px 2px rgba(0,0,0,0.1)",
    
        }}
      >
        Klik to play music<br />
      </p>

    </div>
  );
}