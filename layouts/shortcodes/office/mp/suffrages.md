{{ $slug := printf "%s.md" (default ($.Page.Params.weekday) (.Get 0)) }}
{{ readFile (path.Join "layouts/shortcodes/office/mp/suffrages/" $slug ) | safeHTML }}
