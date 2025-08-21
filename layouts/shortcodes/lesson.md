{{/* shortcodes/lesson.md */}}
{{/* parameters: ordinal day/reference conclusion*/}}
{{/* ordinal can be first|second|third|gospel|psalm|psalm-sac */}}
{{/* reference can be blank (assume  $.Page.Params.proper) or the day code (e.g., proper-22) or else literal */}}
{{/* TODO: specify track, use opinionated lectionary by default */}}
{{ $DEBUG := false }}

{{/* Figure out ordinal: keyword or literal or fail */}}
{{ $ordinal := .Get 0 }}
{{ $prettyOrdinal := $ordinal }}
{{ $filename := printf "layouts/shortcodes/readings/ordinal/%s" $ordinal }}
{{ if fileExists $filename }}
    {{ $prettyOrdinal = ( printf "layouts/shortcodes/readings/ordinal/%s" $ordinal ) | readFile | chomp | safeHTML }}
{{ end}}

{{/* third readings are from gospels */}}
{{ $gospelheadings := (in $ordinal "ospel") }}
{{ if in $ordinal "hird" }}
  {{ $ordinal = "gospel" }}
{{ end }}

{{/* psalms have different renderings */}}
{{ $psalm_rendering := "responsively" }}
{{ if (in $ordinal "alm-") }}
    {{ $psalm_rendering = $ordinal | lower | replaceRE "^.*alm-" "" }}
    {{ $ordinal = "psalm" }}
    {{ if $DEBUG }}{{ printf "psalm_rendering = %s" $psalm_rendering }}{{ end }}
{{ end }}

{{/* Figure out day: argument (day spec or literal reference) or page parameter */}}
{{ $day := "" }}
{{ with .Get 1 }}
  {{ $day = . }}
{{ else }}
  {{ $day = $.Page.Params.proper }}
{{ end }}

{{/* Figure out year: page parameter or default A */}}
{{ $year := "A" }}
{{ with $.Page.Params.lectionaryyear }}
    {{ $year = . }}
{{ end }}
{{ $year = $year | upper }}

{{/* ---------------------------- */}}
{{/* Find actual reference */}}
{{/* ---------------------------- */}}
{{/* First, check bcpcl.json */}}
{{ $reference := $day }}
{{  with first 1 (where (where (where $.Site.Data.bcprcl "year" $year) "day" $day) "lesson" $ordinal) }}
	{{ $reference = (index . 0).citation }}
{{ else }}
{{/* Second, check lff2018.json */}}
{{ $lff_slug := $day }}
{{ $lff_ordinal := $ordinal }}
{{ if or (or (eq $ordinal "first") (eq $ordinal "second")) (eq $ordinal "third") }}
  {{ $lff_ordinal = printf "%s_lesson" $ordinal }}
{{ end }}
{{ if $DEBUG }}{{ printf "lff slug is %s with ordinal %s" $lff_slug $lff_ordinal }}{{ end }}
{{  with first 1 (where $.Site.Data.lff2018 "slug" $lff_slug) }}
    {{ $reference = (index (index . 0) $lff_ordinal) }}
{{ else }}
{{/* Third, check holydays directory for a named holiday */}}
{{ $reffile := (printf "layouts/shortcodes/holydays/%s/%s" $day $ordinal ) }}
{{ if $DEBUG }}{{ printf "holy day file is %v" $reffile }}{{ end }}
{{ if fileExists $reffile }}
	{{ $reference = ($reffile | readFile | safeHTML) }}
{{ end }}
{{ end }}
{{ end }}
{{/* else assume a literal reference or blank */}}

{{/* Get custom conclusion */}}
{{ $conclusion := "The word of the Lord." }}
{{ with .Get 2 }}
  {{ $conclusion = . }}
{{ end }}

{{ if $DEBUG }}
	{{ printf "reference = %v" $reference }}
	{{ printf "day = %v" $day }}
	{{ printf "year = %v" $year }}
	{{ printf "ordinal = %v" $ordinal }}
{{ end }}

{{ $reference = $reference | chomp }}
{{ $ref_slug := replace $reference "Ecclesiasticus" "Sirach" }}
{{ $ref_slug = $ref_slug | lower | replaceRE "(\\s)" "" | replaceRE "^(..[a-z]{1,5}).*"  "$1" }}
{{ $ref_slug = substr $ref_slug 0 5 }}


{{/* ---------------------------- */}}
{{/* Introduce reading */}}
{{/* ---------------------------- */}}
{{ if or (in $ordinal "salm") (in $ordinal "anticle") }}
{{/* Heading for psalm/canticle */}}
{{ $psalmlabel := "Psalm " }}
{{ $notonlynumbers := $reference | replaceRE "[^G-Zg-z]" "" }}
{{ if $notonlynumbers }}
  {{ $psalmlabel = "" }}
{{ end }}
{{ if not $reference }}
### {{ $psalmlabel }} ____
    {{ else }}
### {{ $psalmlabel }}{{ $reference }}
{{ end }}
{{ else if $gospelheadings }}
##### The people stand as able.
### The Holy Gospel: _{{- $reference -}}_

{{ $gospel :=  strings.TrimRight " .,:-–0123456789()abcd" $reference }}
##### Deacon:
The Holy Gospel of our Lord Jesus Christ according to {{ with $gospel }}{{ . }}{{ else }}_____{{ end }}.

##### **People:**
**Glory to you, Lord Christ.**

##### Deacon:
{{ else }}
{{/* Heading other lessons */}}
### The {{ $prettyOrdinal }} Lesson: _{{- $reference -}}_
##### Lector:
{{ $intro := ( printf "layouts/shortcodes/readings/intro/%s" $ref_slug ) | readFile | safeHTML }}
A reading from {{ $intro }}
{{ end }}

{{/* ---------------------------- */}}
{{/* Provide reading itself */}}
{{/* ---------------------------- */}}
{{ with .Inner }}
   {{ . | safeHTML}}
{{ else }}
{{ if $reference }}
   {{/* Hard code a few tweaks */}}
   {{ $reference = replace $reference "Ecclesiasticus" "Sirach" }}
   {{ $reference = replace $reference "Canticle 3 or 15" "Canticle 15" }}

   {{ if not ( in ($reference | lower | replaceRE "[^a-z]+" "") "solomon") }}
      {{ $reference = replace $reference "Wisdom" "Wisdom of Solomon" }}
   {{ end }}
   {{ if ( in $psalm_rendering "sac" ) }}
      {{ $reference = replace $reference "105:1-6,23-26,45c" "105:1-6,23-26,45b" }}
   {{ end }}
   {{ $filename := $reference | lower | replaceRE "[^a-z0-9]+" "" }}
   {{ $ref_slug := $filename | replaceRE "psalm" "" }}
   {{ $filepath := ( printf "layouts/shortcodes/readings/pss/%s/%s" $psalm_rendering $ref_slug ) }}
   {{ if in $ordinal "psalm" }}
      {{ if in $filepath "1samuel2110" }}
         {{ $filepath = "layouts/shortcodes/canticles/hannahsong.md" }}
      {{ end }}
   {{ end }}
   {{ if $DEBUG }}{{ printf "file=%v" $filepath }}{{ end }}
   {{ if not (fileExists $filepath) }}
        {{ $filepath = ( printf "layouts/shortcodes/readings/pss/responsively/%s" $ref_slug ) }}
        {{ if $DEBUG }}{{ printf "file=%v" $filepath }}{{ end }}
        {{ if not (fileExists $filepath) }}
            {{ $filepath = ( printf "layouts/shortcodes/readings/pss/markdown/%s" $ref_slug ) }}
            {{ if $DEBUG }}{{ printf "file=%v" $filepath }}{{ end }}
            {{ if not (fileExists $filepath) }}
                {{ $filepath = ( printf "layouts/shortcodes/readings/pss/plaintext/%s" $ref_slug ) }}
                {{ if $DEBUG }}{{ printf "file=%v" $filepath }}{{ end }}
                {{ if not (fileExists $filepath) }}
                      {{ $filepath = printf "layouts/shortcodes/readings/lpn/%s" $filename }}
                      {{ if $DEBUG }}{{ printf "file=%v" $filepath }}{{ end }}
                      {{ if not (fileExists $filepath) }}
                            {{ $filepath = printf "layouts/shortcodes/readings/nrsv/%s" $filename }}
                            {{ if $DEBUG }}{{ printf "file=%v" $filepath }}{{ end }}
                      {{ end }}
                {{ end }}
            {{ end }}
        {{ end }}
    {{ end }}
    {{ if fileExists $filepath }}
{{ $filepath | readFile | safeHTML  }}
    {{ else }}
       {{ $url := printf "http://bible.oremus.org/?version=NRSVAE&passage=%s" $reference }}
       {{ $url = replace $url " " "%20" }}
       {{ $link := printf "[%s](%s)" $reference $url }}
> _This reading can be found at {{ $link }}_
     {{ end }}
{{ else }}{{/* no $reference given */}}
> . . .
{{ end }}
{{ end }}

{{/* ---------------------------- */}}
{{/* Conclude reading  */}}
{{/* ---------------------------- */}}
{{ if or (in $ordinal "salm") (in $ordinal "anticle") }}
{{ else if $gospelheadings }}
##### Deacon:
The Gospel of the Lord.

##### **People:**
**Praise to you, Lord Christ.**
{{ else }}
##### Lector:
{{ $conclusion }}

##### **People:**
**Thanks be to God.**
{{ end }}
