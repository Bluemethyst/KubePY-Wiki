---
sidebar_label: 'Custom Recipes'
sidebar_position: 3
---

# Creating Custom Recipes

To create a custom recipe please refer to the example below. As always PLEASE refer to the <a href="https://kubejs.com/wiki/tutorials/recipes" target="_blank">KubeJS wiki</a> for more information about recipes, not all things will work with KubePY and vice versa

```python
import kubepy # import the KubePY module

instance_path = r"D:\Minecraft\instances\1.20.1(2)\.minecraft" # set your .minecraft instance path so the scripts can be placed directly into them

recipes = kubepy.Recipes(instance_path=instance_path) # create an instance of the recipes class

recipes.shapeless('minecraft:diamond', 'minecraft:iron_block') # create a shapeless recipe, output, input
recipes.shaped('minecraft:stone',[ # create a shaped recipe
    'A B',  
    ' C ',  # define the layout for the recipe
    'B A'
    ],{
        'A': 'minecraft:andesite',
        'B': 'minecraft:diorite',   # create the key for the recipe
        'C': 'minecraft:granite'
        })

recipes.smelting('minecraft:coal', 'minecraft:diamond')    # create a smelting recipe, output, input

recipes.campfireCooking('minecraft:torch', 'minecraft:stick')   # create a campfire cooking recipe, output, input

recipes.blasting('minecraft:coal_block', 'minecraft:diamond')   # create a blasting recipe, output, input

recipes.smithing('minecraft:gold_block', 'minecraft:gold_ingot', 'minecraft:iron_block')   # create a smelting recipe, output, input, upgrade item

recipes.custom({    # create a custom Json recipem useful for modded recipes, addon support will be implemented later
    "type": "tconstruct:entity_melting",
    "entity": {
        "types": [
            "minecraft:skeleton",
            "minecraft:stray"
        ]
    },
    "result": {
        "fluid": "tconstruct:molten_iron",
        "amount": 25
    },
    "damage": 2
})

recipes.remove({'id': 'minecraft:glowstone'})   # remove the recipe with the id 'minecraft:glowstone'


recipes.compile('recipes_kpy', '1.20.1')    # and finally compile the recipes to KubeJS code defining the script name and the Minecraft version you are using```