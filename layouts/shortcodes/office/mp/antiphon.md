{{ $slug := default ($.Page.Params.season) (.Get 0)}}
{{ $slug = printf "%s.md" $slug }}
**People:**
> {{ readFile (path.Join "layouts/shortcodes/office/mp/antiphon/" $slug ) | safeHTML }}
