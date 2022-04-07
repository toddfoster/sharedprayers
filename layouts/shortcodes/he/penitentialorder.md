## A Penitential Order
##### The people kneel or stand as able.

### The Decalogue
##### The _Celebrant_ and the **People** call and respond:

##### Celebrant:
> Hear the commandments of God to God's people:

> I am the Lord your God who brought you out of bondage. You shall have no other gods but me.

##### **People:**
> **Amen. Lord have mercy.**

##### Celebrant:
> You shall not make for yourself any idol.

##### **People:**
> **Amen. Lord have mercy.**

##### Celebrant:
> You shall not invoke with malice the Name of the Lord your God.

##### **People:**
> **Amen. Lord have mercy.**

##### Celebrant:
> Remember the Sabbath Day and keep it holy.

##### **People:**
> **Amen. Lord have mercy.**

##### Celebrant:
> Honor your father and your mother.

##### **People:**
> **Amen. Lord have mercy.**

##### Celebrant:
> You shall not commit murder.

##### **People:**
> **Amen. Lord have mercy.**

##### Celebrant:
> You shall not commit adultery.

##### **People:**
> **Amen. Lord have mercy.**

##### Celebrant:
> You shall not steal.

##### **People:**
> **Amen. Lord have mercy.**

##### Celebrant:
> You shall not be a false witness.

##### **People:**
> **Amen. Lord have mercy.**

##### Celebrant:
> You shall not covet anything that belongs to your neighbor.

##### **People:**
> **Amen. Lord have mercy.**

{{ $week := "default" }}
{{ with default $.Page.Params.proper (.Get 0) }}
{{ $week = . }}
{{ end }}
{{ $sentence := printf "layouts/shortcodes/he/penitentialordersentence/%s.md" $week }}
{{ if not (fileExists $sentence) }}
  {{ $sentence = "layouts/shortcodes/he/penitentialordersentence/default.md" }}
{{ end}}
##### Celebrant:
> {{ readFile $sentence }}

##### Deacon or Celebrant:
> Let us confess our sins against God and our neighbor.

##### Silence may be kept.

##### **Minister and People:**
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

##### Priest:
> Almighty God have mercy on you, forgive you all your sins through our Lord Jesus Christ, strengthen you in all goodness, and by the power of the Holy Spirit keep you in eternal life. **Amen.**

##### A deacon or lay person using the preceding form remains kneeling, and substitutes “us” for “you” and “our” for “your.”
