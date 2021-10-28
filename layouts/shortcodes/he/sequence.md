{{ if (.Get 0)}}
{{ $filename := printf "%s.md" (path.Join "layouts/shortcodes" (.Get 0)) }}
{{ if fileExists $filename }}
### Sequence
{{ $filename | readFile | safeHTML }}
{{ else }}
### Sequence Hymn: {{ (.Get 0) }}
{{end}}{{end}}
