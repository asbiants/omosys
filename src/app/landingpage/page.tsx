import type { Metadata } from "next";
import LandingPortal from "./components/LandingPortal";
import "./landingpage.css";

export const metadata: Metadata = {
  title: "Lonsum Apps — Portal Aplikasi",
  description:
    "Landing page portal untuk mengakses aplikasi Aerial Survey, Visit Management, Upkeep Monitoring (BKM HK), HSD Oil Monitoring, dan Harvester Premi",
};

export default function LandingPage() {
  return <LandingPortal />;
}
