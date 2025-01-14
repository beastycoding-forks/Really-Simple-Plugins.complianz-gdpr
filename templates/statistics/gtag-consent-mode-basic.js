window['gtag_enable_tcf_support'] = {enable_tcf_support};
window.dataLayer = window.dataLayer || [];
function gtag(){
	dataLayer.push(arguments);
}

gtag('set', 'dYWVlZG', true);
gtag('set', 'ads_data_redaction', {ads_data_redaction});
gtag('set', 'url_passthrough', {url_passthrough});
gtag('consent', 'default', {
	'security_storage': "granted",
	'functionality_storage': "granted",
	'personalization_storage': "denied",
	'analytics_storage': 'denied',
	'ad_storage': "denied",
});



document.addEventListener("cmplz_before_categories_consent", function (e) {

	function gtag(){
		dataLayer.push(arguments);
	}
	let consentedCategories = e.detail.categories;
	let preferences = 'denied';
	let statistics = 'denied';
	let marketing = 'denied';

	if (cmplz_in_array( 'preferences', consentedCategories )) {
		preferences = 'granted';
	}

	if (cmplz_in_array( 'statistics', consentedCategories )) {
		statistics = 'granted';
	}

	if (cmplz_in_array( 'marketing', consentedCategories )) {
		marketing = 'granted';
	}
	gtag('consent', 'update', {
		'security_storage': "granted",
		'functionality_storage': "granted",
		'personalization_storage': preferences,
		'analytics_storage': statistics,
		'ad_storage': marketing,
	});

	if ( statistics==='granted' ) {
		gtag('js', new Date());
		{additional_tags}
		gtag('config', '{G_code}', {
				cookie_flags:'secure;samesite=none',
			{anonymize_ip}
		});
	}

});


document.addEventListener("cmplz_revoke", function (e) {
	gtag('consent', 'update', {
		'security_storage': "granted",
		'functionality_storage': "granted",
		'personalization_storage': "denied",
		'analytics_storage': 'denied',
		'ad_storage': "denied",
	});
});
