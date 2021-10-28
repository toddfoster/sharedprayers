{{ if (.Get 0)}}
{{ $filename := printf "%s.md" (path.Join "layouts/shortcodes" (.Get 0)) }}
{{ if fileExists $filename }}
### Entrance
{{ $filename | readFile | safeHTML }}
{{ else }}
### Entrance Hymn: {{ (.Get 0) }}
{{end}}{{end}}
