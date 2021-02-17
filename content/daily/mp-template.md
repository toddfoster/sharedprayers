---
title: Daily Morning Prayer, Rite Two
date: 2021-02-12
bcppage: 75ff.
note: Template
season: pentecost
weekday: tuesday
---

{{% office/mp/sentence %}}
{{% comment %}}
office/mp/sentence can be used in three ways:
  1. pass it the name of a sentence in office/mp/sentence
  2. pass it a path in quotes (e.g., "choose/any/tuesday")
  3. it will implicitly take season and weekday from the frontmatter
        and choose a sentence in office/mp/sentence/choose
{{% /comment %}}

{{% office/mp/confession %}}
{{% comment %}}
office/mp/confession can be used in two ways:
1. specify "short" or "long" as a parameter
2. it will implicitly take the weekday from frontmatter
     and choose from office/mp/confession/choose
{{% /comment %}}

{{% office/mp/invitatory  %}}
{{% comment %}}
office/mp/invitatory strives to choose antiphon and invitatory
from the front matter. 
Override parameters = season invitatory
Must specify season in order to specify invitatory; by default,
invitatory is chosen according to the season.

Other commands (not very DRY):
- office/mp/invitatory/intro by default add Alleluia if frontmatter season doesn't set lent.
This can be over-ridden by passing a parameter: "lent" or not.

- office/mp/antiphon can be called with the name of the antiphon in office/mp/antiphon/
Or it will try to find an antiphon matching the frontmatter season.

Or you can call office/mp/antiphon/other (with optional parameter of a day of the week)
to use the three "Other" antiphons as divvied up for the days of the week.

TODO: Antiphons are a bit more detailed than this. During the weeks when Epiphany
and Ascension occur, they can change mid-week. There are also special antiphons for
the Day of Pentecost and Trinity Sunday. And for Feasts of the Incarnation and Other
Major Saints Days. And All Saints. That's a lot of detail.

TODO: Antiphon comes before and after invitatory. Need a single command to avoid
double-entry error.

- office/mp/invitatory/venite (etc.) can be called directly: invitatory only, no intro/antiphon
{{% /comment %}}

##### Then follows
## The Psalm or Psalms Appointed
##### At the end of the Psalms is sung or said
{{% office/gloriapatri %}}

# The Lessons
_Reader:_
> A Reading (Lesson) from _____________.

> ...

_Reader:_
> The Word of the Lord.

**People:**
> Thanks be to God.

{{% office/mp/canticle/first %}}
{{% comment %}}
Uses front matter to get season, weekday;
Can override by providing parameters in that order
{{% /comment %}}
_Reader:_
> A Reading (Lesson) from _____________.

> ...

_Reader:_
> The Word of the Lord.

**People:**
> Thanks be to God.

{{% office/mp/canticle/second %}}

{{% office/apostlescreed %}}

# The Prayers

##### The people stand or kneel
{{% letuspray %}}

{{% lordsprayer2 %}}

{{% office/mp/suffrages %}}
{{% comment %}}
Uses front matter to decide day of week; override with parameter
{{% /comment %}}

##### The Officiant then says one or more of the following Collects
##### Collects may be said by the Officiant or by the people together, or they may be said in turn.

_Collect Proper to the Day_

{{% office/mp/collect/sundays %}}
{{% office/mp/collect/fridays %}}
{{% office/mp/collect/saturdays %}}
{{% office/mp/collect/renewal %}}
{{% office/mp/collect/peace %}}
{{% office/mp/collect/grace %}}
{{% office/mp/collect/guidance %}}

{{% office/mp/mission/1 %}}
{{% office/mp/mission/2 %}}
{{% office/mp/mission/3 %}}

##### Here may be sung a hymn or anthem.

##### Authorized intercessions and thanksgivings may follow.
##### Before the close of the Office one or both of the following may be used

{{% office/mp/generalthanksgiving %}}
{{% office/mp/prayer-chrysostom %}}

##### Then may be said
Officiant:
> Let us bless the Lord.

**People:**
> **Thanks be to God.**

##### From Easter Day through the Day of Pentecost “Alleluia, alleluia” may be added to the preceding versicle and response.

{{% office/mp/conclusion/thegrace %}}
{{% office/mp/conclusion/maythegod %}}
{{% office/mp/conclusion/glorytogod %}}

{{% nrsv %}}
