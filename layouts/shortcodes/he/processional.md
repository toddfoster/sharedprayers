{{ if (.Get 0)}}
{{ $filename := printf "%s.md" (path.Join "layouts/shortcodes" (.Get 0)) }}
{{ if fileExists $filename }}
### Processional
{{ $filename | readFile | safeHTML }}
{{ else }}
### Processional: {{ (.Get 0) }}
{{end}}{{end}}
