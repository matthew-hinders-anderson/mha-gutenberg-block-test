//  Import CSS.
import './style.scss';
import './editor.scss';

( function( blocks, editor, i18n, element ) {
	var el = element.createElement;
	var __ = i18n.__;
	// var RichText = editor.RichText;
	var plainText = editor.PlainText;

	i18n.setLocaleData( window.gutenberg_examples_03.localeData, 'gutenberg-examples' );

	blocks.registerBlockType( 'gutenberg-examples/example-03-editable', {
		title: __( 'Test Block', 'baseline' ),
		icon: 'universal-access-alt',
		category: 'layout',

		attributes: {
			content: {
				type: 'array',
				source: 'children',
				selector: 'p',
			},
		},

		edit: function( props ) {
			var content = props.attributes.content;
			function onChangeContent( newContent ) {
				props.setAttributes( { content: newContent } );
			}

			return el(
				plainText,
				{
					tagName: 'p',
					className: props.className,
					onChange: onChangeContent,
					value: content,
				}
			);
		},

		save: function( props ) {
			return el( plainText.Content, {
				tagName: 'p', value: props.attributes.content,
			} );
		},
	} );
}(
	window.wp.blocks,
	window.wp.editor,
	window.wp.i18n,
	window.wp.element
) );
