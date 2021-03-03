{{/* TODO: Handle canticles */}}
{{ $psalm := "151" }}
{{ if len .Params | eq 1 }}
{{/* single parameter = manual override */}}
{{ $psalm = .Get 0 }}
{{ else }}
{{ $psalm = ( printf "layouts/shortcodes/readings/%s/opinionated/%s/psalm" $.Page.Params.lectionaryyear $.Page.Params.proper  ) | readFile | safeHTML }}
{{ end }}
{{/* Check for non-numeric reference (canticle), else add "Psalm" */}}
{{ $psalm = printf "Psalm %s" $psalm }}
{{ $slug := $psalm | lower | replaceRE "^(..[a-z]).*"  "$1" }}
{{ $slug := replace $slug " " "" }}
{{/* TODO: Check for Inner, or responsive full-text, else link. */}}
{{ $slug := printf "layouts/shortcodes/readings/pss/responsively/%s" (.Get 0) }}
{{ $slug | readFile | safeHTML }}
{{ $text := printf "http://bible.oremus.org/?version=NRSVAE&passage=%s" $psalm }}
{{ $text = replace $text " " "%20" }}
{{ $text = printf "[%s](%s)" $reference $text }}
**{{ $psalm }}**
{{ $text }}
