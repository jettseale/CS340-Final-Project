(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['diseaseModal'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div id=\"modal-backdrop\" class=\"hidden\"></div>\n<div id=\"disease-modal\" class=\"hidden\">\n    <div class=\"modal-dialogue\">\n        <div class=\"modal-header\">\n            <h3>Disease Information</h3>\n        </div>\n\n        <div class=\"modal-body\">\n            <h5> ID: "
    + alias4(((helper = (helper = helpers.dID || (depth0 != null ? depth0.dID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dID","hash":{},"data":data,"loc":{"start":{"line":9,"column":21},"end":{"line":9,"column":28}}}) : helper)))
    + " </h5>\n            <h5>Name: "
    + alias4(((helper = (helper = helpers.dName || (depth0 != null ? depth0.dName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dName","hash":{},"data":data,"loc":{"start":{"line":10,"column":22},"end":{"line":10,"column":31}}}) : helper)))
    + "</h5>\n            <div class=\"disease-card-name\">\n                <p class=\"disease-card-name-p\"> </p>\n            </div>\n\n            <h5>Treatment Options: </h5>\n            <div class=\"disease-card-id\">\n                <div class=\"treat-options\">\n                    <h6> ID: "
    + alias4(((helper = (helper = helpers.tID || (depth0 != null ? depth0.tID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tID","hash":{},"data":data,"loc":{"start":{"line":18,"column":29},"end":{"line":18,"column":36}}}) : helper)))
    + " </h6>\n                    <h6>Name: "
    + alias4(((helper = (helper = helpers.tName || (depth0 != null ? depth0.tName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tName","hash":{},"data":data,"loc":{"start":{"line":19,"column":30},"end":{"line":19,"column":39}}}) : helper)))
    + "</h6>\n                </div>\n            </div>\n        </div>\n\n        <button type=\"button\" onclick=\"closeModalDisease()\" class=\"exit-modal-button\">Exit</button>\n    </div>\n</div>\n";
},"useData":true});
})();