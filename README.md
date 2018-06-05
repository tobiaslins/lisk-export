# lisk-export

### How to use

Just post following domain into your browser: `https://export.lisk.ws/` and append your Lisk ID to it.

Example `https://export.lisk.ws/17890508407355636952L`. Now press enter and the download should start immediately!

You can overwrite the default `delimiter` which is `;`. Just append a query parameter (this will set it to `,`):

```
https://export.lisk.ws/17890508407355636952L?delimiter=%2C
```

By default it exports all transactions from current year (2018) , this can also be overwritten by setting the `year` parameter

```
https://export.lisk.ws/17890508407355636952L?delimiter=%2C&year=2017
```

#### Custom timezone

It is possible to overwrite the custom `timezone` which is set to `UTC` to default.
Just append the `timezone` parameter with the timezone you are in. You can lookup them here: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones

```
https://export.lisk.ws/17890508407355636952L?timezone=Europe/Paris
```

#### Delegate Block Export

Public Key is needed for this action.

```
https://export.lisk.ws/delegate/PUBLICKEYHERE
```

### Support me

Of course feel free to support my work by voting for [`elevate`](https://explorer.lisk.io/delegate/17890508407355636952L) or simply donating a small amount! :)

### Thanks to

| Delegate       |                                       Avatar                                       |
| -------------- | :--------------------------------------------------------------------------------: |
| cc001          |     ![Avatar from cc001](https://avatar.lisk.ws/6787154358850114730L?size=25)      |
| vipertkd       |    ![Avatar from vipertkd](https://avatar.lisk.ws/4980451641598555896L?size=25)    |
| alepop         |     ![Avatar from alepop](https://avatar.lisk.ws/9010579446607279905L?size=25)     |
| liskpro.com    |  ![Avatar from liskpro.com](https://avatar.lisk.ws/13112651512533400586L?size=25)  |
| stellardynamic | ![Avatar from stellardynamic](https://avatar.lisk.ws/7292106026137978431L?size=25) |
