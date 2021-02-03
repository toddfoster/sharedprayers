##### The people stand as able.
**The Holy Gospel**
_{{ .Get 0 }}_

{{$gospel := split ( .Get 0) " " | first 1 }}
Deacon:
> The Holy Gospel of our Lord Jesus Christ according to Mark.

**People:**
> **Glory to you, Lord Christ.**

Deacon:
{{ if gt (len .Inner) 0}}
{{ .Inner | replaceRE "\n" "\n\n> " | safeHTML }}
{{ else }}
{{ $url := printf "http://bible.oremus.org/?version=NRSVAE&passage=%s" (.Get 0) }}
{{ $url := replace $url " " "%20" }}
{{ $ref := printf "[%s](%s)" (.Get 0) $url }}
> _This reading can be found at {{ $ref }}_
{{end}}

Deacon:
> The Gospel of the Lord.

**People:**
> **Praise to you, Lord Christ.**
