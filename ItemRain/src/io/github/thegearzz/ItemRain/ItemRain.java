package io.github.thegearzz.ItemRain;

import org.bukkit.plugin.java.JavaPlugin;

public class ItemRain extends JavaPlugin {
	public void onEnable() {
		System.out.println("hello world!");
		getServer().getPluginManager().registerEvents(new RainListener(), this);
	}

}