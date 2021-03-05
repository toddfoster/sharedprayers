{{ $ordinal := "Wrong" }}
{{ $reference := "Hezekiah 13" }}
{{/* One parameter = first/secondLesson ; Two = "First" "Gen 17" */}}
{{ if len .Params | eq 1 }}
    {{ $which := .Get 0 }}
    {{ $ordinal = ( printf "layouts/shortcodes/readings/ordinal/%s" $which )  | readFile | safeHTML }}
    {{ $reference = ( printf "layouts/shortcodes/readings/%s/opinionated/%s/%s" $.Page.Params.lectionaryyear $.Page.Params.proper $which ) | readFile | safeHTML }}
{{ else }}
    {{ $ordinal = .Get 0 }}
    {{ $reference = .Get 1 }}
{{ end }}
{{ $slug := $reference | lower | replaceRE "^(..[a-z]{1,5}).*"  "$1" }}
{{ $slug := replace $slug " " "" }}
{{ $slug := substr $slug 0 5 }}
{{ $intro := ( printf "layouts/shortcodes/readings/intro/%s" $slug ) | readFile | safeHTML }}
{{/* TODO: Check for full-text & include if it exists; else link. */}}
**The {{ $ordinal }} Lesson**
_{{  $reference  }}_

Lector:
> A reading from {{ $intro }}

{{ with .Inner }}
{{ . | replaceRE "\n" "\n> " | safeHTML }}
{{ else }}
    {{ $filename := $reference | lower | replaceRE "[^A-Za-z0-9]+" "" }}
    {{ $filepath := printf "layouts/shortcodes/readings/nrsv/%s" $filename }}
	{{ if fileExists $filepath }}
> {{ $filepath | readFile | replaceRE "\n" "\n> " | safeHTML  }}
    {{ else }}
        {{ $url := printf "http://bible.oremus.org/?version=NRSVAE&passage=%s" $reference }}
        {{ $url = replace $url " " "%20" }}
        {{ $link := printf "[%s](%s)" $reference $url }}
> _This reading can be found at {{ $link }}_
    {{ end }}
{{ end }}

Lector:
> The word of the Lord.

**People:**
> **Thanks be to God.**
