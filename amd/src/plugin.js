// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * Import from Word for the TipTap editor: the officePlugin of @kelsoncm/tiptap-core with the
 * mammoth browser build shipped in thirdparty/mammoth. The document never leaves the browser.
 *
 * @module     tiptap_office/plugin
 * @copyright  2026 Kelson da Costa Medeiros <kelsoncm@gmail.com>
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

import Notification from 'core/notification';
import {getString} from 'core/str';

/** @type {Promise<Object>|null} mammoth, loaded once per page. */
let mammothPromise = null;

/**
 * Builds the plugin.
 *
 * @param {Object} KelsonTiptap API of @kelsoncm/tiptap-core.
 * @param {Object} config Data from tiptap_office\plugininfo::get_config_for_context().
 * @param {Object} environment Locale id of the Moodle strings.
 * @returns {Promise<Object>} EditorPlugin.
 */
export const getPlugin = async(KelsonTiptap, config, environment) => {
    if (!mammothPromise) {
        mammothPromise = new Promise((resolve, reject) => {
            window.require([config.mammothUrl], resolve, reject);
        });
    }
    const [mammoth, label] = await Promise.all([mammothPromise, getString('importword', 'tiptap_office')]);
    const plugin = KelsonTiptap.officePlugin({mammoth, onError: (error) => Notification.exception(error)});
    return {
        ...plugin,
        messages: {...plugin.messages, [environment.locale]: {'editor.io.importWord': label}},
    };
};
