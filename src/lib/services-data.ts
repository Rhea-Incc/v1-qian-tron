import craneAsset from "@/assets/crane.jpg.asset.json";
import factoryAsset from "@/assets/factory.jpg.asset.json";
import truckBlueAsset from "@/assets/truck-blue.jpg.asset.json";
import truckRedAsset from "@/assets/truck-red.jpg.asset.json";
import komatsuAsset from "@/assets/komatsu.jpg.asset.json";
import volvoAsset from "@/assets/volvo.jpg.asset.json";
import { toAbsoluteUrl } from "@/lib/site";

export type Service = {
  slug: string;
  index: string;
  name: string;
  tagline: string;
  hero: string;
  headline: string;
  intro: string;
  deliverables: string[];
  process: { k: string; v: string }[];
  metrics: { k: string; v: string }[];
};

export const SERVICES: Service[] = [
  {
    slug: "global-sourcing",
    index: "01",
    name: "Global Sourcing",
    tagline: "Tier-one origins across Asia, Europe and the Middle East.",
    hero: toAbsoluteUrl(factoryAsset.url),
    headline: "OEM-direct. Vetted every time.",
    intro:
      "QianTron maintains standing relationships with tier-one OEMs and their authorised export channels — every unit specified, sourced and dispatched under our own commissioning protocol.",
    deliverables: [
      "OEM-direct procurement",
      "Country-of-origin certification",
      "Serial-number provenance",
      "Warranty registration on delivery",
    ],
    process: [
      { k: "01", v: "Specification & scope" },
      { k: "02", v: "Origin selection" },
      { k: "03", v: "Purchase order & LC" },
      { k: "04", v: "Factory readiness" },
    ],
    metrics: [
      { k: "Tier-1", v: "OEM channels only" },
      { k: "18", v: "Origin countries" },
      { k: "100%", v: "Documented provenance" },
    ],
  },
  {
    slug: "inspection",
    index: "02",
    name: "Pre-Shipment Inspection",
    tagline: "Every unit, mechanically verified before sail.",
    hero: toAbsoluteUrl(komatsuAsset.url),
    headline: "No unit sails un-inspected.",
    intro:
      "QianTron inspectors verify every machine at the factory gate — hydraulic, electrical, drivetrain and structural — before loading. Reports and photo dossiers are issued to the client pre-departure.",
    deliverables: [
      "Multi-point mechanical inspection",
      "Photographic dossier",
      "Fluid & filter verification",
      "Load-test where applicable",
    ],
    process: [
      { k: "01", v: "Factory acceptance" },
      { k: "02", v: "Multi-point inspection" },
      { k: "03", v: "Client dossier issued" },
      { k: "04", v: "Load authorisation" },
    ],
    metrics: [
      { k: "120+", v: "Inspection points" },
      { k: "48 hr", v: "Report turnaround" },
      { k: "0", v: "Un-inspected releases" },
    ],
  },
  {
    slug: "ocean-shipping",
    index: "03",
    name: "Ocean Shipping",
    tagline: "RoRo and container corridors, purpose-selected per unit.",
    hero: toAbsoluteUrl(truckBlueAsset.url),
    headline: "RoRo and container, engineered per unit.",
    intro:
      "We book vessel capacity across the Asia–Africa and Europe–Africa lanes on RoRo and container services, matching stowage class to unit dimensions and delivery window.",
    deliverables: [
      "Vessel capacity booking",
      "RoRo or container stowage selection",
      "Marine cargo insurance",
      "Live tracking to discharge port",
    ],
    process: [
      { k: "01", v: "Lane & vessel selection" },
      { k: "02", v: "Stowage planning" },
      { k: "03", v: "Loading supervision" },
      { k: "04", v: "In-transit tracking" },
    ],
    metrics: [
      { k: "D+18", v: "Median in-transit" },
      { k: "RoRo", v: "Dedicated capacity" },
      { k: "24/7", v: "Tracking desk" },
    ],
  },
  {
    slug: "port-clearance",
    index: "04",
    name: "Port Clearance",
    tagline: "Clearance measured in hours, not weeks.",
    hero: toAbsoluteUrl(craneAsset.url),
    headline: "Clearance, measured in hours.",
    intro:
      "Pre-filed HS documentation, licensed customs agents and trusted-trader lane access mean QianTron consignments clear East African ports faster than the trade average.",
    deliverables: [
      "Pre-filed HS classification",
      "Duty assessment & payment",
      "Trusted-trader lane routing",
      "Gate-out authorisation",
    ],
    process: [
      { k: "01", v: "Documentation pre-file" },
      { k: "02", v: "Duty assessment" },
      { k: "03", v: "Inspection lane" },
      { k: "04", v: "Release & gate-out" },
    ],
    metrics: [
      { k: "6 hr", v: "Median clearance" },
      { k: "98%", v: "Pre-filed documents" },
      { k: "Green", v: "Trusted-trader lane" },
    ],
  },
  {
    slug: "inland-transport",
    index: "05",
    name: "Inland Transport",
    tagline: "Escorted corridors across East and Central Africa.",
    hero: toAbsoluteUrl(truckRedAsset.url),
    headline: "Escorted corridors, bond-transit ready.",
    intro:
      "From port to project site, QianTron controls the inland leg with dedicated low-loaders, escort protocols and bond-transit documentation for cross-border consignments.",
    deliverables: [
      "Low-loader & abnormal-load haulage",
      "Escort & permit coordination",
      "Cross-border bond transit",
      "Live position reporting",
    ],
    process: [
      { k: "01", v: "Route survey" },
      { k: "02", v: "Permit coordination" },
      { k: "03", v: "Escort & convoy" },
      { k: "04", v: "Site handover" },
    ],
    metrics: [
      { k: "+48 hr", v: "Port to site median" },
      { k: "Bond", v: "Transit-cleared" },
      { k: "GPS", v: "Live tracked" },
    ],
  },
  {
    slug: "doorstep-delivery",
    index: "06",
    name: "Doorstep Delivery & Commissioning",
    tagline: "Off-loaded, commissioned, handed over — site-ready.",
    hero: toAbsoluteUrl(volvoAsset.url),
    headline: "Site-ready on arrival.",
    intro:
      "QianTron off-loads, fuels, fluid-checks and commissions each unit on-site. Operator familiarisation and warranty registration are completed before we leave.",
    deliverables: [
      "On-site off-loading",
      "Fluids & first-service check",
      "Operator familiarisation",
      "Warranty registration",
    ],
    process: [
      { k: "01", v: "Site off-load" },
      { k: "02", v: "Commissioning check" },
      { k: "03", v: "Operator brief" },
      { k: "04", v: "Handover certificate" },
    ],
    metrics: [
      { k: "24 mo", v: "Powertrain warranty" },
      { k: "On-site", v: "Commissioning" },
      { k: "Signed", v: "Handover certificate" },
    ],
  },
];

export const serviceBySlug = (slug: string) => SERVICES.find((s) => s.slug === slug);
