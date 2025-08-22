---
title: Daily Morning Prayer, Rite Two -- Automated Template
date: 2021-02-12
bcppage: 75ff.
note: Template
season: advent
weekday: tuesday
---

{{% comment %}}
TODO

Package up into a single shortcode? While allowing lessons to be provided? Maybe have to settle for fewer shortcodes: roll them up like invitatory already is a combination of two others. Allow collect for the liturgical week or event to be provided as well.
{{% /comment %}}

{{% office/mp/sentence %}}
{{% comment %}}
office/mp/sentence can be used in three ways:
  1. pass it the name of a sentence in office/mp/sentence
  2. pass it a path in quotes (e.g., "choose/any/tuesday")
  3. it will implicitly take season and weekday from the frontmatter
        and choose a sentence in office/mp/sentence/choose
{{% /comment %}}

{{% choose-weekday mp confession %}}
{{% comment %}}
choose-weekday mp confession can be used in two ways:
1. specify "short" or "long" as a parameter
2. it will implicitly take the weekday from frontmatter
     and choose from choose-weekday mp confession/choose
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
##### Reader:
A Reading (Lesson) from _____________.

...

##### Reader:
The Word of the Lord.

##### **People:**
Thanks be to God.

{{% office/mp/canticle/first %}}
{{% comment %}}
Uses front matter to get season, weekday;
Can override by providing parameters in that order
{{% /comment %}}
##### Reader:
A Reading (Lesson) from _____________.

...

##### Reader:
The Word of the Lord.

##### **People:**
Thanks be to God.

{{% office/mp/canticle/second %}}

##### Reader:
A Reading (Lesson) from _____________.

...

##### Reader:
The Word of the Lord.

##### **People:**
Thanks be to God.

{{% office/apostlescreed %}}

# The Prayers

##### The people stand or kneel
{{% letuspray %}}

{{% lordsprayer2 %}}

{{% office/mp/suffrages %}}
{{% comment %}}
Uses front matter to decide day of week; override with parameter
{{% /comment %}}

_Collect Proper to the Day_

{{% office/mp/collect %}}
{{% comment %}}
Uses front matter to decide day of week for collect; override with parameter
Parameter can be name of collect (e.g., guidance)
or point to day of week (e.g., "choose/sunday")
{{% /comment %}}

{{% office/mp/mission %}}
{{% comment %}}
Uses front matter to decide day of week for prayer for mission
override with parameter
Parameter can be name of prayer (e.g., "1" or "2" or "3")
or point to day of week (e.g., "choose/sunday")
{{% /comment %}}

##### Here may be sung a hymn or anthem.

##### Authorized intercessions and thanksgivings may follow.

{{% choose-weekday mp beforetheclose %}}
{{% comment %}}
Uses front matter to decide day of week for the
general thanks giving or prayer of St. Chrysostom.
override with parameter
Parameter can be name of prayer (e.g., generalthanksgiving)
or point to day of week (e.g., "choose/sunday")
{{% /comment %}}

{{% office/mp/letusbless %}}
{{% comment %}}
Uses front matter to decide whether or not it to
add the Alleluias for Easter, or
override with parameter for name of season.
{{% /comment %}}

{{% office/mp/conclusion %}}
{{% comment %}}
Uses front matter to decide day of week for the conclusion.
override with parameter
Parameter can be the first two/three words
(e.g., thegrace, maythegod, glorytogod)
or point to day of week (e.g., "choose/sunday")
{{% /comment %}}

{{% nrsv %}}
