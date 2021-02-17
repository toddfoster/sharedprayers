{{ $season := default ($.Page.Params.season) (.Get 0) }}
{{ $weekday := default "monday" (default ($.Page.Params.weekday) (.Get 1)) }}
{{ $canticle := printf "layouts/shortcodes/office/mp/canticle/first/%s/%s.md" $season $weekday }}
{{ readFile $canticle | safeHTML }}
