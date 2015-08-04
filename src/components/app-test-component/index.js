



module.exports = require('marko-widgets').defineComponent({
    template: require.resolve('./template.marko'),

    getInitialState: function (input) {
        
        return {
            stateProp: input.param1
        };
    },

    getTemplateData: function (state, input) {
  
        return {
            stateProp: state.stateProp
        };
    }
});