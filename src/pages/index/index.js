
var markoWidgets = require('marko-widgets');

var testComponent = require('../../components/app-test-component');

module.exports = function(req, res) {

    var renderResult = testComponent.render({ param1: 'blah'});
    var widgetIds = markoWidgets.getRenderedWidgetIds(renderResult.out);

    // Serialize the HTML and the widget IDs to the browser
    res.json({
        html: renderResult.html,
        widgetIds: widgetIds
    });
}
