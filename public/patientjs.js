(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['patientModal'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div id=\"modal-backdrop\" class=\"hidden\"></div>\n<div id=\"patients-modal\" class=\"hidden\">\n	<div class=\"modal-dialogue\">\n\n		<div class=\"modal-header\">\n			<h3> Name: "
    + alias4(((helper = (helper = helpers.pName || (depth0 != null ? depth0.pName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pName","hash":{},"data":data,"loc":{"start":{"line":6,"column":14},"end":{"line":6,"column":23}}}) : helper)))
    + "</h3>\n		</div>\n\n		<div class=\"modal-body\">\n			<div class=\"patient-modal-id\"> Patient ID: "
    + alias4(((helper = (helper = helpers.pID || (depth0 != null ? depth0.pID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pID","hash":{},"data":data,"loc":{"start":{"line":10,"column":46},"end":{"line":10,"column":53}}}) : helper)))
    + "</div>\n\n			<div class=\"patient-age\">	Patient Age: "
    + alias4(((helper = (helper = helpers.Age || (depth0 != null ? depth0.Age : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Age","hash":{},"data":data,"loc":{"start":{"line":12,"column":42},"end":{"line":12,"column":49}}}) : helper)))
    + " </div> <br>\n\n				<div class=\"patient-num\"> Patient Room Num: "
    + alias4(((helper = (helper = helpers.Room_Num || (depth0 != null ? depth0.Room_Num : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Room_Num","hash":{},"data":data,"loc":{"start":{"line":14,"column":48},"end":{"line":14,"column":60}}}) : helper)))
    + "</div> <br>\n\n				<div class=\"patient-building-id\"> Patient Building ID: "
    + alias4(((helper = (helper = helpers.Patients_bID || (depth0 != null ? depth0.Patients_bID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Patients_bID","hash":{},"data":data,"loc":{"start":{"line":16,"column":59},"end":{"line":16,"column":75}}}) : helper)))
    + "</div><br>\n\n				<div class=\"being-taken-by\"> Staff Assigned Name: "
    + alias4(((helper = (helper = helpers.sName || (depth0 != null ? depth0.sName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sName","hash":{},"data":data,"loc":{"start":{"line":18,"column":54},"end":{"line":18,"column":63}}}) : helper)))
    + " </div> <br>\n\n				<div class=\"being-taken-by-id\"> Staff ID: "
    + alias4(((helper = (helper = helpers.sID || (depth0 != null ? depth0.sID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sID","hash":{},"data":data,"loc":{"start":{"line":20,"column":46},"end":{"line":20,"column":53}}}) : helper)))
    + " </div>\n				<button type=\"button\" onclick=\"closeModalPatient()\" class=\"exit-modal-button\">Exit</button>\n		</div>\n	</div>\n</div>\n";
},"useData":true});
})();