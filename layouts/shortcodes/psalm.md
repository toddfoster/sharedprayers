{{/* shortcodes/psalm.md */}}
{{/* positional parameter: reference */}}
{{/* named parameters: ref="119" year="A" */}}
{{/* reference can be blank (assume  $.Page.Params.proper) or the day code (e.g., proper-22) or else literally the psalm reference */}}
{{/*  year can be blank (assume $.Page.Params.lectionaryyear) */}}
{{/* TODO: Use opinionated lectionary by default */}}
{{/* NOTE: Not DRY: this is intended as the one psalm shortcode to rule them all */}}

{{ $DEBUG := false }}
{{ $heading := default true (.Get "heading") }}

{{ $year := "A" }}
{{ with .Get "year" }}
  {{ $year = . }}
{{ else }}
{{ with $.Page.Params.lectionaryyear }}
  {{ $year = . }}
{{ end }}
{{ end }}
{{ $year = $year | upper }}

{{ $day := "" }}
{{ with .Get 0 }}
  {{ $day = . }}
{{ else }}
  {{ $day = $.Page.Params.proper }}
{{ end }}

{{/* Find actual reference: literal psalm number? else day name? */}}
{{ $ordinal := "psalm" }}
{{ $reference := default $day (.Get "ref") }}
{{  with first 1 (where (where (where $.Site.Data.bcprcl "year" $year) "day" $day) "lesson" $ordinal) }}
	{{ $reference = (index . 0).citation }}
{{ else }}{{/* Check for a named holiday */}}
	{{ $reffile := (printf "layouts/shortcodes/holydays/%s/%s" $day $ordinal ) }}
	{{ if $DEBUG }}{{ printf "holy day file is %v" $reffile }}{{ end }}
	{{ if fileExists $reffile }}
		{{ $reference = ($reffile | readFile | safeHTML) }}
	{{ end }}
{{ end }}
{{ $reference = $reference | chomp }}

{{ if $DEBUG }}
    {{ printf "-------------------------------" }}
	{{ printf "params = %v" .Params }}
    {{ printf "psalm shortcode status:" }}
	{{ printf "heading = %v" $heading }}
	{{ printf "reference = %v" $reference }}
	{{ printf "day = %v" $day }}
	{{ printf "year = %v" $year }}
	{{ printf "ordinal = %v" $ordinal }}
    {{ printf "-------------------------------" }}
{{ end }}

{{/* Heading for psalm */}}
{{ $psalmlabel := "Psalm " }}
{{ $notonlynumbers := $reference | replaceRE "[^G-Zg-z]" "" }}
{{ if $notonlynumbers }}
  {{ $psalmlabel = "" }}
{{ end }}

{{ if not $reference }}
### {{ $psalmlabel }} ____
    {{ else }}
### {{ $psalmlabel }}{{ $reference }}
{{ end }}

{{/* Text is provide in .Inner or in readings or by oremus */}}
{{ with .Inner }}
  {{ . | replaceRE "\n" "\n> " | safeHTML }}
{{ else }}
  {{ if $reference }}{{/* Check for a responsive psalm */}}
    {{ $slug := $reference | replaceRE "Psalm " "" }}
    {{ $slug = $slug | lower | replaceRE "[^A-Za-z0-9]+" "" }}
    {{ $filename := ( printf "layouts/shortcodes/readings/pss/responsively/%s" $slug ) }}
    {{ if $DEBUG }}{{ printf "filename = %v" $filename }}{{ end }}
    {{ if fileExists $filename }}
{{ $filename | readFile | safeHTML }}
	{{ else }}
      {{ $slug := $reference | replaceRE "Psalm " "" }}
      {{ $slug = $slug | lower | replaceRE "[^A-Za-z0-9]+" "" }}
      {{ $filename := ( printf "layouts/shortcodes/readings/lpn/psalm%s" $slug ) }}
      {{ if $DEBUG }}{{ printf "filename = %v" $filename }}{{ end }}
      {{ if fileExists $filename }}
{{ $filename | readFile | safeHTML }}
      {{ else }}
        {{ $url := printf "http://bible.oremus.org/?version=NRSVAE&passage=%s" $reference }}
        {{ $url = replace $url " " "%20" }}
> _This reading can be found at [{{ $reference }}]({{ $url }})_
      {{ end }}
    {{ end }}
 {{ else }}{{/* no reference provided */}}
> . . .
 {{ end }}
{{ end }}
