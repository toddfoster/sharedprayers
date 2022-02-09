#### BCP 367
### The Great Thanksgiving: Eucharistic Prayer B
##### Celebrant:
The Lord be with you.

##### **People:**
**And also with you.**

##### Celebrant:
Lift up your hearts.

##### **People:**
**We lift them to the Lord.**

##### Celebrant:
Let us give thanks to the Lord our God.

##### **People:**
**It is right to give God thanks and praise.**

##### The Celebrant continues:
It is right, and a good and joyful thing, always and everywhere to give thanks to you, Father Almighty, Creator of heaven and earth.

{{ if .Inner }}
{{ strings.TrimLeft "\n " .Inner }}
{{ else }}
##### A Proper Preface may be used here.
{{end}}

Therefore we praise you, joining our voices with Angels and Archangels and with all the company of heaven, who for ever sing this hymn to proclaim the glory of your Name:

{{ with .Get "sanctus" }}#### {{ . }}{{end}}
### Sanctus
##### Celebrant and **People:**
**Holy, holy, holy Lord, God of power and might,
heaven and earth are full of your glory.
Hosanna in the highest.
Blessed is he who comes in the name of the Lord.
Hosanna in the highest.**

##### The Celebrant continues:
We give thanks to you, O God, for the goodness and love which you have made known to us in creation; in the calling of Israel to be your people; in your Word spoken through the prophets; and above all in the Word made flesh, Jesus, your Son. For in these last days you sent him to be incarnate from the Virgin Mary, to be the Savior and Redeemer of the world. In him, you have delivered us from evil, and made us worthy to stand before you. In him, you have brought us out of error into truth, out of sin into righteousness, out of death into life.

On the night before he died for us, our Lord Jesus Christ took bread; and when he had given thanks to you, he broke it, and gave it to his disciples, and said, “Take, eat: This is my Body, which is given for you. Do this for the remembrance of me.” After supper he took the cup of wine; and when he had given thanks, he gave it to them, and said, “Drink this, all of you: This is my Blood of the new Covenant, which is shed for you and for many for the forgiveness of sins. Whenever you drink it, do this for the remembrance of me.”

Therefore, according to his command, O Father,

##### Celebrant and *People*
**We remember his death,
We proclaim his resurrection,
We await his coming in glory;**

##### The Celebrant continues:
And we offer our sacrifice of praise and thanksgiving to you, O Lord of all; presenting to you, from your creation, this bread and this wine.

We pray you, gracious God, to send your Holy Spirit upon these gifts that they may be the Sacrament of the Body of Christ and his Blood of the new Covenant. Unite us to your Son in his sacrifice, that we may be acceptable through him, being sanctified by the Holy Spirit. In the fullness of time, put all things in subjection under your Christ, and bring us to that heavenly country where, with {{ with .Get "saints" }}{{ . }}{{end}} blessed Thomas, the Blessed Virgin Mary, and all your saints, we may enter the everlasting heritage of your sons and daughters; through Jesus Christ our Lord, the firstborn of all creation, the head of the Church, and the author of our salvation.

##### Celebrant:
By him, and with him, and in him, in the unity of the Holy Spirit all honor and glory is yours, Almighty Father, now and for ever.

##### **People:**
**AMEN.**
