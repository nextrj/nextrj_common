// ©2023 NextRJ Team. All Rights Reserved. MIT license.

/**
 * Utilities for all NextRJ modules.
 *
 * @module
 */

const cfg = JSON.parse(Deno.readTextFileSync("./deno.json"))

export const version = (cfg.version ?? "unknown") as string
