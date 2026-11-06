#!/usr/bin/env bash
set -euo pipefail

site_source="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")/.." && pwd)"
site_base=/var/www/xujinghui.com.cn

node "$site_source/build.mjs"
mkdir -p "$site_base/releases"
if [[ -e "$site_base/current" && ! -L "$site_base/current" ]]; then
  printf '%s\n' 'Refusing to replace current: expected a release symlink.' >&2
  exit 1
fi

site_previous="$(readlink "$site_base/current" || true)"
site_release="$(mktemp -d "$site_base/releases/$(date +%Y%m%d-%H%M%S)-XXXXXX")"
cp -a "$site_source/dist/." "$site_release/"
chmod -R u=rwX,go=rX "$site_release"
site_stage="$(mktemp -d "$site_base/.stage-XXXXXX")"
trap 'rm -f -- "$site_stage/current"; rmdir -- "$site_stage" 2>/dev/null || true' EXIT
ln -s "$site_release" "$site_stage/current"
mv -Tf "$site_stage/current" "$site_base/current"
printf 'Published: %s\nPrevious: %s\n' "$site_release" "$site_previous"
