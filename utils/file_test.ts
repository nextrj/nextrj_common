import { assert } from "../deps.ts"
import { exists } from "./file.ts"

Deno.test("exists", async () => {
  const file = "app.log"
  try {
    await Deno.remove(file)
    // deno-lint-ignore no-empty
  } catch (_) {}

  assert(!(await exists(file)))

  await Deno.writeTextFile(file, "")
  assert(await exists(file))
})
