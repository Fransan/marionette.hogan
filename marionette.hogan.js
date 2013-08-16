(function(Backbone, Hogan){
    "use strict";
    
    Backbone.Marionette.Renderer.render = function(template, data) {
        if (!template) {
            var error = new Error("Cannot render the template since it's false, null or undefined.");
            error.name = "TemplateNotFoundError";
            throw error;
        }
        
        if (_.isObject(template) && template.render) {
            //already a compile and have a render method
            return template.render(data);
        } else {
            // template needs to be compile first
            return Hogan.compile(template).render(data)
        }
    }
    
    return Backbone;
    
})(Backbone, Hogan);