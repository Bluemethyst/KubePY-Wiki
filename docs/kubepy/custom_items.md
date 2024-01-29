---
sidebar_label: 'Custom Items'
sidebar_position: 4
---
# Creating Custom Items

To create a custom item please refer to the example below. As always PLEASE refer to the <a href="https://kubejs.com/wiki/tutorials/item-registry" target="_blank">KubeJS wiki</a> for more information about recipes, not all things will work with KubePY and vice versa

```python
import kubepy   # import the KubePY module

instance_path = r"D:\Minecraft\instances\1.20.1(2)\.minecraft"  # set your .minecraft instance path so the scripts can be placed directly into them

items = kubepy.ItemRegistry(instance_path=instance_path)    # create an instance of the ItemRegistry class

items.create('test_item').texture('minecraft:block/torch').maxStackSize(16)   # create an item called Test Item that uses a torch texture and stacks to 16
items.create('test_item2').texture('minecraft:block/stone').maxStackSize(64).burnTime(120)  # create an item called Test Item 2 that uses a stone texture, stacks to 64 (the default) and burns in a furnace for 120 ticks
items.create('test_item3').texture('minecraft:block/blackstone').rarity('rare').displayName('Woah Items!')  # create an item with the name test_item3 but with the display name "Woah items!" and the rare rarity
items.create('test_tool', 'axe').texture('minecraft:item/diamond_axe').tier('diamond')  # create a custom axe called test tool that uses the diamond axe texture and has the same stats as the diamond tier

items.compile('items_kpy', '1.20.1')  # and finally compile the recipes to KubeJS code defining the script name and the Minecraft version you are using ```