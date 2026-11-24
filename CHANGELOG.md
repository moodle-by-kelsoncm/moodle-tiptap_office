# Changelog

All notable changes to `tiptap_office` are documented here. The format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and the project uses [SemVer](https://semver.org/).

## 2.1.0 - 2026-11-24

### Changed

- Published as a separate plugin. Until `editor_tiptap` 2.0.0 it was bundled with the editor; from 2.0.1
  each site decides whether to install it, because it matches a third-party TinyMCE plugin.
- Sites that installed it with `editor_tiptap` 2.0.0 upgrade in place (same component, higher version).

## 2.0.0 - 2026-11-23

### Added

- Import from Word (`.docx`) in the TipTap editor, converted in the browser by `mammoth` 1.13.0. The
  document never leaves the browser.
