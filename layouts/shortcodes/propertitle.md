{{/* shortcodes/propertitle.md */}}
{{/* Figure out day: argument (day spec or literal) or page parameter or fail */}}
{{ $day := "" }}
{{ with .Get 0 }}
  {{ $day = . }}
{{ else }}
  {{ $day = $.Page.Params.proper }}
{{ end }}

{{ $title := "" }}
{{  with first 1 (where $.Site.Data.bcpcollects "day" $day) }}
	{{ $title = (index . 0).title }}
{{ else }}
    {{/* Check for a named holiday */}}
	{{ $reffile := (printf "layouts/shortcodes/holydays/%s/title" $day ) }}
	{{ if fileExists $reffile }}
		{{ $title = ($reffile | readFile | safeHTML) }}
	{{ end }}
{{ end }}

{{ $title }}
