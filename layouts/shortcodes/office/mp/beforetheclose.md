{{ $slug := default ( printf "choose/%s" ($.Page.Params.weekday) ) (.Get 0)}}
{{ $slug = printf "%s.md" $slug }}
{{ readFile (path.Join "layouts/shortcodes/office/mp/beforetheclose/" $slug ) | safeHTML }}
