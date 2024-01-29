---
sidebar_label: 'Custom Blocks'
sidebar_position: 5
---

# Creating Custom Blocks

To create a custom block please refer to the example below. Blocks are very similar to items as how they are created. As always PLEASE refer to the <a href="https://kubejs.com/wiki/tutorials/block-registry" target="_blank">KubeJS wiki</a> for more information about recipes, not all things will work with KubePY and vice versa

```python
import kubepy   # import the KubePY module

instance_path = r"D:\Minecraft\instances\1.20.1(2)\.minecraft"  # set your .minecraft instance path so the scripts can be placed directly into them

blocks = kubepy.BlockRegistry(instance_path=instance_path)    # create an instance of the BlockRegistry class

blocks.create('test_block').textureAll('minecraft:block/oak_log')   # create a block called Test Block with all sides textured as a minecraft:oak_log
blocks.create('test_2').texture('up', 'minecraft:block/white_wool').waterlogged().transparent(True)    # create a block called Test 2 with the top texture as a minecraft:white_wool. The block can also be waterlogged and is transparent so it acts as glass

blocks.compile('blocks_kpy', '1.20.1')  # and finally compile the recipes to KubeJS code defining the script name and the Minecraft version you are using```