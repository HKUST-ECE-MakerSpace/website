# HKUST ECE MakerSpace website

The ECE MakerSpace site, serving **[web.ecemaker.space](https://web.ecemaker.space)**
(replacing `maker.ece.hkust.edu.hk`).

Fully static [Astro](https://astro.build): no runtime and no server.
The nix package output **is** the web root, so Caddy serves it straight
from the Nix store.

## Develop

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static site → dist/
npm run preview   # serve dist/
```

## Build with nix

```bash
nix build          # ./result = the web root (index.html, assets, …)
```

The flake exposes, for `x86_64-linux`, `aarch64-linux`, `x86_64-darwin`,
`aarch64-darwin`:

| Output | What |
| --- | --- |
| `packages.makerspace-website` / `packages.default` | static site (web root) |
| `nixosModules.default` | `services.makerspace-website` Caddy vhost module |

## Deploying (NixOS)

This repo is consumed as a flake input by the host config
([HKUST-ECE-MakerSpace/lab-nixos](https://github.com/HKUST-ECE-MakerSpace/lab-nixos)),
same pattern as `wikispace`:

```nix
# lab-nixos flake.nix — public repo, no token needed
website = {
  url = "github:HKUST-ECE-MakerSpace/website";
  inputs.nixpkgs.follows = "nixpkgs";
};
```

```nix
# lab-nixos features/website.nix
{ inputs, ... }: {
  imports = [ inputs.website.nixosModules.default ];
  services.makerspace-website.enable = true;   # domain defaults to web.ecemaker.space
}
```

Then import `../../features/website.nix` in `hosts/eez156/configuration.nix`
alongside the other features and deploy:

```bash
nix flake lock --update-input website   # on a machine with the repo
git push
# on eez156:
cd /etc/nixos && git pull
nixos-rebuild switch --flake .#eez156
```

`services.makerspace-website` options:

| Option | Default | Purpose |
| --- | --- | --- |
| `enable` | `false` | serve the site via Caddy |
| `package` | this flake's package | static site to serve |
| `domain` | `"web.ecemaker.space"` | vhost domain (auto-TLS via Caddy) |

Module behaviour: static `root` + `file_server`, zstd/gzip `encode`,
immutable cache headers for `/_astro/*` (hashed build output), and a
`404.html` error handler.

## Status

Live at https://web.ecemaker.space since 2026-09-09, deployed as a flake
input of
[lab-nixos](https://github.com/HKUST-ECE-MakerSpace/lab-nixos)
(`services.makerspace-website` on eez156). Site updates: push here, then on
the server `cd /etc/nixos && nix flake lock --update-input website &&
nixos-rebuild switch --flake .#eez156`.
