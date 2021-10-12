---
title: Test JSON
date: 2021-10-12
lectionaryyear: a
proper: first-sunday-in-lent
liturgydate: 2021-10-12
bcppage: 355ff.
---

## Test lessonjson
##### DEBUG 10: second lesson will be Titus 3.4-7
##### three parameters, specifying liturgical day & year (uppercase)
{{% he/lessonjson "second" "christmas-day-ii" "A" /%}}

##### DEBUG 20: second lesson will be Titus 3.4-7
##### three parameters, specifying liturgical day & year (lowercase)
{{% he/lessonjson "second" "christmas-day-ii" "a" /%}}

##### DEBUG 30: second lesson will be Titus 3.4-7
##### two parameters, specifying liturgical day
{{% he/lessonjson "second" "christmas-day-ii" /%}}

##### DEBUG 40: First lesson will be Gen 2.15-17, 3.1-7
##### one parameter
{{% he/lessonjson "first" /%}}


TODO:
- psalm?
- proper-x gets the right track
- choices made in expected ways with multiple readings, multiple psalms, canticle choicesqq
- fix single.html referring to page title under proper (add to json?)

##### DEBUG: Unreal lesson will be Ecclesiumnonsense
##### two parameters: custom ordinal, custom reference
{{% he/lessonjson "Unreal" "Ecclesiumnonsense" /%}}


----------
