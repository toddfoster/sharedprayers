### The Psalm Appointed
##### The People are seated.
##### The Psalm is sung or said in a suitable manner (e.g., responsively by verse, in unison, or read by the lector).

**Psalm** {{ .Get 0 }}
{{ if gt (len .Inner) 0}}
{{ .Inner | replaceRE "\n" "\n> " | safeHTML }}
{{ else }}
{{ $slug := printf "layouts/shortcodes/readings/pss/responsively/%s" (.Get 0) }}
{{ if (fileExists $slug) }}
  {{ $slug | readFile | safeHTML }}
{{ end }}
{{ end }}

##### At the end of the Psalms is sung or said
> **Glory to the Father, and to the Son, and to the Holy Spirit: *
> as it was in the beginning, is now, and will be for ever. Amen.**
