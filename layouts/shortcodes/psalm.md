**Psalm** {{ .Get 0 }}
{{ if gt (len .Inner) 0}}
{{ .Inner | replaceRE "\n" "\n> " | safeHTML }}
{{ else }}
{{ $filename := .Get 0 | replaceRE "[^A-Za-z0-9]+" "" }}
{{ $slug := printf "layouts/shortcodes/readings/pss/responsively/%s" ($filename) }}
{{ $slug | readFile | safeHTML }}
{{end}}
