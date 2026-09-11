class ShirtDesign {
  constructor({
    image = null,
    caption = "",
    color = "white",
    tagList = []
  } = {}) {
    this.image = image;              
    this.caption = caption;          
    this.color = color.toLowerCase();
    this.tagList = tagList.map(t => t.toLowerCase());
  }
}