export default function Footer() {
  return (
    <footer
      style={{
        position: "relative",
        zIndex: 1,
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 14,
        padding: "26px clamp(16px, 4vw, 56px) 40px",
        borderTop: "1px solid rgba(255,255,255,0.1)",
        fontSize: 13,
        color: "rgba(255,255,255,0.55)",
      }}>
      <div>
        Контейнерні будиночки — модульні рішення, виробництво Туреччина · ЄС
      </div>
      <div>Ціни в євро, з урахування доставки</div>
    </footer>
  );
}
