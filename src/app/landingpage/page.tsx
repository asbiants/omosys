import type { Metadata } from "next";
import LandingPortal from "./components/LandingPortal";
import "./landingpage.css";

export const metadata: Metadata = {
  title: "Lonsum Apps — Portal Aplikasi",
  description:
    "Landing page portal untuk mengakses aplikasi Block Analysis, Aerial Survey, Monitoring Pencurian TBS, Perkebunan, dan Laporan.",
};

export default function LandingPage() {
  return <LandingPortal />;
}
