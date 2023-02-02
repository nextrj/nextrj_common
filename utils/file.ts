/** Check whether the path exists. */
export async function exists(path: string): Promise<boolean> {
  try {
    await Deno.lstat(path)
    return true
  } catch (err) {
    if (err instanceof Deno.errors.NotFound) return false
    else throw err
  }
}
