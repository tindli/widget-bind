
var markoWidgets = require('marko-widgets');
var template = require('../../components/app-test-component/template.marko');

module.exports = function(req, res) {
    

    template.render({param1: "blah"}, function(err, html, out) {
        
        var widgetIds = markoWidgets.getRenderedWidgetIds(out);

        // Serialize the HTML and the widget IDs to the browser
        res.json({
            html: html,
            widgetIds: widgetIds
        });
    });
}
