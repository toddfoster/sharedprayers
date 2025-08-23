{{/* sentance optional: 0=season 1=day */}}
{{/* ----------------------------------------------- */}}
{{/* derived from choose.md */}}
{{/* ----------------------------------------------- */}}
{{ $DEBUG := false }}
{{/* ----------------------------------------------- */}}
{{ $season := default $.Page.Params.season (.Get 0) }}
{{ $day := default $.Page.Params.weekday (.Get 1) }}
{{ $path := "" }}
{{  with first 1 (where (where $.Site.Data.choose_mp_sentence "season" $season) "day" $day)  }}
	{{ $path   = default "" (index . 0).path   }}
{{ end }}
{{ if eq $path "" }}
    {{  with first 1 (where (where $.Site.Data.choose_mp_sentence "season" "any") "day" $day)  }}
    	{{ $path   = default "" (index . 0).path   }}
    {{ end }}
{{ end }}
{{ if $DEBUG }}{{ printf "=== DEBUG === season=%s  day=%s path=%s" $season $day $path }}{{ end }}
{{ $fullpath := printf "layouts/shortcodes/office/mp/sentence/%s" $path }}
{{/* readFile (path.Join "layouts/shortcodes/office/mp/sentence/" $slug ) | safeHTML */}}
##### Officiant:
{{ readFile ($fullpath | safeHTML) }}
