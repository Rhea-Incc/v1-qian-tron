/**
 * Shared fabric-pattern configuration.
 *
 * A single source of truth for the concentric-arc decorative layer used
 * across the site. Every page picks a preset so the overall palette,
 * density, opacity range and animation cadence stay unified while each
 * section still varies subtly in tone and corner.
 */

import type { ComponentProps } from "react";
import type { FabricPattern } from "@/components/FabricPattern";

type FabricProps = ComponentProps<typeof FabricPattern>;

/** Global caps — tune here to re-tone the whole site at once. */
export const FABRIC_GLOBAL = {
  opacityMin: 0.09,
  opacityMax: 0.16,
  ringsMin: 26,
  ringsMax: 42,
  spacingMin: 14,
  spacingMax: 18,
  durationMin: 22,
  durationMax: 36,
} as const;

export type FabricPresetName =
  | "hero-bronze"
  | "hero-gold"
  | "editorial-steel"
  | "editorial-bronze"
  | "accent-dragon"
  | "footer-arch"
  | "footer-bronze"
  | "footer-gold";

/**
 * Named presets — pages import these instead of hand-tuning props so the
 * palette, density and animation stay coordinated.
 */
export const FABRIC_PRESETS: Record<FabricPresetName, Omit<FabricProps, "className">> = {
  "hero-bronze":       { tone: "bronze", corner: "br", rings: 34, spacing: 17, opacity: 0.15, motion: "drift",   duration: 30 },
  "hero-gold":         { tone: "gold",   corner: "br", rings: 38, spacing: 16, opacity: 0.14, motion: "drift",   duration: 32 },
  "editorial-steel":   { tone: "steel",  corner: "br", rings: 32, spacing: 15, opacity: 0.13, motion: "drift",   duration: 28 },
  "editorial-bronze":  { tone: "bronze", corner: "bl", rings: 28, spacing: 18, opacity: 0.13, motion: "breathe", duration: 11 },
  "accent-dragon":     { tone: "dragon", corner: "bl", rings: 40, spacing: 14, opacity: 0.12, motion: "breathe", duration: 10 },
  "footer-arch":       { tone: "arch",   corner: "br", rings: 42, spacing: 16, opacity: 0.11, motion: "drift",   duration: 38 },
  "footer-bronze":     { tone: "bronze", corner: "bl", rings: 36, spacing: 15, opacity: 0.09, motion: "breathe", duration: 14 },
  "footer-gold":       { tone: "gold",   corner: "tr", rings: 30, spacing: 17, opacity: 0.08, motion: "drift",   duration: 34 },
};

/** Spread helper: `<FabricPattern {...fabric("hero-bronze")} className="..." />` */
export function fabric(name: FabricPresetName): Omit<FabricProps, "className"> {
  return FABRIC_PRESETS[name];
}
