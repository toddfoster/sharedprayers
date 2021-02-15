{{ $slug := default ( printf "choose/%s/%s" ($.Page.Params.season) ($.Page.Params.weekday) ) (.Get 0)}}
{{ $slug = printf "%s.md" $slug }}
_Officiant:_
> {{ readFile (path.Join "layouts/shortcodes/office/mp/sentence/" $slug ) }}
