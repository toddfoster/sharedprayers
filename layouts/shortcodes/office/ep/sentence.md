{{ $slug := default ( printf "choose/%s" ($.Page.Params.season) ) (.Get 0)}}
{{ $slug = printf "%s.md" $slug }}
_Officiant:_
> {{ readFile (path.Join "layouts/shortcodes/office/ep/sentence/" $slug ) | safeHTML }}
