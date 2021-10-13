{{/* shortcodes/he/psalm/responsively.md */}}
{{/* parameters: day/reference year */}}
{{/* reference can be blank (assume  $.Page.Params.proper) or the day code (e.g., proper-22) or else literal */}}
{{/*  year can be blank (assume $.Page.Params.lectionaryyear) */}}
{{/* TODO: Use opinionated lectionary by default */}}
{{/* NOTE: Not DRY: Keep in sync with lesson.md */}}

{{ $DEBUG := false }}

{{/* Figure out year: argument or page parameter or fail */}}
{{ $year := "" }}
{{ with .Get 1 }}
  {{ $year = . }}
{{ else }}
  {{ $year = $.Page.Params.lectionaryyear }}
{{ end }}
{{ $year = $year | upper }}

{{/* Figure out day: argument (day spec or literal) or page parameter or fail */}}
{{ $day := "" }}
{{ with .Get 0 }}
  {{ $day = . }}
{{ else }}
  {{ $day = $.Page.Params.proper }}
{{ end }}

{{ $ordinal := "psalm" }}

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
{{/* $reference is blank, a Psalm (max one letter in verse ref.) or a canticle */}}
{{ if not $reference }}
##### A Psalm, hymn, or anthem may follow each Reading.
{{ else }}
### {{ $reference }}

{{/* Text is provide in .Inner or in readings or by oremus */}}
{{ with .Inner }}
{{ . | replaceRE "\n" "\n> " | safeHTML }}
{{ else }}
    {{ $slug := $reference | replaceRE "Psalm " "" }}
    {{ $slug = $slug | lower | replaceRE "[^A-Za-z0-9]+" "" }}
    {{ $filename := ( printf "layouts/shortcodes/readings/pss/responsively/%s" $slug ) }}
    {{ if $DEBUG }}
	  {{ printf "filename = %v" $filename }}
    {{ end }}
    {{ if fileExists $filename }}
{{ $filename | readFile | safeHTML }}
	{{ else }}
	        {{ $url := printf "http://bible.oremus.org/?version=NRSVAE&passage=%s" $reference }}
            {{ $url = replace $url " " "%20" }}
> _This reading can be found at [{{ $reference }}]({{ $url }})_
	{{ end }}
{{ end }}
{{ end }}
