import BrandMark from "./BrandMark";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-content">
        <span className="site-footer-brand">
          <BrandMark />
          <span>MAHABUB — FULL STACK DEVELOPER</span>
        </span>
        <a href="#home">BACK TO TOP ↑</a>
      </div>
    </footer>
  );
}
