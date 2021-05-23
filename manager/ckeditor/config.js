/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
    config.scayt_autoStartup = true;
	config.extraPlugins = 'wordcount,notification';
	config.wordcount = {
		// Whether or not you want to show the Paragraphs Count
		showParagraphs: true,

		// Whether or not you want to show the Word Count
		showWordCount: true,

		// Whether or not you want to show the Char Count
		showCharCount: true
	};
};
