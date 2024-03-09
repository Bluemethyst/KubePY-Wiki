---
sidebar_label: "Adding Items"
sidebar_position: 2
---

# Adding Items

### Adding custom items with CucumberJS

To add simple custom Cucumber Library items into the game using KubeJS you can use the regular `event.create("item_name", "tool_type")` method. Here are some examples:

```js
// Inside startup_scripts, this will create a tool with no texture
StartupEvents.registry("item", (event) => {
    event.create("test_crossbow", "crossbow");
    event.create("test_fishingrod", "fishingrod");
    event.create("test_paxel", "paxel");
    event.create("test_scythe", "scythe");
    event.create("test_shear", "shears");
    event.create("test_sickle", "sickle");
    event.create("test_wateringcan", "wateringcan");
});
```

CucumberJS also comes bundled with base colorless textures, thanks to [FooterMan](https://github.com/FooterMan15), to help you build your tools. Here is a full list of the textures. You can see what they look like on [Github](https://github.com/Bluemethyst/CucumberJS/tree/master/src/main/resources/assets/cucumberjs/textures/item)

![img](/img/cucumberjs/textures.png)

You can use them like this:

```js
StartupEvents.registry("item", (event) => {
    // Creates a sickle with a golden head
    event
        .create("test_sickle", "sickle")
        .texture("layer0", "cucumberjs:item/sickle_handle")
        .texture("layer1", "cucumberjs:item/sickle_head")
        .color(0xd5a34c);
    // Creates a plain white/grey watering can
    event
        .create("test_wateringcan", "wateringcan")
        .texture("cucumberjs:item/watering_can");
});
```

Come to the [KubeJS Discord](https://discord.gg/lat) if you ever need help and feel free to give me a ping in your support ticket, @bluemethyst
