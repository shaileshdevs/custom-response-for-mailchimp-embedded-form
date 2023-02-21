import { __ } from '@wordpress/i18n';
import {
	InspectorControls,
} from '@wordpress/block-editor';

import {
	TextControl,
	PanelBody,
	TextareaControl,
} from '@wordpress/components';

/**
 * The SettingsPane contains a panel with block's settings.
 * It needs block's attributes to be proxied make use of
 * attributes property and setAttributes setter.
 *
 * @param {Object} props       Block properties
 * @param {Object} props.props Block properties.
 *
 * @return {WPElement} Element to render.
 */
export default function SettingsPane( { props } ) {
	const { attributes, setAttributes } = props;
	const {
		mailchimpDefaultResponseMessage,
		customMailchimpResponseMessage,
		fileLink
	} = attributes;

	return (
		<InspectorControls>
			<PanelBody
				className="qotd-sign-up-widget"
				title={ __( 'Settings', 'nursehub-blocks' ) }
			>
				<TextControl
					label={ __( 'MailChimp Default Response Message', 'nursehub-blocks' ) }
					value={ mailchimpDefaultResponseMessage }
					onChange={ ( value ) => setAttributes( { mailchimpDefaultResponseMessage: value } ) }
				/>
				<TextControl
					label={ __( 'Custom MailChimp Response Message', 'nursehub-blocks' ) }
					value={ customMailchimpResponseMessage }
					onChange={ ( value ) => setAttributes( { customMailchimpResponseMessage: value } ) }
				/>
				<TextControl
					label={ __( 'File Link to Download', 'nursehub-blocks' ) }
					value={ fileLink }
					onChange={ ( value ) => setAttributes( { fileLink: value } ) }
				/>
			</PanelBody>
		</InspectorControls>
	);
}
