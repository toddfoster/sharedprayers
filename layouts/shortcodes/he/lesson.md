{{/* parameters: ordinal day/reference year */}}
{{/* ordinal can be firstLesson|secondLesson|gospel or else literal */}}
{{/* reference can be blank (assume  $.Page.Params.proper) or the day code (e.g., proper22) or else literal */}}
{{/*  year can be blank (assume $.Pae.Params.lectionaryyear) */}}
{{/* Figure out year */}}
{{ $year := "" }}
{{ with .Get 2 }}
  {{ $year = . }}
{{ else }}
  {{ $year = $.Page.Params.lectionaryyear }}
{{ end }}
{{/* Figure out reference source */}}
{{ $reference := "" }}
{{ with .Get 1 }}
  {{ $reference = . }}
{{ else }}
  {{ $reference = $.Page.Params.proper }}
{{ end }}
{{/* Figure out ordinal: keyword or else literal */}}
{{ $ordinal := .Get 0 }}
{{ $prettyOrdinal := .Get 0 }}
{{ $filename := printf "layouts/shortcodes/readings/ordinal/%s" $ordinal }}
{{ if fileExists $filename }}
    {{ $prettyOrdinal = ( printf "layouts/shortcodes/readings/ordinal/%s" $ordinal ) | readFile | chomp | safeHTML }}
{{ end}}
{{/* Find actual reference */}}
{{ $reffile := (printf "layouts/shortcodes/readings/%s/opinionated/%s/%s" $year $reference $ordinal) }}
{{ if  not (fileExists $reffile) }}
	{{ $reffile = (printf "layouts/shortcodes/readings/holydays/opinionated/%s/%s" $reference $ordinal ) }}
{{ end }}
{{ if fileExists $reffile }}
    {{ $reference = ($reffile | readFile | safeHTML) }}
{{ end }}
{{ $reference = $reference | chomp }}
{{ $slug := $reference | lower | replaceRE "(\\s)" "" | replaceRE "^(..[a-z]{1,5}).*"  "$1" }}
{{ $slug = substr $slug 0 5 }}
{{ $intro := ( printf "layouts/shortcodes/readings/intro/%s" $slug ) | readFile | safeHTML }}
### The {{ $prettyOrdinal }} Lesson: _{{- $reference -}}_

##### Lector:
A reading from {{ $intro }}

{{ with .Inner }}
{{ . | safeHTML}}
{{ else }}
    {{ $filename := $reference | lower | replaceRE "[^A-Za-z0-9]+" "" }}
    {{ $filepath := printf "layouts/shortcodes/readings/nrsv/%s" $filename }}
	{{ if fileExists $filepath }}
{{ $filepath | readFile | safeHTML  }}
    {{ else }}
        {{ $url := printf "http://bible.oremus.org/?version=NRSVAE&passage=%s" $reference }}
        {{ $url = replace $url " " "%20" }}
        {{ $link := printf "[%s](%s)" $reference $url }}
> _This reading can be found at {{ $link }}_
    {{ end }}
{{ end }}

##### Lector:
The word of the Lord.

##### **People:**
**Thanks be to God.**
