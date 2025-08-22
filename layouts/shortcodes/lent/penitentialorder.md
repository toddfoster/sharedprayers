## A Penitential Order

Celebrant:
> Bless the Lord who forgives all our sins. 

**People:**
> **His mercy endures for ever.**

##### The people kneel or stand as able.

### The Decalogue
##### The _Officiant_ and the **People** call and respond:

Celebrant:
> Hear the commandments of God to God's people:

> I am the Lord your God who brought you out of bondage. You shall have no other gods but me.

**People:**
> **Amen. Lord have mercy.**

> You shall not make for yourself any idol.
> **Amen. Lord have mercy.**

> You shall not invoke with malice the Name of the Lord your God.
> **Amen. Lord have mercy.**

> Remember the Sabbath Day and keep it holy.
> **Amen. Lord have mercy.**

> Honor your father and your mother.
> **Amen. Lord have mercy.**

> You shall not commit murder.
> **Amen. Lord have mercy.**

> You shall not commit adultery.
> **Amen. Lord have mercy.**

> You shall not steal.
> **Amen. Lord have mercy.**

> You shall not be a false witness.
> **Amen. Lord have mercy.**

> You shall not covet anything that belongs to your neighbor.
> **Amen. Lord have mercy.**


{{/* DRY: logic adapted from choose-proper */}}
{{ $week := default $.Page.Params.proper (.Get 0) }}
{{ $path := "" }}
{{  with first 1 (where (where $.Site.Data.choose "item" "penitentialorder-sentence") "day" $week)  }}
   {{ $path = default "" (index . 0).path }}
{{ end }}
{{ $DEBUG := false }}
{{ if $DEBUG }}{{ printf "=== DEBUG === week=%s path=%s" $week $path }}{{ end }}
{{ $fullpath := printf "layouts/shortcodes/lent/penitentialordersentence/%s.md" $path }}
{{ if not (fileExists $fullpath) -}}
  {{ $fullpath = "layouts/shortcodes/lent/penitentialordersentence/jesussaid.md" }}
{{- end}}
Officiant:
> {{ readFile ($fullpath | safeHTML) }}

Deacon or Celebrant:
> Let us confess our sins against God and our neighbor.

##### Silence may be kept.

**Officiant and People:**
> **Most merciful God,
we confess that we have sinned against you
in thought, word, and deed,
by what we have done,
and by what we have left undone.
We have not loved you with our whole heart;
we have not loved our neighbors as ourselves.
We are truly sorry and we humbly repent.
For the sake of your Son Jesus Christ,
have mercy on us and forgive us;
that we may delight in your will,
and walk in your ways,
to the glory of your Name. Amen.**

Priest:
> Almighty God have mercy on you, forgive you all your sins through our Lord Jesus Christ, strengthen you in all goodness, and by the power of the Holy Spirit keep you in eternal life. **Amen.**

##### A deacon or lay person using the preceding form remains kneeling, and substitutes “us” for “you” and “our” for “your.”
