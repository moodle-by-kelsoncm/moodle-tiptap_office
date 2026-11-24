# Import from Word for the TipTap editor (`tiptap_office`)

Plugin for the Moodle [TipTap editor](https://github.com/moodle-by-kelsoncm/moodle-editor_tiptap)
(`editor_tiptap`). It adds the **Import from Word (.docx)** button: the document is converted to HTML in the
browser by [mammoth](https://github.com/mwilliamson/mammoth.js) and inserted at the cursor. The file is
never uploaded to the server.

## Requirements

- Moodle 4.5 LTS or 5.3 LTS.
- `editor_tiptap` 2.0.0 or later.

## Installation

Unzip the plugin into `lib/editor/tiptap/plugins/office` (or, on Moodle 5.1+,
`public/lib/editor/tiptap/plugins/office`) and visit *Site administration > Notifications*.

With Git:

```bash
git clone https://github.com/moodle-by-kelsoncm/moodle-tiptap_office.git lib/editor/tiptap/plugins/office
```

Sites that installed `tiptap_office` bundled with `editor_tiptap` 2.0.0 only need to copy this plugin to the
same folder: the upgrade keeps the settings.

## Use

Enable, disable and order the plugin in
*Site administration > Plugins > Text editors > TipTap editor > General settings*. Users need the
capability `tiptap/office:use` (granted to every authenticated user by default).

What is imported: paragraphs, headings, bold, italic, underline, lists, tables, links and images (embedded
as data URIs). Word styles that have no HTML equivalent are dropped.

## Privacy

The plugin stores no personal data (null privacy provider). Documents are read and converted in the
browser.

## Third-party library

`thirdparty/mammoth/mammoth.browser.min.js`: mammoth 1.13.0, BSD-2-Clause (see `thirdpartylibs.xml`).

## License

GNU GPL v3 or later. See [LICENSE.md](LICENSE.md).
