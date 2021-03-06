(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['locationModal'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div id=\"modal-backdrop\" class=\"hidden\"></div>\n<div id=\"location-modal\" class=\"hidden\">\n	<div class=\"box-for-picture\">\n        <h1 class= \"location-header\"> Location Information  </h1>\n        <div class=\"modal-dialogue\">\n\n            <div class=\"modal-header\">\n                <h3 class=\"address-modal\">"
    + alias4(((helper = (helper = helpers.Address || (depth0 != null ? depth0.Address : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Address","hash":{},"data":data,"loc":{"start":{"line":8,"column":42},"end":{"line":8,"column":53}}}) : helper)))
    + "</h3>\n            </div>\n\n            <div class=\"modal-body\">\n                <div class=\"location-modal-img\">\n                    <img src=\""
    + alias4(((helper = (helper = helpers.img || (depth0 != null ? depth0.img : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"img","hash":{},"data":data,"loc":{"start":{"line":13,"column":30},"end":{"line":13,"column":37}}}) : helper)))
    + "\" class=\"picture-modal\" alt=\"Picture of Hospital\">\n                </div>\n\n                <div id=\"location-info-box\">\n                    <div class=\"location-info\"> Building ID: "
    + alias4(((helper = (helper = helpers.bID || (depth0 != null ? depth0.bID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"bID","hash":{},"data":data,"loc":{"start":{"line":17,"column":61},"end":{"line":17,"column":68}}}) : helper)))
    + "</div>\n\n                    <div class=\"location-info\">Number of staff: "
    + alias4(((helper = (helper = helpers.staffs || (depth0 != null ? depth0.staffs : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"staffs","hash":{},"data":data,"loc":{"start":{"line":19,"column":64},"end":{"line":19,"column":74}}}) : helper)))
    + "</div>\n\n                    <div class=\"location-info\">Number of patients: "
    + alias4(((helper = (helper = helpers.patient || (depth0 != null ? depth0.patient : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"patient","hash":{},"data":data,"loc":{"start":{"line":21,"column":67},"end":{"line":21,"column":78}}}) : helper)))
    + "</div>\n\n                    <div class=\"location-info\">Number of Total Rooms: "
    + alias4(((helper = (helper = helpers.Total_Rooms || (depth0 != null ? depth0.Total_Rooms : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Total_Rooms","hash":{},"data":data,"loc":{"start":{"line":23,"column":70},"end":{"line":23,"column":85}}}) : helper)))
    + "</div>\n\n                    <div class=\"location-info\"> Number of Used Rooms: "
    + alias4(((helper = (helper = helpers.Used_Rooms || (depth0 != null ? depth0.Used_Rooms : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Used_Rooms","hash":{},"data":data,"loc":{"start":{"line":25,"column":70},"end":{"line":25,"column":84}}}) : helper)))
    + "</div>\n\n                    <div class=\"location-info\">Number of Available Rooms:"
    + alias4(((helper = (helper = helpers.Unused_Rooms || (depth0 != null ? depth0.Unused_Rooms : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Unused_Rooms","hash":{},"data":data,"loc":{"start":{"line":27,"column":73},"end":{"line":27,"column":89}}}) : helper)))
    + "</div>\n                </div>\n            </div>\n\n            <button type=\"button\" onclick=\"closeModalLocation()\" class=\"exit-modal-button\">Exit</button>\n	    </div>\n    </div>\n</div>\n";
},"useData":true});
})();