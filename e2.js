let map = new map();
map.set("in", "india");
map.set("usa", "untied state of america");
map.set("np", "nepal");
console.log(map);
for (const [key, value] of map) {
  console.log(key, ":-", value);
}
