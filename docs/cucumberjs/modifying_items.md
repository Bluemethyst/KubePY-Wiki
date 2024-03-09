---
sidebar_label: "Modifying Items"
sidebar_position: 3
---

# Modifying Items

### Modifying already added Cucumber Library items

To modify items from other mods that use Cucumber Library such as Mystical Agriculture or Pickle Tweaks you can use the `CucumberItemEvents.modification` callback. Heres an example that adds 1000 damage to the Mystical Agriculture Inferium Axes base damage value of 4, making it have a total damage of 1004.

```js
CucumberItemEvents.modification((event) => {
    event.modify("mysticalagriculture:inferium_axe", (item) => {
        item.cucumberAttackDamage = 1000;
    });
});
```

You can also change the range and chance of a watering can, and loads more! Use [ProbeJS](https://www.curseforge.com/minecraft/mc-mods/probejs) to see them all.

```js
CucumberItemEvents.modification((event) => {
    event.modify("mysticalagriculture:inferium_watering_can", (item) => {
        item.range = 50; // WILL CRASH THE GAME
        item.chance = 1; // Makes it a 100% chance for the watering can to bonemeal crops
    });
});
```

Come to the [KubeJS Discord](https://discord.gg/lat) if you ever need help and feel free to give me a ping in your support ticket, @bluemethyst
