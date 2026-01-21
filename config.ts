import { extendDeploymentConfig, loadEncryptedConfig } from "scripts";

const config = extendDeploymentConfig({ name: "plh_kids_teens_za", parent: "plh_kids" });

config.git = {
  content_repo: "https://github.com/ParentingForLifelongHealth/plh-kids-teens-app-za-content.git",
  content_tag_latest: "1.6.46",
};

config.google_drive.sheets_folders = [
  { id: "19wSspWYMbRc75een-kS0q0aq24--75u8", name: "library_app_menu" },
  { id: "1UXVz71HniwdtklFnGUEBzzj8ZHI9oQVo", name: "library_field_values" },
  { id: "1Y8uC9-rqQtsjQgUfeX9qp-vNzsFDUQFU", name: "kids_global" },
  { id: "1GnKk8luhnYcWobeeEfbR23ZSoZakcNF9", name: "kids_teens_global" },
  { id: "1XBq4iGIZHEwzwPk3xbHDAm9WCesjR7kR", name: "library PLH onboarding" },
  { id: "1Bzlnwts9mkoLRhDy-SN5O1A3bUlBOynI", name: "kids_teens_za" },
];

config.google_drive.assets_folders = [
  {id: "1T93qsaSBbYa-lCF6ChPkfoX85PLugJCZ", name: "kids_teens_za"},
];

config.android = {
  app_id:'international.idems.plh_kids_teens_za',
  app_name:'Sinovuyo',
  splash_asset_path: "./app_data/assets/android/splash.png",
  icon_asset_path: "./app_data/assets/android/icon.png",
  icon_asset_foreground_path: "./app_data/assets/android/icon-foreground.png",
  icon_asset_background_path: "./app_data/assets/android/icon-background.png",
  zoom_enabled: true
};

config.ios = {
  app_id:"international.idems.plh-kids-teens-za",
  app_name:"Sinovuyo",
  zoom_enabled: true
};

config.firebase = {
  config: loadEncryptedConfig('firebase.json'),
}

config.auth = {
  provider: 'firebase',
}

// Hacky fix to point extended deployment to translations within its own repo
config.translations.translated_strings_path = "./app_data/translations_source/translated_strings";

// To reduce app size, exclude uncompressed assets and unused
config.app_data.assets_filter_function = (fileEntry) =>
  !fileEntry.relativePath.includes("uncompressed") &&
  !fileEntry.relativePath.includes("unused")&&
  !fileEntry.relativePath.includes("video/modules/connect")&& // custom path to remove stubborn files that are not visible in drive
  !fileEntry.relativePath.includes("audio/modules/connect"); // custom path to remove stubborn files that are not visible in drive

config.api.db_name = "plh_kids_teens_za";
config.app_data.output_path = "./app_data";

config.app_config.APP_LANGUAGES.default = "gb_en";
config.app_config.APP_SIDEMENU_DEFAULTS.title = "SinovuyoApp";
config.app_config.APP_HEADER_DEFAULTS.title = "SinovuyoApp";
config.app_config.APP_HEADER_DEFAULTS.hidden = true;
config.app_config.APP_FOOTER_DEFAULTS.template = "footer";
config.app_config.APP_FOOTER_DEFAULTS.background = "none";
config.app_config.NOTIFICATION_DEFAULTS.title = "New message from SinovuyoApp";
config.app_config.NOTIFICATION_DEFAULTS.text = "You have a new message from SinovuyoApp";
config.app_config.APP_THEMES.available = ["plh_kids_teens_za"];
config.app_config.APP_THEMES.defaultThemeName = "plh_kids_teens_za";
config.error_logging = { dsn: "https://e8c4a7d101684da6bdb1f17f712f15fc@app.glitchtip.com/8362" };


export default config;
