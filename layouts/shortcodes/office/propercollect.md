{{/* shortcodes/office/propercollect.md */}}
{{/* Not DRY: Be sure to keep this in sync with shortcodes/he/propercollect.md */}}
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

### The Collect of the Day

{{ if $collect }}
##### Officiant:
{{ $collect }}
{{ else }}
##### The presider provides the collect proper to the day.
{{ end }}

##### **People:**
**Amen.**
