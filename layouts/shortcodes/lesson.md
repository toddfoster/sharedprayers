**The {{ .Get 0 }} Lesson**
_{{ .Get 1 }}_

{{ $slug := .Get 1 | lower | replaceRE "^(..[a-z]{1,5}).*"  "$1" }}
{{ $slug := replace $slug " " "" }}
{{ $slug := substr $slug 0 5 }}
{{ $slug := printf "layouts/shortcodes/readings/intro/%s" $slug }}
Lector:
> A reading from {{ $slug | readFile | safeHTML }}
{{ if gt (len .Inner) 0}}
{{ .Inner | replaceRE "\n" "\n> " | safeHTML }}
{{ else }}
{{ $url := printf "http://bible.oremus.org/?version=NRSVAE&passage=%s" (.Get 1) }}
{{ $url := replace $url " " "%20" }}
{{ $ref := printf "[%s](%s)" (.Get 1) $url }}
> _This reading can be found at {{ $ref }}_
{{end}}

Lector:
> The word of the Lord.

**People:**
> **Thanks be to God.**
