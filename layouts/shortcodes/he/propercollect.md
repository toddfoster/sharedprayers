{{/* shortcodes/he/propercollect.md */}}
{{/* Not DRY: Be sure to keep this in sync with shortcodes/office/propercollect.md */}}
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
{{/* Second, check lff2018.json */}}
{{ $slug := upper (printf "lff2018-%s" $day) }}
{{  with first 1 (where $.Site.Data.lff2018 "slug" $slug) }}
    {{ $collect = strings.TrimSuffix " Amen." (index (index . 0) "rite2_collect") }}
{{ else }}
    {{/* Check for a named holiday */}}
	{{ $reffile := (printf "layouts/shortcodes/holydays/%s/collect" $day ) }}
	{{ if fileExists $reffile }}
		{{ $collect = ($reffile | readFile | safeHTML) }}
	{{ end }}
{{ end }}
{{ end}}

### The Collect of the Day
##### Officiant:
The Lord be with you.

##### **People:**
**And also with you.**

##### Officiant:
Let us pray.

{{ if $collect }}
{{ $collect }}
{{ else }}
##### The presider provides the collect proper to the day.
{{ end }}

##### **People:**
**Amen.**
