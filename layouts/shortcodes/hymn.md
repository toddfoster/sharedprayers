{{/* shortcodes/hymn.md [reference] */}}
{{/* references are to hymnal: H-250, H-S154, L-246, WLP-50 */}}
{{/* TODO: look for a hymn text provided */}}
{{/* else simply provide the title from appropriate json data */}}
{{/* else just output the argument as-is */}}
{{ $DEBUG := false }}
{{ $content := "" }}
{{ $arg := .Get 0 }}

{{/* TODO look for hymn text provided */}}

{{/* If no content, then look for a title in .Site.Data.hymnals */}}
{{/* If it begins with letters and a dash, it might be a reference to a hymn! */}}
{{ if and (not $content) (in $arg "-") }}
	{{ $referenceArray := (split $arg "-") }}
	{{ $h := upper (index $referenceArray 0) }}
	{{ if $DEBUG }} h={{$h}} {{ end }}
	{{ $id := "" }}
	{{ if in "L"  $h }}{{ $id = "LEVAS" }}
	{{ else if in "H" $h }} {{ $id = "Hymnal1982" }}
	{{ else if in "WLP" $h }}{{ $id = "WLP" }}
	{{ end}}
	{{ $number := upper (index $referenceArray 1) }}
	{{ if $DEBUG }} id={{$id}}, number={{$number}} {{ end }}
	{{ with index .Site.Data.hymnals $id }}
		{{with first 1 (where .hymns "number" $number) }}
			{{ $content = index (index . 0) "title" }}
		{{ end }}
	{{ end }}
{{ end }}

{{/* If no title, output argument verbatim */}}
{{ if not $content }}{{ $content = $arg }}{{ end }}

### Hymn: {{ $content }}
