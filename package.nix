{
  lib,
  buildNpmPackage,
}:

# Static marketing site: `npm run build` emits a fully static `dist/`
# (Astro, output: "static"). No runtime, no server, no state — the package
# output IS the web root, so Caddy serves it straight from the store.
buildNpmPackage {
  pname = "makerspace-website";
  version = (builtins.fromJSON (builtins.readFile ./package.json)).version;

  src = lib.cleanSourceWith {
    src = ./.;
    filter =
      path: type:
      let
        rel = lib.removePrefix (toString ./.) (toString path);
        top = builtins.head (lib.splitString "/" rel);
      in
      !builtins.elem top [
        ".git"
        ".github"
        ".astro"
        "dist"
        "node_modules"
        "result"
      ];
  };

  npmDepsHash = "sha256-N26IyER26cjbwJg4pJM6hjwDEtSUpnOKGkkjkciX14E=";

  npmBuild = "npm run build";

  ASTRO_TELEMETRY_DISABLED = 1;

  installPhase = ''
    runHook preInstall
    mkdir -p $out
    cp -R dist/. $out/
    runHook postInstall
  '';

  meta = {
    description = "ECE Makerspace marketing site — web.ecemaker.space";
    homepage = "https://web.ecemaker.space";
    license = lib.licenses.mit;
    platforms = lib.platforms.all;
  };
}
