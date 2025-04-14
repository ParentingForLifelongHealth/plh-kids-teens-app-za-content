import { extendDeploymentConfig } from "scripts";

const config = extendDeploymentConfig({ name: "plh_kids_teens_za", parent: "plh_kids" });

config.git = {
  content_repo: "https://github.com/ParentingForLifelongHealth/plh-kids-teens-app-za-content.git",
  content_tag_latest: "1.1.21",
};

config.google_drive.sheets_folder_ids = [
  "19wSspWYMbRc75een-kS0q0aq24--75u8", // library_app_menu
  "1UXVz71HniwdtklFnGUEBzzj8ZHI9oQVo", // library_field_values
  "1Y8uC9-rqQtsjQgUfeX9qp-vNzsFDUQFU", // kids_global
  "1GnKk8luhnYcWobeeEfbR23ZSoZakcNF9", // kids_teens_global
  "1Bzlnwts9mkoLRhDy-SN5O1A3bUlBOynI" // kids_teens_za
];
config.google_drive.assets_folder_ids = [
  "1abaL1QGd33NqqLoKuo2t9fVWKmh5ouM9", // kids_global
  "13COzYq0iK7sXXZYekPgkwloWtuGoxBNt", // kids_teens_global
  "1UeLyEG3-PcXHSbS54GQ1B1HwZ8ihbSY1", // assets copied from KW
  "1T93qsaSBbYa-lCF6ChPkfoX85PLugJCZ" // kids_teens_za
];

// Hacky fix to point extended deployment to translations within its own repo
config.translations.translated_strings_path = "./app_data/translations_source/translated_strings";

// To reduce app size, exclude uncompressed assets
config.app_data.assets_filter_function = (fileEntry) =>
  !fileEntry.relativePath.includes("uncompressed")

config.api.db_name = "plh_kids_teens_za";

config.app_data.output_path = "./app_data";

config.app_config.APP_LANGUAGES.default = "gb_en";
config.app_config.APP_SIDEMENU_DEFAULTS.title = "ParentApp for Kids & Teens ZA";
config.app_config.APP_HEADER_DEFAULTS.title = "ParentApp for Kids & Teens ZA";
config.app_config.APP_HEADER_DEFAULTS.hidden = true;
config.app_config.APP_FOOTER_DEFAULTS.templateName = "footer";
config.app_config.APP_FOOTER_DEFAULTS.background = "none";
config.app_config.NOTIFICATION_DEFAULTS.title = "New message from ParentApp for Kids & Teens ZA";
config.app_config.NOTIFICATION_DEFAULTS.text = "You have a new message from ParentApp for Kids & Teens ZA";
config.app_config.APP_THEMES.available = ["plh_kids_kw"];
config.app_config.APP_THEMES.defaultThemeName = "plh_kids_kw";
config.error_logging = { dsn: "https://e8c4a7d101684da6bdb1f17f712f15fc@app.glitchtip.com/8362" };


export default config;
