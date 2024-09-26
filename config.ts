import { extendDeploymentConfig } from "scripts";

const config = extendDeploymentConfig({ name: "plh_kids_sa", parent: "plh_kids" });

config.git = {
  content_repo: "https://github.com/ParentingForLifelongHealth/plh-kids-app-sa-content.git",
  content_tag_latest: "1.1.0",
};

config.google_drive.sheets_folder_ids = [
  "1Y8uC9-rqQtsjQgUfeX9qp-vNzsFDUQFU", // PLH Kids Global
  "1Bzlnwts9mkoLRhDy-SN5O1A3bUlBOynI" // PLH Kids ZA
];
config.google_drive.assets_folder_ids = [
  "1abaL1QGd33NqqLoKuo2t9fVWKmh5ouM9",  // PLH Kids Global
  "1T93qsaSBbYa-lCF6ChPkfoX85PLugJCZ" // PLH Kids ZA
];

// Hacky fix to point extended deployment to translations within its own repo
config.translations.translated_strings_path = "./app_data/translations_source/translated_strings";

config.api.db_name = "plh_kids_sa";

config.app_data.output_path = "./app_data";

config.app_config.APP_LANGUAGES.default = "gb_en";
config.app_config.APP_SIDEMENU_DEFAULTS.title = "ParentApp for Kids SA";
config.app_config.APP_HEADER_DEFAULTS.title = "ParentApp for Kids SA";
config.app_config.NOTIFICATION_DEFAULTS.title = "New message from ParentApp for Kids SA";
config.app_config.NOTIFICATION_DEFAULTS.text = "You have a new message from ParentApp for Kids SA";
//config.error_logging = { dsn: "https://221e29f586d84250b65db8376b274102@app.glitchtip.com/" };


export default config;
