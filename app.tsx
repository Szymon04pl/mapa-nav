export default function App() {
  return (
    <iframe
      src="/mapa.html"
      title="Mapa"
      style={{ position: "fixed", inset: 0, width: "100%", height: "100%", border: "none" }}
      allow="geolocation"
    />
  );
}
