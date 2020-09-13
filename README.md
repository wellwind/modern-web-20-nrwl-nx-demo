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

## Format

`todo-list.component.ts` 內程式碼排版有問題，可透過指令 `npm run nx format:check` 查出問題。

也可透過 `npm run nx format:write` 直接修正可以修正的排版問題。

## affected

隨意修改 `todos-management.service.ts`，進行一次 commit，之後比對這次 commit (HEAD) 與上次 commit (HEAD~1) 的差異，並搭配圖表顯示

```shell
npm run nx affected:dep-graph -- --base=HEAD~1 --head=HEAD
```

除此之外也可以使用 `affected:build` 建置有差異的專案，或 `affected:test` 測試有差異的專案等等。

## Schematics

`tools/schematics/base-file/*` 下面是一個 Schematics 程式碼產生器。可以使用以下指令建立：

```
generate @nrwl/workspace:workspace-schematic base-file
```

裡面的 `index.ts` 是實際建立程式碼骨架的邏輯。

使用以下指令即可依照撰寫好的邏輯產生檔案：

```
 npm run nx workspace-schematic base-file [name]
```
