import type { Metadata } from "next";
import LandingPortal from "./landingpage/components/LandingPortal";
import "./landingpage/landingpage.css";

export const metadata: Metadata = {
  title: "Lonsum Apps — Portal Aplikasi",
  description:
    "Landing page portal untuk mengakses aplikasi Aerial Survey, Visit Management, Upkeep Monitoring, dan lainnya.",
};

export default function Home() {
  return <LandingPortal />;
}