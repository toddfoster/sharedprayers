{{ $basePath := "layouts/shortcodes/proper/title" }}
{{ $filePath := (path.Join $basePath (default $.Page.Params.proper (.Get 0))) }}
{{ readFile  $filePath }}
