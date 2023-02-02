// ©2023 NextRJ Team. All Rights Reserved. MIT license.

/**
 * Utilities for all NextRJ modules.
 *
 * @module
 */

import { JSONValue, parse } from "/deno.land/std/encoding/jsonc.ts"

const cfg = parse(Deno.readTextFileSync("./deno.jsonc")) as { [key: string]: JSONValue | undefined }

export const version = (cfg.version ?? "unknown") as string
