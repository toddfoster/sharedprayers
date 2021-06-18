{{ $reference := "" }}
{{/* parameter = gospel reference */}}
{{ if .Get 0 }}
    {{ $reference = .Get 0 }}
{{ else }}
    {{ if and $.Page.Params.lectionaryyear $.Page.Params.proper }}
    	{{/* Try to find the proper reference as a Sunday or a Holy Day */}}
        {{ $reffile := printf "layouts/shortcodes/readings/%s/opinionated/%s/gospel" $.Page.Params.lectionaryyear $.Page.Params.proper }}
    	{{ if  not (fileExists $reffile) }}
	    	{{ $reffile = (printf "layouts/shortcodes/readings/holydays/opinionated/%s/gospel" $.Page.Params.proper) }}
        {{ end }}
        {{ if (fileExists $reffile) }}
            {{ $reference = $reffile | readFile | safeHTML }}
        {{ end }}
    {{ end }}
{{ end }}
{{ $reference = $reference | chomp }}
##### The people stand as able.
#### The Holy Gospel: {{ if gt ( len $reference) 3 }}_{{ $reference }}_{{ end }}

{{ $gospel :=  strings.TrimRight " .,:-–0123456789" $reference }}
##### Deacon:
The Holy Gospel of our Lord Jesus Christ according to {{ with $gospel }}{{ . }}{{ else }}_____{{ end }}.

##### **People:**
**Glory to you, Lord Christ.**

##### Deacon:
{{/* Text is provide in .Inner or in readings or by oremus */}}
{{ with .Inner }}
{{ . }}
{{ else }}
    {{ if gt (len $reference) 3 }}
        {{ $slug := $reference | lower | replaceRE "[^A-Za-z0-9]+" "" }}
        {{ $filename := ( printf "layouts/shortcodes/readings/nrsv/%s" $slug ) }}
        {{ if fileExists $filename }}
{{ $filename | readFile | safeHTML }}
	    {{ else }}
	        {{ $url := printf "http://bible.oremus.org/?version=NRSVAE&passage=%s" $reference }}
            {{ $url = replace $url " " "%20" }}
_This reading can be found at [{{ $reference }}]({{ $url }})_
        {{ end }}
    {{ else }}
 . . .
    {{ end }}
{{ end }}
##### Deacon:
The Gospel of the Lord.

##### **People:**
**Praise to you, Lord Christ.**
