{{ if (.Get 0)}}
### Processional
{{ $filename := printf "%s.md" (path.Join "layouts/shortcodes" (.Get 0)) }}
{{ $filename | readFile | safeHTML }}
{{end}}
