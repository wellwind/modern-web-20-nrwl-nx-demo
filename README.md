# Modern Web 20 - Nrxl Nx 範例程式

## Dependency Graph

執行 `npm run nx dep-graph`，即可看到專案相依關係圖

## Tags Dependency

執行 `npm run nx lint -- todos-todos-ui` 可看到錯誤發生。

因為 tslint.json 內的設定 `type:ui` 僅可相依 `type:ui`，而專案實際上相依 `type:data-access`，因此將此 tag 設定加入即可。

參考 tslint.json 的 `nx-enforce-module-boundaries` 設定：

```json
{
  "sourceTag": "type:ui",
  "onlyDependOnLibsWithTags": ["type:ui"]
}
```

改成

```json
{
  "sourceTag": "type:ui",
  "onlyDependOnLibsWithTags": ["type:ui", "type:data-access"]
}
```

再次執行指令即可通過。
