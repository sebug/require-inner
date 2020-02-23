define(["lib/knockout"], function (ko) {

    function getMessage() {
	return Promise.resolve('Hello from async');
    }
    
    class ShellViewModel {
	constructor() {
	    this.message = ko.observable('Hello from Knockout component');
	    this.init = this.init.bind(this);
	    setTimeout(this.init);
	}

	async init() {
	    const msg = await getMessage();
	    this.message(msg);
	}
    }

    ko.components.register('app-shell', {
	viewModel: ShellViewModel,
	template: '<main>' +
	    '<h1><span data-bind="text: message"></span></h1>' +
	    '</main>'
    });
});
