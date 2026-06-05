// List of glif IDs that should be available as tools
// Populated from the GLIF_IDS environment variable (comma-separated)
const glifIdsEnv = process.env.GLIF_IDS;
export const GLIF_IDS: string[] = glifIdsEnv
  ? glifIdsEnv
      .split(",")
      .map((id) => id.trim())
      .filter(Boolean)
  : [];
