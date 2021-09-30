{{/* parameters: [day/reference] [year] */}}
{{/* reference can be blank (assume  $.Page.Params.proper) or the day code (e.g., proper22) or else literal */}}
{{/*  year can be blank (assume $.Page.Params.lectionaryyear) */}}
{{/* Figure out year */}}
{{ $year := "" }}
{{ with .Get 1 }}
  {{ $year = . }}
{{ else }}
  {{ $year = $.Page.Params.lectionaryyear }}
{{ end }}
{{/* Figure out reference source */}}
{{ $reference := "" }}
{{ with .Get 0 }}
  {{ $reference = . }}
{{ else }}
  {{ $reference = $.Page.Params.proper }}
{{ end }}
{{/* Find actual reference */}}
{{ $ordinal := "psalm" }}
{{ $reffile := (printf "layouts/shortcodes/readings/%s/opinionated/%s/%s" $year $reference $ordinal) }}
{{ if  not (fileExists $reffile) }}
	{{ $reffile = (printf "layouts/shortcodes/readings/holydays/opinionated/%s/%s" $reference $ordinal ) }}
{{ end }}
{{ if fileExists $reffile }}
    {{ $reference = ($reffile | readFile | safeHTML) }}
{{ end }}
{{ $reference = $reference | chomp }}
{{/* $reference is blank, a Psalm (max one letter in verse ref.) or a canticle */}}
{{ if not $reference }}
##### A Psalm, hymn, or anthem may follow each Reading.
{{ else }}
### Psalm {{ $reference }}

{{/* Text is provide in .Inner or in readings or by oremus */}}
{{ with .Inner }}
{{ . | replaceRE "\n" "\n> " | safeHTML }}
{{ else }}
    {{ $slug := $reference | lower | replaceRE "[^A-Za-z0-9]+" "" }}
    {{ $filename := ( printf "layouts/shortcodes/readings/pss/responsively/%s" $slug ) }}
    {{ if fileExists $filename }}
{{ $filename | readFile | safeHTML }}
	{{ else }}
	        {{ $url := printf "http://bible.oremus.org/?version=NRSVAE&passage=Psalm %s" $reference }}
            {{ $url = replace $url " " "%20" }}
> _This reading can be found at [Psalm {{ $reference }}]({{ $url }})_
	{{ end }}
{{ end }}
{{ end }}
