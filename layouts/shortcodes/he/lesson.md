{{ $ordinal := "" }}
{{ $reference := "" }}
{{/* One parameter = first/secondLesson ; Two = "First" "Gen 17" */}}
{{ if len .Params | eq 1 }}
    {{ $which := .Get 0 }}
    {{ $ordinal = ( printf "layouts/shortcodes/readings/ordinal/%s" $which ) | readFile | chomp | safeHTML }}
	{{ $reffile := "" }}
	{{/* Try to find the proper reference as a Sunday or a Holy Day */}}
	{{ $reffile = (printf "layouts/shortcodes/readings/%s/opinionated/%s/%s" $.Page.Params.lectionaryyear $.Page.Params.proper $which) }}
	{{ if  not (fileExists $reffile) }}
		{{ $reffile = (printf "layouts/shortcodes/readings/holydays/opinionated/%s/%s" $.Page.Params.proper $which) }}
    {{ end }}
    {{ $reference = ($reffile | readFile | safeHTML) }}
{{ else }}
    {{ $ordinal = .Get 0 }}
    {{ $reference = .Get 1 }}
{{ end }}
{{ $reference = $reference | chomp }}
{{ $slug := $reference | lower | replaceRE "(\\s)" "" | replaceRE "^(..[a-z]{1,5}).*"  "$1" }}
{{ $slug = substr $slug 0 5 }}
{{ $intro := ( printf "layouts/shortcodes/readings/intro/%s" $slug ) | readFile | safeHTML }}
### The {{ $ordinal }} Lesson: _{{- $reference -}}_

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
