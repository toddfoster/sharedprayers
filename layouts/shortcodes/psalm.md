**Psalm** {{ .Get 0 }}
{{ if gt (len .Inner) 0}}
{{ .Inner | replaceRE "\n" "\n> " | safeHTML }}
{{ else }}
{{ $slug := printf "layouts/shortcodes/readings/pss/responsively/%s" (.Get 0) }}
{{ $slug | readFile | safeHTML }}
{{end}}
