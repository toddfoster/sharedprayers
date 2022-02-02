{{/* shortcodes/lessonsfor.md */}}
{{/* parameters:  day/reference year*/}}
{{/* TODO: specify track, use opinionated lectionary by default */}}
{{ $DEBUG := false }}

{{/* Figure out day: argument (day spec or literal reference) or page parameter */}}
{{ $day := "" }}
{{ with .Get 0 }}
  {{ $day = . }}
{{ else }}
  {{ $day = $.Page.Params.proper }}
{{ end }}

{{/* Find title: in bcprcl or in holydays */}}

{{ $title := "" }}
{{ with first 1 (where $.Site.Data.bcpcollects "day" $day) }}
	{{ $title = (index . 0).title }}
{{ else }}{{/* Check for a named holiday */}}
	{{ $reffile := (printf "layouts/shortcodes/holydays/%s/title" $day) }}
	{{ if fileExists $reffile }}
		{{ $title = ($reffile | readFile | safeHTML) }}
	{{ end }}
{{ end }}
{{ if $DEBUG }}{{ printf "DEBUG: title is %s (%s)" $title $day }}{{ end }}

{{/* Figure out year: argument, page parameter, or default A */}}
{{ $year := "" }}
{{ with .Get 1 }}
	{{ $year = . }}
{{ else }}
	{{ with $.Page.Params.lectionaryyear }}
		{{ $year = . }}
	{{ else }}
		{{ $year = "A" }}
	{{ end }}
{{ end }}
{{ $year = $year | upper }}
{{ if $DEBUG }}{{ printf "DEBUG: year is %s" $year }}{{ end }}

{{/* First, check bcpcl.json */}}

{{ $first := "" }}
{{ $psalm := "" }}
{{ $second := "" }}
{{ $gospel := "" }}
{{  with first 1 (where (where (where $.Site.Data.bcprcl "year" $year) "day" $day) "lesson" "first") }}
	{{ $first = (index . 0).citation }}
{{ end }}
{{  with first 1 (where (where (where $.Site.Data.bcprcl "year" $year) "day" $day) "lesson" "psalm") }}
	{{ $psalm = (index . 0).citation }}
{{ end }}
{{  with first 1 (where (where (where $.Site.Data.bcprcl "year" $year) "day" $day) "lesson" "second") }}
	{{ $second = (index . 0).citation }}
{{ end }}
{{  with first 1 (where (where (where $.Site.Data.bcprcl "year" $year) "day" $day) "lesson" "gospel") }}
	{{ $gospel = (index . 0).citation }}
{{ end }}
{{/* TODO get lessons for holy days not in rcl */}}

**Readings for {{ $title }}, Year {{ $year }}**
{{ $first }}, {{ $psalm }}, {{ $second }}, {{ $gospel }}
