**Psalm** {{ .Get 0 }}
{{ $slug := printf "layouts/shortcodes/readings/pss/responsively/%s" (.Get 0) }}
{{ $slug | readFile | safeHTML }}
