require(["jira/editor/customizer"], function (Customizer) {
    Customizer.customizeSettings(function(tinymceSettings, tinymce, SchemaBuilder) {
		tinymceSettings.plugins.push("directionality");
		tinymceSettings.directionality = "rtl";
    });
}); 
