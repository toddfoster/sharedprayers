{{ $ordinal := "Wrong" }}
{{ $reference := "Hezekiah 13" }}
{{ if len .Params | eq 1 }}
{{/* single parameter = firstLesson or secondLesson */}}
{{ $which := .Get 0 }}
{{ $ordinal = ( printf "layouts/shortcodes/readings/ordinal/%s" $which )  | readFile | safeHTML }}
{{ $reference = ( printf "layouts/shortcodes/readings/%s/opinionated/%s/%s" $.Page.Params.lectionaryyear $.Page.Params.proper $which ) | readFile | safeHTML }}
{{ else }}
{{/* Two parameters: ordinal + reference, with optional text as inner */}}
{{ $ordinal = .Get 0 }}
{{ $reference = .Get 1 }}
{{ end }}
{{ $slug := $reference | lower | replaceRE "^(..[a-z]{1,5}).*"  "$1" }}
{{ $slug := replace $slug " " "" }}
{{ $slug := substr $slug 0 5 }}
{{ $intro := ( printf "layouts/shortcodes/readings/intro/%s" $slug ) | readFile | safeHTML }}
{{/* TODO: Check for full-text & include if it exists; else link. */}}
{{ $url := printf "http://bible.oremus.org/?version=NRSVAE&passage=%s" $reference }}
{{ $url = replace $url " " "%20" }}
{{ $link := printf "[%s](%s)" $reference $url }}
**The {{ $ordinal }} Lesson**
_{{  $reference  }}_

Lector:
> A reading from {{ $intro }}

{{ if len .Inner | gt 0 }}
{{ .Inner | replaceRE "\n" "\n\n> " | safeHTML }}
{{ else }}
> _This reading can be found at {{ $link }}_
{{end}}

Lector:
> The word of the Lord.

**People:**
> **Thanks be to God.**
