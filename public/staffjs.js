(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['staffModal'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div id=\"modal-backdrop\" class=\"hidden\"></div>\n<div id=\"staff-modal\" class=\"hidden\">\n	<div class=\"modal-dialogue\">\n		<div class=\"modal-header\">\n			<h3>Name: "
    + alias4(((helper = (helper = helpers.sName || (depth0 != null ? depth0.sName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sName","hash":{},"data":data,"loc":{"start":{"line":5,"column":13},"end":{"line":5,"column":22}}}) : helper)))
    + "</h3>\n		</div>\n\n		<div class=\"modal-body\">\n			<div class=\"staff-modal-sid\">Staff ID: "
    + alias4(((helper = (helper = helpers.sID || (depth0 != null ? depth0.sID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sID","hash":{},"data":data,"loc":{"start":{"line":9,"column":42},"end":{"line":9,"column":49}}}) : helper)))
    + "</div>\n\n			<div class=\"staff-building-id\">Staff Building ID: "
    + alias4(((helper = (helper = helpers.Staff_bID || (depth0 != null ? depth0.Staff_bID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Staff_bID","hash":{},"data":data,"loc":{"start":{"line":11,"column":53},"end":{"line":11,"column":66}}}) : helper)))
    + "</div>\n\n			<div class=\"staff-modal-position\">Position: "
    + alias4(((helper = (helper = helpers.Employee_Type || (depth0 != null ? depth0.Employee_Type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Employee_Type","hash":{},"data":data,"loc":{"start":{"line":13,"column":47},"end":{"line":13,"column":64}}}) : helper)))
    + "</div>\n\n			<div class=\"num-of-patients\"> Number of Patients Overseeing: "
    + alias4(((helper = (helper = helpers.numpatients || (depth0 != null ? depth0.numpatients : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"numpatients","hash":{},"data":data,"loc":{"start":{"line":15,"column":64},"end":{"line":15,"column":79}}}) : helper)))
    + "</div>\n\n	<button type=\"button\" onclick=\"closeModalStaff()\"  class=\"exit-modal-button\">Exit</button>\n</div>\n</div>\n</div>\n";
},"useData":true});
})();