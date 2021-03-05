{{/* reference is passed in, by proper, else generic */}}
{{ $reference := "" }}
{{ if len .Params | eq 1 }}
{{ $reference = .Get 0 }}
{{ else if (isset $.Page.Params.proper) }}
    {{ $reffile := printf "layouts/shortcodes/readings/%s/opinionated/%s/psalm" $.Page.Params.lectionaryyear $.Page.Params.proper }}
    {{ if (fileExists $reffile) }}
        {{ $reference = $reffile | readFile | safeHTML }}
    {{ end}}
{{ end }}

{{/* $reference is blank, a Psalm (max one letter in verse ref.) or a canticle */}}
{{ if len $reference | eq 0 }}
##### A Psalm, hymn, or anthem may follow each Reading.
{{ else }}
**Psalm** $reference
{{ end }}

{{/* Text is provide in .Inner or in readings or by oremus */}}
{{ if len .Inner | gt 0 }}
{{ .Inner | replaceRE "\n" "\n> " | safeHTML }}
{{ else }}
{{ $filename := $reference | replace " " "" | replace "," " " | replace "." "" | replace ":" "" | replace "-" "" | replace ";" "" }}
{{ $filename = ( printf "layouts/shortcodes/readings/pss/responsively/%s" $filename ) }}
    {{ if fileExists $filename }}
{{ $filename | readFile | safeHTML }}
	{{ else }}
{{ $text := printf "http://bible.oremus.org/?version=NRSVAE&passage=%s" $reference }}
{{ $text = replace $text " " "%20" }}
{{ $text = printf "[%s](%s)" $reference $text }}
{{ $text }}
	{{ end }}
{{ end }}
