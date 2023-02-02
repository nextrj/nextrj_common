// ©2023 NextRJ Team. All Rights Reserved. MIT license.

/**
 * Utilities for all NextRJ modules.
 *
 * @module
 */

import { exists } from "./utils/file.ts"

const file = "./deno.json"
const cfg = (await exists(file)) ? JSON.parse(Deno.readTextFileSync(file)) : {}
export const version = (cfg.version ?? "unknown") as string

export * from "./utils/file.ts"
