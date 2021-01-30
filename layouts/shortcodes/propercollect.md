{{ $basePath := "layouts/shortcodes/proper/collect" }}
{{ $filePath := (path.Join $basePath (default $.Page.Params.proper (.Get 0))) }}
### The Collect of the Day
Officiant:
> {{ readFile  $filePath }}

**People:**
> **Amen.**
