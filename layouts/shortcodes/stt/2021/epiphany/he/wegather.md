## We Gather in God’s Name
{{ "layouts/shortcodes/he/greeting/blessedbegod.md" | readFile | safeHTML }}
{{ "layouts/shortcodes/he/collect-purity.md" | readFile | safeHTML }}
{{ "layouts/shortcodes/he/songofpraise/gloriaexcelsis.md" | readFile | safeHTML }}

### Salutation and Collect
{{ "layouts/shortcodes/letuspray.md" | readFile | safeHTML }}

{{/* shortcodes/propercollect.md */}}
{{/* Figure out day: argument (day spec or literal) or page parameter or fail */}}
{{ $day := "" }}
{{ with .Get 0 }}
  {{ $day = . }}
{{ else }}
  {{ $day = $.Page.Params.proper }}
{{ end }}

{{ $collect := "" }}
{{  with first 1 (where $.Site.Data.bcpcollects "day" $day) }}
	{{ $collect = (index . 0).collect }}
{{ else }}
    {{/* Check for a named holiday */}}
	{{ $reffile := (printf "layouts/shortcodes/holydays/%s/collect" $day ) }}
	{{ if fileExists $reffile }}
		{{ $collect = ($reffile | readFile | safeHTML) }}
	{{ end }}
{{ end }}

{{ if $collect }}
Officiant:
> {{ $collect }}
{{ end }}

**People:**
> **Amen.**
