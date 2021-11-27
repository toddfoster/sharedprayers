{{/* shortcodes/lesson.md */}}
{{/* parameters: ordinal day/reference */}}
{{/* ordinal can be first|second|gospel|psalm or else literal */}}
{{/* reference can be blank (assume  $.Page.Params.proper) or the day code (e.g., proper-22) or else literal */}}
{{/* TODO: Use opinionated lectionary by default */}}
{{/* TODO: specify lectionary */}}
{{/* TODO: DRY - fold in he/gospel.md */}}
{{/* TODO: DRY - fold in psalm.md? */}}
{{ $DEBUG := false }}

{{/* Figure out year: page parameter or default A */}}
{{ $year := "A" }}
{{ with $.Page.Params.lectionaryyear }}
    {{ $year = . }}
{{ end }}
{{ $year = $year | upper }}

{{/* Figure out day: argument (day spec or literal) or page parameter or fail */}}
{{ $day := "" }}
{{ with .Get 1 }}
  {{ $day = . }}
{{ else }}
  {{ $day = $.Page.Params.proper }}
{{ end }}

{{/* Figure out ordinal: keyword or literal or fail */}}
{{ $ordinal := .Get 0 }}
{{ $prettyOrdinal := $ordinal }}
{{ $filename := printf "layouts/shortcodes/readings/ordinal/%s" $ordinal }}
{{ if fileExists $filename }}
    {{ $prettyOrdinal = ( printf "layouts/shortcodes/readings/ordinal/%s" $ordinal ) | readFile | chomp | safeHTML }}
{{ end}}

{{/* Find actual reference */}}
{{ $reference := $day }}
{{  with first 1 (where (where (where $.Site.Data.bcprcl "year" $year) "day" $day) "lesson" $ordinal) }}
	{{ $reference = (index . 0).citation }}
{{ else }}
    {{/* Check for a named holiday */}}
	{{ $reffile := (printf "layouts/shortcodes/holydays/%s/%s" $day $ordinal ) }}
	{{ if $DEBUG }}
	  {{ printf "holy day file is %v" $reffile }}
  {{ end }}
	{{ if fileExists $reffile }}
		{{ $reference = ($reffile | readFile | safeHTML) }}
	{{ end }}
{{ end }}

{{ if $DEBUG }}
	{{ printf "reference = %v" $reference }}
	{{ printf "day = %v" $day }}
	{{ printf "year = %v" $year }}
	{{ printf "ordinal = %v" $ordinal }}
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
    {{ $filepath := printf "layouts/shortcodes/readings/lpn/%s" $filename }}
	{{ if fileExists $filepath }}
{{ $filepath | readFile | safeHTML  }}
{{ else }}
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
{{ end }}
##### Lector:
The word of the Lord.

##### **People:**
**Thanks be to God.**
