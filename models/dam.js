class Dam {
  constructor(
    id,
    categoryIds,
    unitIds,
    name,
    description,
    image,
    damLevel,
    capacity,
    size
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.unitIds = unitIds;
    this.name = name;
    this.description = description;
    this.image = image;
    this.damLevel = damLevel;
    this.capacity = capacity;
    this.size = size;
  }
}

export default Dam;
