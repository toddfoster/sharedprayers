{{/* shortcodes/hymn.md [heading] reference */}}
{{/* optional heading is text: e.g., "Processional Hymn" */}}
{{/* references are to hymnals: e.g., H-250, H-S154, L-246, WLP-50 */}}
{{/* look for a hymn text provided in shortcodes/hymns */}}
{{/* else simply provide the title from appropriate json data */}}
{{/* else just output the argument as-is */}}
{{ $DEBUG := false }}
{{ $content := "" }}
{{ $title := .Get 0 }}
{{ $arg := .Get 1 }}

{{ if not $arg }}
	{{ $arg = $title }}
	{{ $title = "" }}
{{ end }}

{{/* look for hymn text provided */}}
{{ $filename := printf "%s.md" (path.Join "layouts/shortcodes/hymns" $arg) }}
{{ if fileExists $filename }}
	{{ $content = $filename | readFile | safeHTML }}
{{ end }}

{{/* If no content, then look for a title in .Site.Data.hymnals */}}
{{/* If it begins with letters and a dash, it might be a reference to a hymn! */}}
{{ $hymnal := "" }}
{{ $referenceArray := (split $arg "-") }}
{{ $h := upper (index $referenceArray 0) }}
{{ $number := upper (index $referenceArray 1) }}
{{ if and (not $content) (in $arg "-") }}
	{{ if $DEBUG }} h={{$h}} {{ end }}
	{{ if in "L"  $h }}
		{{ $filename = "LEVAS" }}
		{{ $hymnal = "LEVAS" }}
	{{ else if in "H" $h }}
		{{ $filename = "Hymnal1982" }}
		{{ $hymnal = "Hymnal" }}
	{{ else if in "WLP" $h }}
		{{ $filename = "WLP" }}
		{{ $hymnal = "WLP" }}
	{{ end}}
	{{ if $DEBUG }} id={{$filename}}, number={{$number}} {{ end }}
	{{ with index .Site.Data.hymnals $filename }}
		{{with first 1 (where .hymns "number" $number) }}
			{{ $content = index (index . 0) "title" }}
		{{ end }}
	{{ end }}
{{ end }}

{{/* If no title, output argument verbatim */}}
{{ if not $content }}
### {{ $title }} Hymn: {{$arg}}
{{ else }}
### {{ $title }} Hymn: _{{ $content }}_ ({{- $hymnal }} {{ $number -}})
{{ end }}
