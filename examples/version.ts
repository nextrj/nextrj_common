import { blue } from "../deps.ts"
import { version } from "../mod.ts"
import { yellow } from "https://deno.land/std/fmt/colors.ts"

console.log(
  `${yellow("version")} ${blue(version)} is only for test publication`,
)
