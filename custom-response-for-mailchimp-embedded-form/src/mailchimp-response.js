document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        // document ready
        // select the target node
        var target = document.getElementById('mce-success-response');

        // create an observer instance
        var observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (target.innerHTML === crmef_mailchimp_response_data.mailchimpDefaultResponseMessage) {
                    target.innerHTML = crmef_mailchimp_response_data.customMailchimpResponseMessage;
                }
            });
        });

        // configuration of the observer:
        var config = { attributes: true, childList: true, characterData: true };

        // pass in the target node, as well as the observer options
        observer.observe(target, config);
    }
};