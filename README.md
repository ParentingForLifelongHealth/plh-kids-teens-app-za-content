# plh-kids-teens-app-za-content
This package contains data used in the South Africa version of the PLH Kids and Teens app.

## App Preview
UAT: https://plh-kids-teens-za-uat.web.app/

Released: https://plh-kids-teens-za.web.app/

## Syncing data updates (automatic)
A pull request syncing all spreadsheets and assets can be created automatically by running the following GitHub workflow: [Sync Content](https://github.com/ParentingForLifelongHealth/plh-kids-teens-app-za-content/actions/workflows/content-sync.yml)

## Syncing data updates (manual)
Data can be synced from corresponding google drive folders via the script
```
yarn workflow sync
```
after which a PR can be created via the script
```
yarn workflow repo publish
```
