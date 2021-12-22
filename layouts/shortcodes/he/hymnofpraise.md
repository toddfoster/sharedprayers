{{ if (.Get 0)}}
{{ $filename := printf "%s.md" (path.Join "layouts/shortcodes" (.Get 0)) }}
{{ if fileExists $filename }}
### Hymn of Praise
{{ $filename | readFile | safeHTML }}
{{ else }}
### Hymn of Praise: {{ (.Get 0) }}
{{end}}{{end}}
