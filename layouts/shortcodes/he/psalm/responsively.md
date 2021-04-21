{{/* reference is passed in, by proper, else generic */}}
{{ $reference := "" }}
{{ with .Get 0 }}
  {{ $reference = . }}
{{ else }}
	{{/* Try to find the proper reference as a Sunday or a Holy Day */}}
	{{ $reffile := (printf "layouts/shortcodes/readings/%s/opinionated/%s/psalm" $.Page.Params.lectionaryyear $.Page.Params.proper) }}
	{{ if  not (fileExists $reffile) }}
		{{ $reffile = (printf "layouts/shortcodes/readings/holydays/opinionated/%s/psalm" $.Page.Params.proper ) }}
    {{ end }}
	{{ if (fileExists $reffile) }}
      {{ $reference = ($reffile | readFile | safeHTML) }}
    {{ end }}
{{ end }}

{{/* $reference is blank, a Psalm (max one letter in verse ref.) or a canticle */}}
{{ if not $reference }}
##### A Psalm, hymn, or anthem may follow each Reading.
{{ else }}
**Psalm** {{ $reference }}

{{/* Text is provide in .Inner or in readings or by oremus */}}
{{ with .Inner }}
{{ . | replaceRE "\n" "\n> " | safeHTML }}
{{ else }}
    {{ $slug := $reference | lower | replaceRE "[^A-Za-z0-9]+" "" }}
    {{ $filename := ( printf "layouts/shortcodes/readings/pss/responsively/%s" $slug ) }}
    {{ if fileExists $filename }}
{{ $filename | readFile | safeHTML }}
	{{ else }}
	        {{ $url := printf "http://bible.oremus.org/?version=NRSVAE&passage=Psalm %s" $reference }}
            {{ $url = replace $url " " "%20" }}
> _This reading can be found at [Psalm {{ $reference }}]({{ $url }})_
	{{ end }}
{{ end }}
{{ end }}
