{{ $slug := default ($.Page.Params.weekday) (.Get 0)}}
{{ $slug = printf "%s.md" $slug }}
**People:**
> {{ readFile (path.Join "layouts/shortcodes/office/mp/antiphon/choose/other/" $slug ) | safeHTML }}
