**Psalm** {{ .Get 0 }}
{{ $f := printf "layouts/shortcodes/readings/pss/responsively/%s" (.Get 0) }}
{{ if fileExists $f }}
{{ $f | readFile | safeHTML }}
{{ else }}
{{ $f = printf "layouts/shortcodes/readings/lpn/%s" (.Get 0) }}
{{ if fileExists $f }}
{{ $f | readFile | safeHTML }}
{{ end }}
{{ end }}
