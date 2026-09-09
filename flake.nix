{
  description = "makerspace-website — ECE Makerspace marketing site (static Astro)";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-26.05";
  };

  outputs =
    { self, nixpkgs }:
    let
      systems = [
        "x86_64-linux"
        "aarch64-linux"
        "x86_64-darwin"
        "aarch64-darwin"
      ];
      forAllSystems =
        f: nixpkgs.lib.genAttrs systems (system: f nixpkgs.legacyPackages.${system});
    in
    {
      packages = forAllSystems (pkgs: rec {
        makerspace-website = pkgs.callPackage ./package.nix { };
        default = makerspace-website;
      });

      nixosModules.default = import ./nixos-module.nix self;
    };
}
