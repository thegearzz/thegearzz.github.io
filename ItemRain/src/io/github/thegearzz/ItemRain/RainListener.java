package io.github.thegearzz.ItemRain;

import org.bukkit.Location;
import org.bukkit.Material;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.event.weather.WeatherChangeEvent;
import org.bukkit.inventory.ItemStack;

public class RainListener implements Listener {
	@EventHandler
	public void onRain(WeatherChangeEvent event) {
		if(event.toWeatherState()) {
			System.out.println("It's raining!");
			Location l = event.getWorld().getPlayers().get(0).getLocation();
			event.getWorld().dropItem(l, new ItemStack(Material.OAK_LOG));
		}
	}

}
