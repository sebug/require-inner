define(["lib/knockout"], function (ko) {
    class ShellViewModel {
	constructor() {
	    this.message = ko.observable('Hello from Knockout component');
	}
    }

    ko.components.register('app-shell', {
	viewModel: ShellViewModel,
	template: '<main>' +
	    '<h1><span data-bind="text: message"></span></h1>' +
	    '</main>'
    });
});
