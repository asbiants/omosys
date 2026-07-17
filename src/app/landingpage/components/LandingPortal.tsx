"use client";

import { useState } from "react";

type AppItem = {
  id: string;
  name: string;
  description: string;
  href: string;
  background: string;
  accent: string;
  accentSoft: string;
};

const APPS: AppItem[] = [
  {
    id: "aerialsurvey",
    name: "Aerial Survey",
    description: "Application Performance & Monitoring",
    href: "https://aerialsurvey.lonsum.site/",
    background: "/landingpage/Aerial-clip.jpeg",
    accent: "#fffff",
    accentSoft: "rgba(20, 27, 222, 0.10)",
  },
  {
    id: "blockanalysis",
    name: "Visit Management",
    description: "Plantation Inspection System",
    href: "https://blocktrack.lonsum.site/",
    background: "/landingpage/Block-clip.jpg",
    accent: "#fffff",
    accentSoft: "rgba(5, 231, 5, 0.12)",
  },
  {
    id: "upkcm",
    name: "Upkeep Monitoring (BKM HK)",
    description: "Conditions and Use of Labor for Upkeep",
    href: "#",
    background: "/landingpage/Upkeep.jpg",
    accent: "#fffff",
    accentSoft: "rgba(161, 206, 16, 0.12)",
  },
  {
    id: "hsd",
    name: "HSD Oil Monitoring",
    description: "HSD Oil (Solar), Utilization and Maintenance Cost",
    href: "#",
    background: "/landingpage/Solar.jpg",
    accent: "#fffff",
    accentSoft: "rgba(242, 36, 21, 0.10)",
  },
  {
    id: "premi",
    name: "Harvester Premi",
    description: "Harvester Performance & Income",
    href: "#",
    background: "/landingpage/Panen.jpg",
    accent: "#fffff",
    accentSoft: "rgba(251, 191, 36, 0.12)",
  },
];

const DEFAULT_BACKGROUND = "/landingpage/nature4.jpg";

function AppIcon({ id }: { id: string }) {
  const props = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true,
  };

  switch (id) {
    case "blockanalysis":
      return (
        <svg {...props}>
          <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
          <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
          <rect x="7" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
          <rect x="14" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "aerialsurvey":
      return (
        <svg {...props}>
          <path
            d="M12 3L4 8.5V10.5L12 16L20 10.5V8.5L12 3Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M8 12L6 20H9L12 16L15 20H18L16 12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="9" r="1.5" fill="currentColor" />
        </svg>
      );
    case "upkcm":
      return (
        <svg {...props}>
          <path
            d="M12 3L4 7V13C4 17.5 7.5 20.5 12 21C16.5 20.5 20 17.5 20 13V7L12 3Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="11" r="2.5" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M12 13.5V16"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "hsd":
      return (
        <svg {...props}>
          
          <path
            d="M12 3C12 3 6 10 6 14.5C6 17.8 8.7 20.5 12 20.5C15.3 20.5 18 17.8 18 14.5C18 10 12 3 12 3Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M10 15.5C10.4 16.3 11.1 17 12 17"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "premi":
      return (
        <svg {...props}>
          <rect
            x="3"
            y="6"
            width="18"
            height="12"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <circle
            cx="12"
            cy="12"
            r="2"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M17 10H20"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    default:
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
  }
}

export default function LandingPortal() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const activeApp = APPS.find((app) => app.id === hoveredId);

  return (
    <div
      className="landing-portal"
      style={
        {
          "--active-accent": activeApp?.accent ?? "rgba(255,255,255,0.4)",
          "--active-accent-soft": activeApp?.accentSoft ?? "transparent",
        } as React.CSSProperties
      }
    >
      <div className="landing-portal__backgrounds" aria-hidden="true">
        <div
          className={`landing-portal__bg-layer ${hoveredId === null ? "is-active" : ""}`}
          style={{ backgroundImage: `url(${DEFAULT_BACKGROUND})` }}
        />
        {APPS.map((app) => (
          <div
            key={app.id}
            className={`landing-portal__bg-layer ${hoveredId === app.id ? "is-active" : ""}`}
            style={{ backgroundImage: `url(${app.background})` }}
          />
        ))}
        <div className="landing-portal__overlay" />
        <div className="landing-portal__ambient" />
      </div>

      <div className="landing-portal__content">
        <header className="landing-portal__header">
          <p className="landing-portal__eyebrow">Lonsum Apps</p>
          <h1 className="landing-portal__title">OMOSYS</h1>
          <p className="landing-portal__tagline">
            OAD Monitoring System
          </p>
        </header>

        <nav className="landing-portal__nav" aria-label="Daftar aplikasi">
          <ul className="landing-portal__list">
            {APPS.map((app) => {
              const isActive = hoveredId === app.id;

              return (
                <li key={app.id}>
                  <a
                    href={app.href}
                    className={`landing-portal__item ${isActive ? "is-active" : ""}`}
                    style={
                      {
                        "--accent": app.accent,
                        "--accent-soft": app.accentSoft,
                      } as React.CSSProperties
                    }
                    onMouseEnter={() => setHoveredId(app.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    onFocus={() => setHoveredId(app.id)}
                    onBlur={() => setHoveredId(null)}
                  >
                    <span className="landing-portal__item-icon">
                      <AppIcon id={app.id} />
                    </span>

                    <span className="landing-portal__item-body">
                      <span className="landing-portal__item-name">{app.name}</span>
                      <span className="landing-portal__item-desc">
                        {app.description}
                      </span>
                    </span>

                    <span className="landing-portal__item-action" aria-hidden="true">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3 8H13M13 8L9 4M13 8L9 12"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>

                    <span className="landing-portal__item-glow" aria-hidden="true" />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <footer className="landing-portal__footer">
          <span className="landing-portal__footer-dot" aria-hidden="true" />
          <p>
            {activeApp
              ? activeApp.description
              : "Klik untuk melihat pratinjau tema"}
          </p>
        </footer>
      </div>
    </div>
  );
}
