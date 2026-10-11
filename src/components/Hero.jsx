import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import Reveal from "./Reveal.jsx";
import { heroStats } from "../data.js";

export default function Hero() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 700], [0, reduce ? 0 : 90]);

  return (
    <section
      id="hero"
      className="hero-section"
      style={{
        position: "relative",
        zIndex: 1,
        minHeight: "min(94vh, 940px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        gap: "clamp(14px, 3vw, 30px)",
        padding:
          "clamp(120px, 18vh, 200px) clamp(14px, 4vw, 56px) clamp(30px, 6vw, 72px)",
      }}>
      <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
        <motion.img
          src="/images/cover.jpg"
          alt="Контейнерний будиночок з фасадом під камінь"
          style={{
            width: "100%",
            height: "112%",
            objectFit: "cover",
            objectPosition: "50% 72%",
            y,
            willChange: "transform",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(20,19,22,0.38) 0%, rgba(20,19,22,0.04) 26%, rgba(20,19,22,0.06) 52%, rgba(20,19,22,0.58) 88%, rgba(20,19,22,0.76) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(100deg, rgba(20,19,22,0.48) 0%, rgba(20,19,22,0.22) 42%, rgba(20,19,22,0.03) 72%, rgba(20,19,22,0) 100%)",
          }}
        />
      </div>

      <Reveal
        immediate
        className="hero-badge-wrap"
        style={{ width: "100%", maxWidth: 1180, margin: "0 auto" }}>
        <div
          className="hero-badge"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
            padding: "9px 18px",
            borderRadius: 999,
            border: "1px solid rgba(255,255,255,0.22)",
            background: "rgba(255,255,255,0.10)",
            backdropFilter: "blur(var(--glass))",
            WebkitBackdropFilter: "blur(var(--glass))",
            fontSize: 12,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#fff",
            fontWeight: 600,
          }}>
          Модульні рішення · Готовність до 15 днів
        </div>
      </Reveal>

      <div
        className="hero-content"
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 1180,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "clamp(14px, 3vw, 30px)",
        }}>
        <Reveal
          immediate
          delay={0.06}
          style={{
            alignSelf: "flex-start",
            maxWidth: "min(100%, 74ch)",
            display: "flex",
            flexDirection: "column",
            gap: "clamp(12px, 1.6vw, 20px)",
            padding: "clamp(16px, 2vw, 26px) clamp(16px, 2.2vw, 30px)",
            borderRadius: 24,
            background:
              "linear-gradient(180deg, rgba(20,19,22,0.5), rgba(20,19,22,0.72))",
            border: "1px solid rgba(255,255,255,0.09)",
          }}>
          <h1
            style={{
              margin: 0,
              fontFamily: "var(--font-display)",
              fontSize: "clamp(29px, 6.4vw, 104px)",
              lineHeight: 1.02,
              fontWeight: 500,
              color: "#fff",
              letterSpacing: "-0.01em",
              textWrap: "balance",
            }}>
            Житло, яке будується швидше,
            <br />
            ніж ви очікуєте
          </h1>
          <p
            style={{
              margin: 0,
              fontSize: "clamp(15px, 1.7vw, 20px)",
              lineHeight: 1.55,
              fontWeight: 300,
              color: "#fff",
            }}>
            Оцинкований каркас, сендвіч-панелі 50 мм, монтаж під ключ. Житло,
            офіс, пост охорони або глемпінг — один модуль або зв’язка з кількох.
          </p>
        </Reveal>

        <Reveal
          immediate
          delay={0.12}
          className="hero-cta"
          style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
          <a href="#prices" className="pill">
            Дивитись моделі та ціни
          </a>
          <a href="#gallery" className="pill pill-ghost">
            Фото об’єктів
          </a>
        </Reveal>

        <Reveal
          immediate
          delay={0.18}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "clamp(8px, 1vw, 14px)",
          }}>
          {heroStats.map((s) => (
            <div
              key={s.value}
              className="glass"
              style={{ padding: "18px 20px", borderRadius: 18 }}>
              <div
                className="tnum"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(22px, 2.4vw, 30px)",
                  fontWeight: 600,
                  color: "#fff",
                }}>
                {s.value}
              </div>
              <div
                style={{
                  marginTop: 4,
                  fontSize: 13,
                  lineHeight: 1.45,
                  color: "rgba(255,255,255,0.75)",
                  fontWeight: 300,
                }}>
                {s.text}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
