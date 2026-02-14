export function applyLocalSmallClawEnvAliases(
  env: NodeJS.ProcessEnv = process.env,
): NodeJS.ProcessEnv {
  const localHome = env.LOCALSMALLCLAW_HOME?.trim();
  if (localHome) {
    if (!env.OPENCLAW_HOME?.trim()) {
      env.OPENCLAW_HOME = localHome;
    }
    if (!env.OPENCLAW_STATE_DIR?.trim()) {
      env.OPENCLAW_STATE_DIR = localHome;
    }
  }

  const localConfig = env.LOCALSMALLCLAW_CONFIG?.trim();
  if (localConfig && !env.OPENCLAW_CONFIG_PATH?.trim()) {
    env.OPENCLAW_CONFIG_PATH = localConfig;
  }

  const localCache = env.LOCALSMALLCLAW_CACHE?.trim();
  if (localCache && !env.OPENCLAW_CACHE_DIR?.trim()) {
    env.OPENCLAW_CACHE_DIR = localCache;
  }

  return env;
}
