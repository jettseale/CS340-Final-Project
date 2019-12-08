(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['locationModal'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div id=\"modal-backdrop\" class=\"hidden\"></div>\n\n<div id=\"location-modal\" class=\"hidden\">\n	<h1> Location Modal  </h1>\n	<div class=\"modal-dialogue\">\n\n		<div class=\"modal-header\">\n			<h3 class=\"address-modal\">Address: "
    + alias4(((helper = (helper = helpers.Address || (depth0 != null ? depth0.Address : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Address","hash":{},"data":data,"loc":{"start":{"line":8,"column":38},"end":{"line":8,"column":49}}}) : helper)))
    + "</h3>\n		</div>\n\n		<div class=\"modal-body\">\n			<div class=\"location-modal-img\">\n\n				<img src=\""
    + alias4(((helper = (helper = helpers.img || (depth0 != null ? depth0.img : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"img","hash":{},"data":data,"loc":{"start":{"line":14,"column":14},"end":{"line":14,"column":21}}}) : helper)))
    + "\" alt=\"Picture of Hospital\">\n\n			</div>\n\n			<div class=\"location-modal-bid\"> Building ID: "
    + alias4(((helper = (helper = helpers.bID || (depth0 != null ? depth0.bID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"bID","hash":{},"data":data,"loc":{"start":{"line":18,"column":49},"end":{"line":18,"column":56}}}) : helper)))
    + "</div>\n\n			<div class=\"location-modal-num-staff\">Number of staff: "
    + alias4(((helper = (helper = helpers.staffs || (depth0 != null ? depth0.staffs : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"staffs","hash":{},"data":data,"loc":{"start":{"line":20,"column":58},"end":{"line":20,"column":68}}}) : helper)))
    + "</div>\n\n			<div class=\"location-modal-num-patients\">Number of patients: "
    + alias4(((helper = (helper = helpers.patient || (depth0 != null ? depth0.patient : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"patient","hash":{},"data":data,"loc":{"start":{"line":22,"column":64},"end":{"line":22,"column":75}}}) : helper)))
    + "</div>\n\n			<div class=\"location-modal-num-total-rooms\">Number of Total Rooms: "
    + alias4(((helper = (helper = helpers.Total_Rooms || (depth0 != null ? depth0.Total_Rooms : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Total_Rooms","hash":{},"data":data,"loc":{"start":{"line":24,"column":70},"end":{"line":24,"column":85}}}) : helper)))
    + "</div>\n\n			<div class=\"location-modal-num-used-rooms\"> Number of Used Rooms: "
    + alias4(((helper = (helper = helpers.Used_Rooms || (depth0 != null ? depth0.Used_Rooms : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Used_Rooms","hash":{},"data":data,"loc":{"start":{"line":26,"column":69},"end":{"line":26,"column":83}}}) : helper)))
    + "</div>\n\n			<div class=\"location-modal-num-unused-rooms\">Number of Available Rooms:"
    + alias4(((helper = (helper = helpers.Unused_Rooms || (depth0 != null ? depth0.Unused_Rooms : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Unused_Rooms","hash":{},"data":data,"loc":{"start":{"line":28,"column":74},"end":{"line":28,"column":90}}}) : helper)))
    + "</div>\n		</div>\n	</div>\n\n	<button type=\"button\" onclick=\"closeModal()\" class=\"exit-modal-button\">Exit</button>\n\n</div>\n";
},"useData":true});
})();