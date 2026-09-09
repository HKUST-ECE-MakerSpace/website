self:
{
  config,
  lib,
  pkgs,
  ...
}:
let
  cfg = config.services.makerspace-website;
in
{
  options.services.makerspace-website = {
    enable = lib.mkEnableOption "the ECE Makerspace marketing site (static)";

    package = lib.mkOption {
      type = lib.types.package;
      default = self.packages.${pkgs.stdenv.hostPlatform.system}.default;
      description = "Static site package to serve; its outPath is the web root.";
    };

    domain = lib.mkOption {
      type = lib.types.str;
      default = "web.ecemaker.space";
      description = "Domain served by Caddy for this site.";
    };
  };

  config = lib.mkIf cfg.enable {
    # No systemd service needed: the site is fully static, so Caddy serves it
    # straight from the (read-only) Nix store path.
    services.caddy.virtualHosts.${cfg.domain} = {
      root = "${cfg.package}";
      extraConfig = ''
        encode zstd gzip

        @static path /_astro/*
        header @static Cache-Control "public, max-age=31536000, immutable"

        file_server

        handle_errors {
          rewrite * /404.html
          file_server
        }
      '';
    };
  };
}
