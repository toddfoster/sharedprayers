**The {{ .Get 0 }} Lesson**
_{{ .Get 1 }}_
<!-- Display a lesson that is provided in verse (poetic) form with newlines that break lines rather than paragraphs. -->
{{ $slug := .Get 1 | lower | replaceRE "^(..[a-z]{1,5}).*"  "$1" }}
{{ $slug := replace $slug " " "" }}
{{ $slug := substr $slug 0 5 }}
{{ $slug := printf "layouts/shortcodes/readings/intro/%s" $slug }}
Lector:
A reading from {{ $slug | readFile | safeHTML }}

{{ .Inner | replaceRE "\n" "\n> " | safeHTML }}

Lector:
The word of the Lord.

**People:**
**Thanks be to God.**
